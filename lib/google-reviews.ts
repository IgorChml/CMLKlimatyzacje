export interface GoogleReview {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
  time: number
}

export interface PlaceReviewsData {
  rating: number
  user_ratings_total: number
  reviews: GoogleReview[]
}

const PLACES_API_BASE = 'https://maps.googleapis.com/maps/api/place/details/json'

export async function fetchGoogleReviews(): Promise<PlaceReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return null
  }

  try {
    const url = `${PLACES_API_BASE}?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=pl&key=${apiKey}`

    const res = await fetch(url, {
      next: { revalidate: 86400 },
    })

    if (!res.ok) {
      console.error('[google-reviews] HTTP error:', res.status)
      return null
    }

    const data = await res.json()

    if (data.status !== 'OK' || !data.result) {
      console.error('[google-reviews] API error:', data.status, data.error_message)
      return null
    }

    const { rating, user_ratings_total, reviews } = data.result

    return {
      rating: rating ?? 0,
      user_ratings_total: user_ratings_total ?? 0,
      reviews: (reviews ?? []).slice(0, 5),
    }
  } catch (err) {
    console.error('[google-reviews] Fetch failed:', err)
    return null
  }
}
