#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const ROOT = process.cwd()
const TARGET_DIRS = [
  path.join(ROOT, 'public', 'assets', 'photos'),
  path.join(ROOT, 'src', 'assets', 'photos')
]
const BACKUP_DIR = path.join(ROOT, 'scripts', 'image-backups', new Date().toISOString().replace(/[:.]/g,'-'))
const MAX_WIDTH = 2000
const QUALITY = 78

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }) } catch (e) {}
}

async function findJpegs(dir) {
  const results = []
  try {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true })
    for (const e of entries) {
      const res = path.join(dir, e.name)
      if (e.isDirectory()) {
        results.push(...await findJpegs(res))
      } else if (/\.jpe?g$/i.test(e.name)) {
        results.push(res)
      }
    }
  } catch (e) {
    // ignore missing directories
  }
  return results
}

async function optimize(file, backupDir) {
  const stat = await fs.promises.stat(file)
  const originalSize = stat.size
  const rel = path.relative(ROOT, file)

  // backup
  const destBackup = path.join(backupDir, rel)
  ensureDir(path.dirname(destBackup))
  await fs.promises.copyFile(file, destBackup)

  // process with sharp
  const img = sharp(file)
  const meta = await img.metadata()
  let pipeline = img
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH })
  }
  // write to a temp file first
  const tmp = file + '.opt'
  await pipeline.jpeg({ quality: QUALITY, progressive: true, mozjpeg: true }).toFile(tmp)
  const newStat = await fs.promises.stat(tmp)
  const newSize = newStat.size

  // replace original
  await fs.promises.rename(tmp, file)

  return { file: rel, originalSize, newSize }
}

async function main() {
  console.log('Scanning directories for JPEGs...')
  ensureDir(BACKUP_DIR)
  const all = []
  for (const d of TARGET_DIRS) {
    const found = await findJpegs(d)
    all.push(...found)
  }
  if (!all.length) {
    console.log('No JPEGs found in target directories.')
    return
  }
  console.log(`Found ${all.length} files. Backups will be stored under ${path.relative(ROOT, BACKUP_DIR)}`)

  let totalBefore = 0
  let totalAfter = 0
  const results = []
  for (const f of all) {
    try {
      const r = await optimize(f, BACKUP_DIR)
      totalBefore += r.originalSize
      totalAfter += r.newSize
      results.push(r)
      const saved = r.originalSize - r.newSize
      const pct = ((saved / r.originalSize) * 100).toFixed(1)
      console.log(`${r.file}: ${Math.round(r.originalSize/1024)}KB -> ${Math.round(r.newSize/1024)}KB (saved ${Math.round(saved/1024)}KB, ${pct}%)`)
    } catch (e) {
      console.error('Error optimizing', f, e.message)
    }
  }

  const totSaved = totalBefore - totalAfter
  const totPct = (totSaved / totalBefore * 100).toFixed(1)
  console.log('---')
  console.log(`Total: ${Math.round(totalBefore/1024)}KB -> ${Math.round(totalAfter/1024)}KB (saved ${Math.round(totSaved/1024)}KB, ${totPct}%)`)
  console.log(`Backups: ${path.relative(ROOT, BACKUP_DIR)}`)
}

main().catch(err => { console.error(err); process.exit(1) })
