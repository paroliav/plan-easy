export type PoiHit = {
  objectID: string
  poi_id?: number
  poi_uuid?: string
  poi_name?: string
  poi_description?: string
  poi_images?: string[]
  poi_status?: string
  poi_fees?: string
  major_category?: string
  minor_category?: string[] | string
  address?: string
  country?: string
  country_code?: string
  state?: string
  state_code?: string
  locality?: string
  tourism_region?: string
  council?: string
  rating?: number
  reviews?: number
  thumbs_up?: number
  thumbs_down?: number
  booking_url?: string | null
  website_url?: string | null
  _geoloc?: { lat: number; lng: number }
}
