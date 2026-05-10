// Run after setting real key: node scripts/test-google-reviews.mjs
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))
const envPath = join(dir, '..', '.env.local')

// Parse .env.local manually (no dotenv dependency needed)
const env = Object.fromEntries(
  readFileSync(envPath, 'utf8')
    .split('\n')
    .filter(l => l && !l.startsWith('#') && l.includes('='))
    .map(l => l.split('=').map(s => s.trim()))
)

const apiKey = env.GOOGLE_PLACES_API_KEY
const placeId = env.GOOGLE_PLACE_ID

console.log('GOOGLE_PLACES_API_KEY:', apiKey ? `SET (${apiKey.slice(0, 8)}...)` : 'MISSING')
console.log('GOOGLE_PLACE_ID:      ', placeId ?? 'MISSING')

if (!apiKey || apiKey === 'your_key_here') {
  console.error('\n❌  Replace GOOGLE_PLACES_API_KEY in .env.local with a real key first.')
  process.exit(1)
}

const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=pl&key=${apiKey}`
console.log('\nFetching…')

const res = await fetch(url)
const data = await res.json()

console.log('API status:', data.status)

if (data.status !== 'OK') {
  console.error('error_message:', data.error_message)
  process.exit(1)
}

const { rating, user_ratings_total, reviews } = data.result
console.log(`\n✅  rating: ${rating}  |  total reviews: ${user_ratings_total}`)
console.log(`   returned ${reviews?.length ?? 0} review(s)`)
reviews?.slice(0, 2).forEach((r, i) => {
  console.log(`\n   [${i + 1}] ${r.author_name} ★${r.rating}  (${r.relative_time_description})`)
  console.log(`       "${r.text?.slice(0, 80)}…"`)
})
