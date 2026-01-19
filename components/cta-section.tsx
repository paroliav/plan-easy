import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-primary/20 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 text-balance">
            Ready to start your adventure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Sign up now and get personalized recommendations, save your favorite spots, and build unlimited itineraries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
