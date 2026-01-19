import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Route, MapPin, Heart } from "lucide-react"

export function AIConciergeSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Planning</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 text-balance">
            Build your dream itinerary in seconds
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Answer a few questions and let our AI create a personalized route based on your vehicle, budget, and
            interests.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Smart Suggestions</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get campsite recommendations that match your travel style and preferences
            </p>
          </Card>

          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Route className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Optimized Routes</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI calculates the best driving routes to minimize backtracking and maximize adventure
            </p>
          </Card>

          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Personalized</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tailored to your vehicle type, group size, and budget constraints
            </p>
          </Card>

          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Instant Updates</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Adjust your plans on the fly with real-time suggestions and alternatives
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="gap-2">
            <Sparkles className="h-5 w-5" />
            Start Planning with AI
          </Button>
        </div>
      </div>
    </section>
  )
}
