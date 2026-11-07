import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distIndex = path.resolve(__dirname, '../dist/index.html')
const html = fs.readFileSync(distIndex, 'utf-8')

console.log('=== SEO AUDIT OF DIST/INDEX.HTML ===')

// Arial 20px font widths as used by Google SERP & Seobility
const widths20px = {
  ' ': 5.56, '!': 6.66, '"': 7.10, '#': 11.12, '$': 11.12, '%': 17.78, '&': 13.34, "'": 3.88,
  '(': 6.66, ')': 6.66, '*': 7.78, '+': 11.66, ',': 5.56, '-': 6.66, '.': 5.56, '/': 5.56,
  '0': 11.12, '1': 11.12, '2': 11.12, '3': 11.12, '4': 11.12, '5': 11.12, '6': 11.12, '7': 11.12,
  '8': 11.12, '9': 11.12, ':': 5.56, ';': 5.56, '<': 11.66, '=': 11.66, '>': 11.66, '?': 11.12,
  '@': 20.30, 'A': 13.34, 'B': 13.34, 'C': 14.44, 'D': 14.44, 'E': 13.34, 'F': 12.22, 'G': 15.56,
  'H': 14.44, 'I': 5.56, 'J': 10.00, 'K': 13.34, 'L': 11.12, 'M': 17.78, 'N': 14.44, 'O': 15.56,
  'P': 13.34, 'Q': 15.56, 'R': 14.44, 'S': 13.34, 'T': 12.22, 'U': 14.44, 'V': 13.34, 'W': 18.88,
  'X': 13.34, 'Y': 13.34, 'Z': 12.22, '[': 5.56, '\\': 5.56, ']': 5.56, '^': 9.38, '_': 11.12,
  '`': 6.66, 'a': 11.12, 'b': 11.12, 'c': 10.00, 'd': 11.12, 'e': 11.12, 'f': 5.56, 'g': 11.12,
  'h': 11.12, 'i': 4.44, 'j': 4.44, 'k': 10.00, 'l': 4.44, 'm': 16.66, 'n': 11.12, 'o': 11.12,
  'p': 11.12, 'q': 11.12, 'r': 6.66, 's': 10.00, 't': 5.56, 'u': 11.12, 'v': 10.00, 'w': 14.44,
  'x': 10.00, 'y': 10.00, 'z': 10.00, '{': 6.68, '|': 5.18, '}': 6.68, '~': 11.66
}

function measurePx(str) {
  let w = 0
  for (const c of str) w += widths20px[c] || 11.12
  return Math.round(w)
}

// Title
const rawTitle = html.match(/<title>(.*?)<\/title>/i)?.[1]
const decodedTitle = rawTitle?.replace(/&amp;/g, '&') || ''
const titlePx = measurePx(decodedTitle)
console.log('1. Title:', decodedTitle)
console.log('   Length:', decodedTitle.length, 'chars | Approx Pixel Width:', titlePx, 'px (Limit: 580px)')

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
const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim())
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
const duplicateAnchors = Object.entries(anchorMap).filter(([_, hrefs]) => hrefs.length > 1)
console.log('6. Duplicate Anchor Texts Count:', duplicateAnchors.length)

// Title Candidates test
console.log('7. Testing Title Candidates under 580px:')
const candidates = [
  'Rayqon AI | Enterprise Software, Cloud & AI Solutions',
  'Rayqon AI | Software, Cloud & AI Engineering Solutions',
  'Rayqon AI | Software Engineering, Cloud & AI Solutions',
  'Rayqon AI | Enterprise Cloud, Software & AI Solutions'
]
for (const c of candidates) {
  console.log(`   - "${c}": ${c.length} chars, ~${measurePx(c)}px`)
}

console.log('=== AUDIT COMPLETE ===')
