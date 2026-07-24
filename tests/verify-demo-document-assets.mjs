import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..')
const require = createRequire(import.meta.url)
const assets = require('../demo-document-assets.js')

assert.equal(assets.FILENAMES.length, 17, 'Expected the complete 17-document demo package.')
assert.equal(new Set(assets.FILENAMES).size, 17, 'Demo filenames must be unique.')

const indexHtml = await readFile(path.join(root, 'index.html'), 'utf8')
const seededNames = [
  ...indexHtml.matchAll(/fileName:"([^"]+\.pdf)"/g),
].map((match) => match[1])
const uniqueSeededNames = [...new Set(seededNames)].sort()

assert.deepEqual(
  uniqueSeededNames,
  [...assets.FILENAMES].sort(),
  'Every seeded review filename must resolve to a real synthetic PDF.',
)

assert.ok(indexHtml.includes('<script src="./demo-document-assets.js"></script>'))
assert.ok(indexHtml.includes('data-document-preview={f}'))
assert.ok(indexHtml.includes('Open full size'))
assert.ok(indexHtml.includes('<iframe title={dName(d)+" - "+f}'))
assert.ok(indexHtml.includes('<img src={asset.previewUrl||asset.url}'))
assert.ok(
  !indexHtml.includes('In production the PDF renders here'),
  'The production-placeholder copy must not return.',
)
assert.ok(
  !indexHtml.includes('download={'),
  'Document review must not add a download action.',
)

for (const filename of assets.FILENAMES) {
  const pdfPath = path.join(root, 'output', 'pdf', 'demo-documents', filename)
  const previewPath = path.join(
    root,
    'output',
    'pdf',
    'demo-documents',
    'previews',
    filename.replace(/\.pdf$/i, '.png'),
  )
  const bytes = await readFile(pdfPath)
  const previewBytes = await readFile(previewPath)
  assert.ok(bytes.length > 2500, `${filename} should contain a substantive rendered document.`)
  assert.equal(bytes.subarray(0, 5).toString('ascii'), '%PDF-', `${filename} must be a PDF.`)
  assert.ok(bytes.subarray(-32).toString('ascii').includes('%%EOF'), `${filename} must close cleanly.`)

  const resolved = assets.resolve({ fileName: filename }, [])
  assert.equal(resolved?.name, filename)
  assert.ok(previewBytes.length > 50000, `${filename} should have a substantive PNG preview.`)
  assert.deepEqual(
    [...previewBytes.subarray(0, 8)],
    [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
    `${filename} preview must be a PNG.`,
  )
  assert.equal(resolved?.kind, 'image')
  assert.equal(resolved?.mimeType, 'application/pdf')
  assert.equal(resolved?.synthetic, true)
  assert.ok(resolved?.url.endsWith(encodeURIComponent(filename)))
  assert.ok(resolved?.previewUrl.endsWith(encodeURIComponent(filename.replace(/\.pdf$/i, '.png'))))
}

const directImage = assets.resolve(
  { fileName: 'replacement-license.png' },
  [
    {
      mimeType: 'image/png',
      name: 'replacement-license.png',
      previewUrl: 'data:image/png;base64,ZmFrZQ==',
      status: 'current',
    },
  ],
)
assert.equal(directImage?.kind, 'image')
assert.equal(directImage?.url, 'data:image/png;base64,ZmFrZQ==')

console.log(
  `Demo document checks passed: ${assets.FILENAMES.length} seeded PDFs resolve to actual preview assets with full-size viewing.`,
)
