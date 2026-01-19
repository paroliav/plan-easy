import { Card } from "@/components/ui/card"
import {
  Plug,
  Tent,
  Truck,
  Flower as Shower,
  Droplet,
  Trash,
  Wifi,
  UtensilsCrossed,
  WashingMachine,
  Waves,
  Mountain,
  TreePine,
  Users,
} from "lucide-react"

interface CampsiteAmenitiesProps {
  amenities: {
    site: string[]
    facilities: string[]
    services: string[]
    activities: string[]
  }
}

const amenityIcons: Record<string, any> = {
  "Powered sites": Plug,
  "Unpowered sites": Tent,
  "Drive-through": Truck,
  "Hot showers": Shower,
  "Potable water": Droplet,
  "Dump point": Trash,
  WiFi: Wifi,
  "Camp kitchen": UtensilsCrossed,
  Laundry: WashingMachine,
  "Beach access": Waves,
  "Hiking trails": Mountain,
  Fishing: TreePine,
  "Family friendly": Users,
}

export function CampsiteAmenities({ amenities }: CampsiteAmenitiesProps) {
  const sections = [
    { title: "Site Types", items: amenities.site },
    { title: "Facilities", items: amenities.facilities },
    { title: "Services", items: amenities.services },
    { title: "Activities", items: amenities.activities },
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {sections.map((section) => (
          <Card key={section.title} className="p-6 bg-card/50">
            <h3 className="font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-3">
              {section.items.map((item) => {
                const Icon = amenityIcons[item] || TreePine
                return (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                )
              })}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}
