import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { MapPin, Clock, DollarSign, Fuel, Zap, Calendar } from "lucide-react"

interface Stop {
  id: string
  name: string
  type: "campsite" | "poi" | "service"
  duration: number
  price?: number
}

interface ItinerarySummaryProps {
  stops: Stop[]
  budget: number
  days: number
}

export function ItinerarySummary({ stops, budget, days }: ItinerarySummaryProps) {
  // Calculate totals
  const totalDistance = 287 // Mock
  const totalTime = 5.5 // hours, mock
  const estimatedCost = stops.reduce((acc, stop) => acc + (stop.price || 0), 0) + 85 // Add fuel/food estimate
  const budgetUsed = (estimatedCost / budget) * 100

  const campsites = stops.filter((s) => s.type === "campsite").length
  const pois = stops.filter((s) => s.type === "poi").length

  return (
    <div className="space-y-4">
      <Card className="p-6 bg-card/50">
        <h3 className="font-semibold mb-4">Trip Summary</h3>

        <div className="space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalDistance}</div>
                <div className="text-xs text-muted-foreground">kilometers</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalTime}</div>
                <div className="text-xs text-muted-foreground">hours drive</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{campsites}</div>
                <div className="text-xs text-muted-foreground">campsites</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{pois}</div>
                <div className="text-xs text-muted-foreground">attractions</div>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Budget</span>
              <span className="text-sm font-semibold">
                ${estimatedCost} / ${budget}
              </span>
            </div>
            <Progress value={budgetUsed} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {budgetUsed < 80 ? "You're within budget" : "Consider adjusting your trip"}
            </p>
          </div>

          {/* Fuel Estimate */}
          <div className="pt-4 border-t space-y-3">
            <h4 className="text-sm font-medium">Fuel Planning</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Fuel className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Estimated fuel</span>
                </div>
                <span className="font-medium">~25L</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Fuel cost</span>
                </div>
                <span className="font-medium">~$45</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">EV charging</span>
                </div>
                <span className="font-medium">2 stations</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-2">
        <Button className="w-full" size="lg">
          Save Itinerary
        </Button>
        <Button variant="outline" className="w-full bg-transparent">
          Download for Offline
        </Button>
      </div>
    </div>
  )
}
