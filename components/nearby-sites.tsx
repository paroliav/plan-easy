import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NearbySitesProps {
  currentSiteId: string
}

const nearbySites = [
  {
    id: "2",
    name: "Mountain View Caravan Park",
    location: "Grampians, Victoria",
    distance: "12 km away",
    rating: 4.6,
    reviews: 218,
    price: 38,
    image: "/mountain-caravan-park.jpg",
    type: "Paid",
  },
  {
    id: "3",
    name: "Forest Haven Campground",
    location: "Otway Ranges, Victoria",
    distance: "24 km away",
    rating: 4.7,
    reviews: 156,
    price: 0,
    image: "/forest-campsite-nz.jpg",
    type: "Free",
  },
  {
    id: "4",
    name: "Lakeside Rest Area",
    location: "Port Campbell, Victoria",
    distance: "31 km away",
    rating: 4.5,
    reviews: 98,
    price: 25,
    image: "/lakeside-caravan.jpg",
    type: "Paid",
  },
]

export function NearbySites({ currentSiteId }: NearbySitesProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Nearby campsites</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nearbySites.map((site) => (
          <Link key={site.id} href={`/campsite/${site.id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative aspect-[4/3]">
                <Image src={site.image || "/placeholder.svg"} alt={site.name} fill className="object-cover" />
                <Badge className="absolute top-3 right-3">
                  {site.type === "Free" ? "Free" : `$${site.price}/night`}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1 line-clamp-1">{site.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" />
                  {site.distance}
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-semibold">{site.rating}</span>
                  <span className="text-muted-foreground">({site.reviews})</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

