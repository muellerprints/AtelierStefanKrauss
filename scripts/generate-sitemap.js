#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const SITE_URL = (process.env.SITE_URL || process.env.VITE_SITE_URL || process.env.BASE_URL || 'https://goldschmiedeatelier-krauss.de').replace(/\/$/, '')

function toKebab(name) {
  const base = name.replace(/\.[^.]+$/, '')
  if (/^(home|index)$/i.test(base)) return ''
  return base
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .toLowerCase()
}

async function gatherPages() {
  const pagesDir = path.resolve('src/pages')
  try {
    const entries = await fs.readdir(pagesDir)
    return entries.filter(e => /\.(js|jsx|ts|tsx)$/.test(e)).map(f => ({ file: path.join(pagesDir, f), route: toKebab(f) }))
  } catch (e) {
    // fallback to a conservative list
    return [
      { route: '' },
      { route: 'about' },
      { route: 'atelier' },
      { route: 'services' },
      { route: 'contact' },
      { route: 'directions' },
      { route: 'opening-hours' },
      { route: 'impressum' },
      { route: 'privacy' },
      { route: 'terms' },
      { route: 'payment' },
      { route: 'shipping' }
    ]
  }
}

async function lastModFor(filePath) {
  try {
    const st = await fs.stat(filePath)
    return new Date(st.mtime).toISOString().slice(0, 10)
  } catch (e) {
    return new Date().toISOString().slice(0, 10)
  }
}

function makeUrlEntry(loc, lastmod, changefreq = 'monthly', priority = '0.5') {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
}

;(async function main() {
  const pages = await gatherPages()

  // remove duplicates and ensure root first
  const seen = new Set()
  const routes = []
  // prefer explicit list ordering: root first
  routes.push({ route: '' })
  for (const p of pages) {
    if (!p.route || p.route === '') continue
    if (seen.has(p.route)) continue
    seen.add(p.route)
    routes.push(p)
  }

  const urls = []
  for (const r of routes) {
    const routePath = r.route ? `/${r.route}` : '/'
    const filePath = r.file || path.resolve('src', 'pages', (r.route ? r.route : 'Home') + '.jsx')
    const lastmod = await lastModFor(filePath)
    let changefreq = 'monthly'
    let priority = '0.5'
    if (routePath === '/') { changefreq = 'weekly'; priority = '1.0' }
    else if (/about|atelier|services/.test(routePath)) { priority = '0.8' }
    else if (/contact|opening|directions/.test(routePath)) { priority = '0.7' }

    urls.push(makeUrlEntry(`${SITE_URL}${routePath === '/' ? '/' : routePath}`, lastmod, changefreq, priority))
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`

  const outPath = path.resolve('public', 'sitemap.xml')
  await fs.writeFile(outPath, xml, 'utf8')
  console.log('Wrote sitemap to', outPath)
})().catch(err => { console.error(err); process.exit(1) })
