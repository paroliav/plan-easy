import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, MapPin, Star } from "lucide-react"
import Image from "next/image"

const suggestions = [
  {
    id: "s1",
    name: "Twelve Apostles Viewpoint",
    location: "Port Campbell, VIC",
    type: "POI",
    insertAfter: "Stop 2",
    reason: "Popular attraction on route",
    rating: 4.9,
    image: "/mountain-caravan-park.jpg",
    addedTime: "+30 min",
  },
  {
    id: "s2",
    name: "Apollo Bay Camping",
    location: "Apollo Bay, VIC",
    type: "Campsite",
    insertAfter: "Stop 3",
    reason: "Budget-friendly, pet-friendly",
    rating: 4.7,
    price: 35,
    image: "/forest-campsite-nz.jpg",
    addedTime: "+1h drive",
  },
]

export function SmartSuggestions() {
  return (
    <div className="space-y-3">
      {suggestions.map((suggestion) => (
        <Card key={suggestion.id} className="p-3 bg-background hover:shadow-sm transition-shadow">
          <div className="flex gap-3">
            <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
              <Image src={suggestion.image || "/placeholder.svg"} alt={suggestion.name} fill className="object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="font-semibold text-sm line-clamp-1">{suggestion.name}</h4>
                <Button size="sm" variant="ghost" className="h-7 px-2 gap-1 flex-shrink-0">
                  <Plus className="h-3 w-3" />
                  Add
                </Button>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                <MapPin className="h-3 w-3" />
                <span className="line-clamp-1">{suggestion.location}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="text-xs h-5">
                  After {suggestion.insertAfter}
                </Badge>
                <div className="flex items-center gap-1 text-xs">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  {suggestion.rating}
                </div>
                <span className="text-xs text-muted-foreground">{suggestion.addedTime}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{suggestion.reason}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
