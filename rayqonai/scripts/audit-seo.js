import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distIndex = path.resolve(__dirname, '../dist/index.html')
const html = fs.readFileSync(distIndex, 'utf-8')

console.log('=== SEO AUDIT OF DIST/INDEX.HTML ===')

// Title
const title = html.match(/<title>(.*?)<\/title>/i)?.[1]
console.log('1. Title:', title, `(${title?.length} chars)`)

// Meta Description
const desc = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i)?.[1]
console.log('2. Meta Description:', desc, `(${desc?.length} chars)`)

// Canonical
const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i)?.[1]
console.log('3. Canonical URL:', canonical)

// Apple touch icon
const appleTouchIcon = html.match(/<link[^>]*rel=["']apple-touch-icon["'][^>]*>/i)?.[0]
console.log('4. Apple Touch Icon:', appleTouchIcon || 'MISSING')

// H1 Heading
const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim())
console.log('5. H1 Count:', h1s.length, '=>', h1s)

// Anchor text analysis
const linkRegex = /<a[^>]*href=["'](.*?)["'][^>]*>([\s\S]*?)<\/a>/gi
const matches = [...html.matchAll(linkRegex)]
const anchorMap = {}
for (const m of matches) {
  const href = m[1]
  const text = m[2].replace(/<[^>]+>/g, '').trim()
  if (!anchorMap[text]) anchorMap[text] = []
  anchorMap[text].push(href)
}
console.log('6. Anchor Texts Used Multiple Times:')
for (const [text, hrefs] of Object.entries(anchorMap)) {
  if (hrefs.length > 1) {
    console.log(`   - "${text}" (${hrefs.length}x) ->`, [...new Set(hrefs)])
  }
}

// Keyword overlap between Title, H1, Description, and Body
const bodyHtml = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || html
const cleanText = bodyHtml
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ' ')
  .replace(/\s+/g, ' ')
  .toLowerCase()

const h1Words = (h1s[0] || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/).filter(w => w.length > 3)
console.log('7. H1 Significant Words & Frequencies in Body:')
for (const word of h1Words) {
  const count = (cleanText.match(new RegExp('\\b' + word + '\\b', 'g')) || []).length
  console.log(`   - "${word}": ${count} times`)
}

const titleWords = (title || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/).filter(w => w.length > 3)
console.log('8. Title Significant Words & Frequencies in Body:')
for (const word of titleWords) {
  const count = (cleanText.match(new RegExp('\\b' + word + '\\b', 'g')) || []).length
  console.log(`   - "${word}": ${count} times`)
}

console.log('=== AUDIT COMPLETE ===')
