import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { CampsiteGallery } from "@/components/campsite-gallery"
import { CampsiteInfo } from "@/components/campsite-info"
import { CampsiteAmenities } from "@/components/campsite-amenities"
import { CampsiteReviews } from "@/components/campsite-reviews"
import { CampsiteLocation } from "@/components/campsite-location"
import { CampsiteBooking } from "@/components/campsite-booking"
import { NearbySites } from "@/components/nearby-sites"

// Mock data - replace with actual database fetch
const campsites = [
  {
    id: "1",
    name: "Emerald Bay Campground",
    location: "Great Ocean Road, Victoria",
    type: "Paid Campsite",
    rating: 4.8,
    reviewCount: 342,
    price: 45,
    verified: true,
    images: [
      "/coastal-campsite-australia.jpg",
      "/mountain-caravan-park.jpg",
      "/forest-campsite-nz.jpg",
      "/lakeside-caravan.jpg",
    ],
    description:
      "Stunning coastal campground with direct beach access, modern facilities, and breathtaking ocean views. Perfect for families and couples seeking a memorable beachside camping experience.",
    host: "Parks Victoria",
    amenities: {
      site: ["Powered sites", "Unpowered sites", "Drive-through", "Big rig friendly", "2WD accessible"],
      facilities: ["Hot showers", "Flush toilets", "Dump point", "Potable water", "BBQ facilities"],
      services: ["WiFi", "Mobile reception", "Laundry", "Camp kitchen", "Picnic areas"],
      activities: ["Beach access", "Fishing", "Hiking trails", "Surfing", "Snorkeling"],
    },
    rules: {
      pets: "Allowed on leash",
      fires: "Fire pits provided",
      generators: "Allowed 8am-8pm",
      quiet: "10pm-7am",
      stay: "14 night maximum",
    },
    suitability: ["Family friendly", "Pet friendly", "Accessible", "EV charging nearby"],
    safety: {
      alerts: ["Check tide times before beach activities", "Strong currents - swim between flags"],
      conditions: "All weather accessible",
      season: "Open year-round",
    },
    coordinates: { lat: -38.6619, lng: 143.1054 },
  },
]

export default async function CampsitePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const campsite = campsites.find((c) => c.id === id)

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
