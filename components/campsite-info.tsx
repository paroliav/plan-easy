import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, MapPin, Shield, Heart, Share2, Calendar, AlertTriangle, Info } from "lucide-react"

interface CampsiteInfoProps {
  campsite: {
    name: string
    location: string
    type: string
    rating: number
    reviewCount: number
    verified: boolean
    host: string
    description: string
    rules: {
      pets: string
      fires: string
      generators: string
      quiet: string
      stay: string
    }
    suitability: string[]
    safety: {
      alerts: string[]
      conditions: string
      season: string
    }
  }
}

export function CampsiteInfo({ campsite }: CampsiteInfoProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold text-balance">{campsite.name}</h1>
              {campsite.verified && <Shield className="h-6 w-6 text-primary" />}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-semibold text-foreground">{campsite.rating}</span>
                <span>({campsite.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {campsite.location}
              </div>
              <Badge variant="secondary">{campsite.type}</Badge>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3">
        <Button className="gap-2">
          <Calendar className="h-4 w-4" />
          Add to Itinerary
        </Button>
        <Button variant="outline" className="gap-2 bg-transparent">
          <MapPin className="h-4 w-4" />
          Get Directions
        </Button>
      </div>

      {/* Suitability Badges */}
      <div className="flex flex-wrap gap-2">
        {campsite.suitability.map((item) => (
          <Badge key={item} variant="outline">
            {item}
          </Badge>
        ))}
      </div>

      {/* Description */}
      <div>
        <h2 className="text-xl font-semibold mb-3">About this campsite</h2>
        <p className="text-muted-foreground leading-relaxed">{campsite.description}</p>
        <p className="text-sm text-muted-foreground mt-2">Hosted by {campsite.host}</p>
      </div>

      {/* Rules & Information */}
      <Card className="p-6 bg-card/50">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Info className="h-5 w-5" />
          Rules & Information
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium mb-1">Pets</div>
            <div className="text-sm text-muted-foreground">{campsite.rules.pets}</div>
          </div>
          <div>
            <div className="text-sm font-medium mb-1">Campfires</div>
            <div className="text-sm text-muted-foreground">{campsite.rules.fires}</div>
          </div>
          <div>
            <div className="text-sm font-medium mb-1">Generators</div>
            <div className="text-sm text-muted-foreground">{campsite.rules.generators}</div>
          </div>
          <div>
            <div className="text-sm font-medium mb-1">Quiet hours</div>
            <div className="text-sm text-muted-foreground">{campsite.rules.quiet}</div>
          </div>
          <div>
            <div className="text-sm font-medium mb-1">Maximum stay</div>
            <div className="text-sm text-muted-foreground">{campsite.rules.stay}</div>
          </div>
          <div>
            <div className="text-sm font-medium mb-1">Conditions</div>
            <div className="text-sm text-muted-foreground">{campsite.safety.conditions}</div>
          </div>
        </div>
      </Card>

      {/* Safety Alerts */}
      {campsite.safety.alerts.length > 0 && (
        <Card className="p-6 border-amber-500/50 bg-amber-500/10">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Safety Information
          </h2>
          <ul className="space-y-2">
            {campsite.safety.alerts.map((alert, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">•</span>
                {alert}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  )
}
