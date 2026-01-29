const fs = require('fs')
const path = require('path')

const css = fs.readFileSync(path.join(__dirname, '..', 'src', 'styles.css'), 'utf8')

function parseVars(cssText){
  const rootMatch = cssText.match(/:root\s*\{([\s\S]*?)\}/)
  const vars = {}
  if (!rootMatch) return vars
  const body = rootMatch[1]
  const re = /--([a-z0-9-]+)\s*:\s*([^;]+);/gi
  let m
  while ((m = re.exec(body)) !== null){
    vars[m[1]] = m[2].trim()
  }
  return vars
}

function hexToRgb(hex){
  hex = hex.replace('#','')
  if (hex.length===3) hex = hex.split('').map(c=>c+c).join('')
  const bigint = parseInt(hex,16)
  return [(bigint>>16)&255, (bigint>>8)&255, bigint&255]
}

function parseColor(str){
  str = str.trim()
  if (str.startsWith('#')) return hexToRgb(str)
  const rgba = str.match(/rgba?\(([^)]+)\)/)
  if (rgba){
    const parts = rgba[1].split(',').map(s=>s.trim())
    return parts.slice(0,3).map(Number)
  }
  return null
}

function srgbToLin(v){
  v = v/255
  return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055,2.4)
}

function luminance(rgb){
  const r = srgbToLin(rgb[0])
  const g = srgbToLin(rgb[1])
  const b = srgbToLin(rgb[2])
  return 0.2126*r + 0.7152*g + 0.0722*b
}

function contrast(rgb1, rgb2){
  const L1 = luminance(rgb1)
  const L2 = luminance(rgb2)
  const [maxL, minL] = L1> L2 ? [L1,L2] : [L2,L1]
  return (maxL+0.05)/(minL+0.05)
}

const vars = parseVars(css)

function resolve(v){
  if (!v) return null
  v = v.trim()
  const varMatch = v.match(/var\(--([a-z0-9-]+)\)/i)
  if (varMatch){
    return vars[varMatch[1]] || null
  }
  return v
}

const results = []

function checkPair(a,b, label){
  const sa = resolve(a)
  const sb = resolve(b)
  const ra = parseColor(sa)
  const rb = parseColor(sb)
  if (!ra || !rb) {
    results.push(`${label}: unable to parse colors (${sa} / ${sb})`)
    return
  }
  const cr = contrast(ra, rb)
  const aa = cr>=4.5 ? 'PASS' : 'FAIL'
  const large = cr>=3 ? 'PASS' : 'FAIL'
  results.push(`${label}: ${sa} on ${sb} → ${cr.toFixed(2)}:1 — AA normal: ${aa}, AA large: ${large}`)
}

results.push('Detected CSS variables:')
Object.keys(vars).forEach(k=> results.push(`--${k}: ${vars[k]}`))
results.push('\nChecking key UI color pairs...')

checkPair('var(--text)', 'var(--bg)', 'Body text on background')
checkPair('var(--bg)', 'var(--text)', 'Footer text (bg on text)')
checkPair('#ffffff', 'var(--accent)', 'White on primary accent (buttons)')
checkPair('var(--accent)', 'var(--bg)', 'Primary accent on background (links hover)')
checkPair('var(--accent-aqua)', 'var(--bg)', 'Aquamarine on background')
checkPair('var(--text)', 'var(--muted)', 'Text on muted')
checkPair('#ffffff', 'var(--accent-2)', 'White on accent-2 (btn-accent)')

const out = results.join('\n')
fs.writeFileSync(path.join(__dirname, 'contrast-report.txt'), out, 'utf8')
console.log('Contrast report written to scripts/contrast-report.txt')
process.exit(0)
