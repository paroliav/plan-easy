"use client"

import { useRouter } from "next/navigation"
import { Star, MapPin, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CampsiteCardProps {
  campsite: {
    id: string
    name: string
    location: string
    price: number
    rating: number
    reviews: number
    image: string
    amenities: string[]
    environment: string
    isFree: boolean
  }
}

export function CampsiteCard({ campsite }: CampsiteCardProps) {
  const router = useRouter()

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => router.push(`/campsite/${campsite.id}`)}
    >
      <div className="flex flex-col sm:flex-row gap-4 p-4">
        {/* Image */}
        <div className="relative w-full sm:w-48 h-48 sm:h-36 shrink-0 rounded-lg overflow-hidden">
          <Image src={campsite.image || "/placeholder.svg"} alt={campsite.name} fill className="object-cover" />
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <Heart className="h-4 w-4" />
          </Button>
          {campsite.isFree && (
            <Badge className="absolute bottom-2 left-2 bg-emerald-500 hover:bg-emerald-600">FREE</Badge>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg truncate">{campsite.name}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                <span className="truncate">{campsite.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{campsite.rating}</span>
              <span className="text-muted-foreground text-sm">({campsite.reviews})</span>
            </div>
          </div>

          {/* Environment Badge */}
          <Badge variant="secondary" className="mb-3">
            {campsite.environment}
          </Badge>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mb-3">
            {campsite.amenities.slice(0, 4).map((amenity, index) => (
              <span key={`${amenity}-${index}`} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                {amenity}
              </span>
            ))}
            {campsite.amenities.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                +{campsite.amenities.length - 4} more
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              {campsite.isFree ? (
                <p className="font-semibold text-emerald-500">Free camping</p>
              ) : (
                <p>
                  <span className="font-semibold text-lg">${campsite.price}</span>
                  <span className="text-muted-foreground text-sm"> / night</span>
                </p>
              )}
            </div>
            <Button variant="outline" size="sm">
              View details
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

