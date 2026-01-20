import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { CampsiteGallery } from "@/components/campsite-gallery"
import { CampsiteInfo } from "@/components/campsite-info"
import { CampsiteAmenities } from "@/components/campsite-amenities"
import { CampsiteReviews } from "@/components/campsite-reviews"
import { CampsiteLocation } from "@/components/campsite-location"
import { CampsiteBooking } from "@/components/campsite-booking"
import { NearbySites } from "@/components/nearby-sites"
import { searchPlaces } from "@/lib/algolia/server"
import { PoiHit } from "@/lib/algolia/types"

// Transform Algolia hit to campsite format
function transformHitToCampsite(hit: PoiHit) {
  const isFree = !hit.poi_fees || hit.poi_fees.toLowerCase().includes('free') || hit.poi_fees === 'null'
  const priceMatch = hit.poi_fees?.match(/\$(\d+)/)
  const price = priceMatch ? parseInt(priceMatch[1]) : 0

  // Extract amenities from minor_category
  const siteTypes: string[] = []
  const facilities: string[] = []
  const services: string[] = []
  const activities: string[] = []

  if (hit.minor_category) {
    const categories = Array.isArray(hit.minor_category) ? hit.minor_category : [hit.minor_category]
    categories.forEach((cat: string) => {
      if (cat.includes('Cabin') || cat.includes('Twin') || cat.includes('Single')) siteTypes.push(cat)
      if (cat.includes('Toilet') || cat.includes('Shower') || cat.includes('Water') || cat.includes('Dump')) facilities.push(cat)
      if (cat.includes('WiFi') || cat.includes('Wifi') || cat.includes('Laundry') || cat.includes('Kitchen')) services.push(cat)
      if (cat.includes('Boat') || cat.includes('Fishing') || cat.includes('Hiking')) activities.push(cat)
    })
  }

  // Extract coordinates
  let coordinates = { lat: 0, lng: 0 }
  if (hit._geoloc) {
    coordinates = { lat: hit._geoloc.lat, lng: hit._geoloc.lng }
  } else if (hit.poi_geogpoint) {
    // Parse POINT(lng lat) format
    const match = hit.poi_geogpoint.match(/POINT\(([-\d.]+)\s+([-\d.]+)\)/)
    if (match) {
      coordinates = { lat: parseFloat(match[2]), lng: parseFloat(match[1]) }
    }
  }

  // Determine suitability
  const suitability: string[] = []
  if (hit.minor_category) {
    const categories = Array.isArray(hit.minor_category) ? hit.minor_category : [hit.minor_category]
    const catStr = categories.join(' ').toLowerCase()
    if (catStr.includes('pets')) suitability.push('Pet friendly')
    if (catStr.includes('family') || catStr.includes('playground')) suitability.push('Family friendly')
    if (catStr.includes('accessible')) suitability.push('Accessible')
    if (catStr.includes('ev') || catStr.includes('electric')) suitability.push('EV charging nearby')
  }

  return {
    id: hit.objectID || hit.poi_id?.toString() || '',
    name: hit.poi_name || 'Unknown',
    location: [hit.locality, hit.state, hit.country].filter(Boolean).join(', ') || hit.address || 'Location unknown',
    type: hit.major_category || 'Campsite',
    rating: hit.rating || 0,
    reviewCount: hit.reviews || 0,
    price,
    verified: hit.poi_status === 'Active',
    images: hit.poi_images && hit.poi_images.length > 0 ? hit.poi_images : ['/placeholder.svg'],
    description: hit.poi_description || 'No description available.',
    host: hit.address?.split(',')[0] || 'Unknown',
    amenities: {
      site: siteTypes.length > 0 ? siteTypes : ['Standard sites'],
      facilities: facilities.length > 0 ? facilities : ['Basic facilities'],
      services: services.length > 0 ? services : [],
      activities: activities.length > 0 ? activities : [],
    },
    rules: {
      pets: hit.minor_category && (Array.isArray(hit.minor_category) ? hit.minor_category : [hit.minor_category]).some((c: string) => c.includes('Pets')) 
        ? 'Pets welcome' 
        : 'Check with host',
      fires: 'Check local regulations',
      generators: 'Check with host',
      quiet: 'Respect quiet hours',
      stay: 'Check booking requirements',
    },
    suitability,
    safety: {
      alerts: [],
      conditions: hit.poi_status === 'Active' ? 'Open' : 'Check status',
      season: 'Year-round',
    },
    coordinates,
    bookingUrl: hit.booking_url,
    websiteUrl: hit.website_url,
    fees: hit.poi_fees,
  }
}

export default async function CampsitePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  // Fetch from Algolia
  let campsite
  try {
    const result = await searchPlaces('', {
      filters: `objectID:${id}`,
      hitsPerPage: 1,
    })
    
    if (result.hits.length === 0) {
      notFound()
    }
    
    campsite = transformHitToCampsite(result.hits[0] as PoiHit)
  } catch (error) {
    console.error('Error fetching campsite:', error)
    notFound()
  }

  if (!campsite) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Gallery */}
        <CampsiteGallery images={campsite.images} name={campsite.name} />

        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <CampsiteInfo campsite={campsite} />
              <CampsiteAmenities amenities={campsite.amenities} />
              <CampsiteReviews rating={campsite.rating} reviewCount={campsite.reviewCount} />
              <CampsiteLocation name={campsite.name} location={campsite.location} coordinates={campsite.coordinates} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <CampsiteBooking price={campsite.price} rating={campsite.rating} reviewCount={campsite.reviewCount} />
              </div>
            </div>
          </div>

          {/* Nearby Sites */}
          <div className="mt-12">
            <NearbySites currentSiteId={campsite.id} />
          </div>
        </div>
      </main>
    </div>
  )
}
