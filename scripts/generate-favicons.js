import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const root = process.cwd()
const input = path.join(root, 'src', 'assets', 'logo-monogram.svg')
const out = path.join(root, 'public')
if (!fs.existsSync(input)) {
  console.error('Input SVG not found:', input)
  process.exit(2)
}
fs.mkdirSync(out, { recursive: true })

async function makePng(size){
  const outPath = path.join(out, `favicon-${size}.png`)
  await sharp(input).resize(size, size).png().toFile(outPath)
  console.log('Wrote', outPath)
  return outPath
}

// Note: ICO generation via third-party packages is omitted to avoid incompatible native deps.
// We write PNG favicons and an apple-touch-icon which are widely supported.
async function makeIco(){
  // create a 32x32 PNG and duplicate as favicon.ico (best-effort)
  const src32 = path.join(out, 'favicon-32.png')
  const outIco = path.join(out, 'favicon.ico')
  if (fs.existsSync(src32)){
    fs.copyFileSync(src32, outIco)
    console.log('Wrote (copied PNG as .ico) ', outIco)
  }
}

async function main(){
  try{
    await Promise.all([16,32,48,180].map(s => makePng(s)))
    await makeIco()
    // also create apple-touch-icon
    await sharp(input).resize(180,180).png().toFile(path.join(out, 'apple-touch-icon.png'))
    console.log('Favicons generation complete.')
  }catch(err){
    console.error('Error generating favicons:', err)
    process.exit(1)
  }
}

main()
