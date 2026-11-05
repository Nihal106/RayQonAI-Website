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
console.log('1. Title:', title)

// Meta Description
const desc = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i)?.[1]
console.log('2. Meta Description:', desc)

// Canonical
const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i)?.[1]
console.log('3. Canonical URL:', canonical)

// Language
const lang = html.match(/<html[^>]*lang=["'](.*?)["']/i)?.[1]
console.log('4. HTML Language:', lang)

// H1 Heading
const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim())
console.log('5. H1 Count:', h1s.length, '=>', h1s)

// H2 Headings
const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim())
console.log('6. H2 Count:', h2s.length, '=>', h2s)

// H3 Headings
const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim())
console.log('7. H3 Count:', h3s.length)

// Links
const allLinks = [...html.matchAll(/<a[^>]*href=["'](.*?)["'][^>]*>/gi)].map(m => m[1])
const internal = allLinks.filter(href => href.startsWith('/') || href.startsWith('#'))
const external = allLinks.filter(href => href.startsWith('http') || href.startsWith('mailto'))
console.log('8. Total Links:', allLinks.length)
console.log('   Internal Links:', internal.length)
console.log('   External Links:', external.length, '=>', external)

// Word count in rendered body
const bodyHtml = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || html
const cleanText = bodyHtml
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
const words = cleanText.split(' ').filter(w => w.length > 0)
console.log('9. Clean Word Count:', words.length)

// Check robots.txt and sitemap.xml
const robots = fs.existsSync(path.resolve(__dirname, '../dist/robots.txt'))
const sitemap = fs.existsSync(path.resolve(__dirname, '../dist/sitemap.xml'))
console.log('10. robots.txt exists:', robots)
console.log('11. sitemap.xml exists:', sitemap)
console.log('=== AUDIT COMPLETE ===')
