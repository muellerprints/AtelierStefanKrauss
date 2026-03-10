#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import process from 'process'

const ROOT = process.cwd()
const I18N_PATH = path.join(ROOT, 'src', 'i18n.js')
const FORCE = process.argv.includes('--force') || process.env.TRANSLATE_FORCE === '1'

function findResourcesBlock(src) {
  const marker = 'const resources ='
  const i = src.indexOf(marker)
  if (i === -1) throw new Error('resources marker not found')
  const start = src.indexOf('{', i)
  let depth = 0
  let end = -1
  for (let j = start; j < src.length; j++) {
    const ch = src[j]
    if (ch === '{') depth++
    else if (ch === '}') {
      depth--
      if (depth === 0) { end = j; break }
    }
  }
  if (end === -1) throw new Error('could not find end of resources object')
  return { start, end: end + 1, text: src.slice(start, end + 1) }
}

function evalObjectLiteral(objStr) {
  // Evaluate the object literal in an isolated function scope
  // eslint-disable-next-line no-new-func
  const fn = new Function('return (' + objStr + ')')
  return fn()
}

async function translateText(text) {
  if (!text || typeof text !== 'string') return text
  const deeplKey = process.env.DEEPL_API_KEY
  try {
    if (deeplKey) {
      const url = 'https://api-free.deepl.com/v2/translate'
      const params = new URLSearchParams()
      params.append('auth_key', deeplKey)
      params.append('text', text)
      params.append('source_lang', 'DE')
      params.append('target_lang', 'EN')
      const res = await fetch(url, { method: 'POST', body: params })
      const data = await res.json()
      return data.translations && data.translations[0] && data.translations[0].text || text
    }

    // fallback: LibreTranslate public instance
    const res = await fetch('https://libretranslate.com/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q: text, source: 'de', target: 'en', format: 'text' })
    })
    const data = await res.json()
    if (data && data.translatedText) return data.translatedText
  } catch (e) {
    console.error('translateText error:', e.message)
  }
  return text
}

function isPlainObject(v) { return v && typeof v === 'object' && !Array.isArray(v) }

async function syncTranslate(deObj, enObj) {
  if (typeof deObj === 'string') return await translateText(deObj)
  if (Array.isArray(deObj)) {
    const out = []
    for (let i = 0; i < deObj.length; i++) {
      const val = deObj[i]
      if (typeof val === 'string') {
        const prev = (enObj && enObj[i]) || ''
        if (!prev || prev === val) out[i] = await translateText(val)
        else out[i] = prev
      } else if (isPlainObject(val)) {
        out[i] = await syncTranslate(val, (enObj && enObj[i]) || {})
      } else out[i] = val
    }
    return out
  }
  // object
  const out = {}
  for (const k of Object.keys(deObj)) {
    const dv = deObj[k]
    const ev = enObj && enObj[k]
    if (typeof dv === 'string') {
      if (FORCE || !ev || ev === dv) out[k] = await translateText(dv)
      else out[k] = ev
    } else if (Array.isArray(dv) || isPlainObject(dv)) {
      out[k] = await syncTranslate(dv, ev || (Array.isArray(dv) ? [] : {}))
    } else {
      out[k] = dv
    }
  }
  // keep keys that are in enObj but not in deObj
  if (isPlainObject(enObj)) {
    for (const k of Object.keys(enObj)) if (!(k in out)) out[k] = enObj[k]
  }
  return out
}

function jsStringify(val, indent = 2, level = 0) {
  const pad = ' '.repeat(level * indent)
  if (typeof val === 'string') {
    if (val.includes('\n')) return '`' + val.replace(/`/g, '\\`') + '`'
    return "'" + val.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"
  }
  if (typeof val === 'number' || typeof val === 'boolean' || val === null) return String(val)
  if (Array.isArray(val)) {
    if (val.length === 0) return '[]'
    const items = val.map(v => jsStringify(v, indent, level + 1))
    return '[\n' + items.map(i => pad + ' '.repeat(indent) + i).join(',\n') + '\n' + pad + ']'
  }
  if (isPlainObject(val)) {
    const keys = Object.keys(val)
    if (keys.length === 0) return '{}'
    const items = keys.map(k => {
      const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : '[' + jsStringify(k) + ']'
      return pad + ' '.repeat(indent) + key + ': ' + jsStringify(val[k], indent, level + 1)
    })
    return '{\n' + items.join(',\n') + '\n' + pad + '}'
  }
  return 'undefined'
}

async function main() {
  console.log('Reading', I18N_PATH)
  const src = fs.readFileSync(I18N_PATH, 'utf8')
  const block = findResourcesBlock(src)
  const resources = evalObjectLiteral(block.text)
  if (!resources.de || !resources.de.translation) throw new Error('no de.translation found')
  const de = resources.de.translation
  const en = (resources.en && resources.en.translation) || {}

  console.log('Translating changed/missing strings from German -> English...')
  const newEn = await syncTranslate(de, en)

  // assign back
  resources.en = resources.en || {}
  resources.en.translation = newEn

  // create replacement string
  const replacement = jsStringify(resources, 2, 0)
  const newSrc = src.slice(0, block.start) + replacement + src.slice(block.end)
  fs.writeFileSync(I18N_PATH, newSrc, 'utf8')
  console.log('Updated', I18N_PATH)
}

main().catch(err => { console.error(err); process.exit(1) })
