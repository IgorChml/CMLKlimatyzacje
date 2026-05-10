export const revalidate = 86400

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

export async function fetchGoogleReviews(): Promise<PlaceReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    console.log('[google-reviews] Skipping — GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID not set')
    return null
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=pl&key=${apiKey}`

  try {
    console.log('[google-reviews] Fetching Place ID:', placeId)

    const res = await fetch(url, { next: { revalidate: 86400 } })

    if (!res.ok) {
      console.error('[google-reviews] HTTP error:', res.status, res.statusText)
      return null
    }

    const data = await res.json()

    console.log('[google-reviews] API status:', data.status, '| has result:', !!data.result)

    if (data.status !== 'OK' || !data.result) {
      console.error('[google-reviews] API error:', data.status, data.error_message ?? '')
      return null
    }

    const { rating, user_ratings_total, reviews } = data.result

    console.log(
      '[google-reviews] OK — rating:', rating,
      '| total:', user_ratings_total,
      '| reviews returned:', reviews?.length ?? 0,
    )

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
