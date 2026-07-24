import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'

const protectedFiles = {
  'src/components/sections/Top.jsx': '3E1AA2881316E8D8CBFBEA06F7CFD468CEC3B3B0B8D9A5DA45A6AD21F29819E9',
  'src/components/sections/Model.jsx': '49833BED6D9066D09181A253587549A7355BD208594A19B06121F41684F23B03',
  'src/components/sections/CyberEarth.jsx': '9655DC24E7FE0BCE791FF71A6A6AB88041B33C7132B5D96A8EBE1A3C6C91631E',
  'public/cyber_djinn.glb': '42E039F5B3383E3E834FF60633A93B01A1D6E4059E43E3AE03F5E839F660E587',
}

let failed = false

for (const [path, expected] of Object.entries(protectedFiles)) {
  const contents = await readFile(new URL(`../${path}`, import.meta.url))
  const actual = createHash('sha256').update(contents).digest('hex').toUpperCase()
  if (actual !== expected) {
    failed = true
    console.error(`Protected 3D asset changed: ${path}`)
    console.error(`Expected ${expected}`)
    console.error(`Actual   ${actual}`)
  } else {
    console.log(`Protected: ${path}`)
  }
}

if (failed) process.exitCode = 1

