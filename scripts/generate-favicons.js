import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { spawnSync } from 'child_process'

const root = process.cwd()
const input = path.join(root, 'src', 'assets', 'logo-monogram.svg')
const out = path.join(root, 'public')
const svgExists = fs.existsSync(input)
if (!svgExists) {
  console.warn('Input SVG not found, will use existing PNGs in public/ if available:', input)
}
fs.mkdirSync(out, { recursive: true })

const baseSizes = [16, 32, 128, 256, 512]

async function makePng(size){
  const name = `favicon-${size}x${size}.png`
  const outPath = path.join(out, name)
  await sharp(input).resize(size, size).png().toFile(outPath)
  console.log('Wrote', outPath)
  return outPath
}

async function makePng2x(size){
  const name = `favicon-${size}x${size}@2x.png`
  const outPath = path.join(out, name)
  await sharp(input).resize(size * 2, size * 2).png().toFile(outPath)
  console.log('Wrote', outPath)
  return outPath
}

function makeIcoWithConvert(){
  const which = spawnSync('which', ['convert'])
  if (which.status !== 0) return false
  // Prefer SVG-generated PNGs in public/, otherwise use any existing favicon-*.png
  let imgs = baseSizes.map(s => path.join(out, `favicon-${s}x${s}.png`)).filter(p => fs.existsSync(p))
  if (imgs.length === 0){
    imgs = fs.readdirSync(out).filter(f => f.match(/^favicon-.*x.*\.png$/)).map(f => path.join(out,f))
  }
  if (imgs.length === 0) return false
  const args = [...imgs, path.join(out, 'favicon.ico')]
  const res = spawnSync('convert', args, { stdio: 'inherit' })
  return res.status === 0
}

async function makeIco(){
  try{
    const ok = makeIcoWithConvert()
    if (ok){
      console.log('Wrote multi-size favicon.ico using ImageMagick')
      return
    }
  }catch(e){
    // fallthrough to png copy
  }
  const src32 = path.join(out, 'favicon-32x32.png')
  const outIco = path.join(out, 'favicon.ico')
  if (fs.existsSync(src32)){
    fs.copyFileSync(src32, outIco)
    console.log('Wrote (copied PNG as .ico) ', outIco)
  }
}

async function main(){
  try{
    if (svgExists){
      await Promise.all(baseSizes.flatMap(s => [makePng(s), makePng2x(s)]))
      await makeIco()
      await sharp(input).resize(180,180).png().toFile(path.join(out, 'apple-touch-icon.png'))
    }else{
      // No SVG: try to create ICO from existing PNGs and generate apple-touch from largest PNG
      const icoOk = makeIcoWithConvert()
      if (!icoOk){
        const src32 = path.join(out, 'favicon-32x32.png')
        if (fs.existsSync(src32)) fs.copyFileSync(src32, path.join(out, 'favicon.ico'))
      }
      // create apple-touch from largest available PNG
      const pngs = fs.readdirSync(out).filter(f => f.endsWith('.png')).map(f => path.join(out,f))
      if (pngs.length){
        pngs.sort((a,b)=> fs.statSync(b).size - fs.statSync(a).size)
        const largest = pngs[0]
        await sharp(largest).resize(180,180).png().toFile(path.join(out, 'apple-touch-icon.png'))
        console.log('Wrote apple-touch-icon.png from', largest)
      }
    }
    console.log('Favicons generation complete.')
  }catch(err){
    console.error('Error generating favicons:', err)
    process.exit(1)
  }
}

main()
