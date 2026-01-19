import { Shield, Star, Users, CheckCircle } from "lucide-react"

const stats = [
  { icon: Users, label: "Active Users", value: "50K+" },
  { icon: Star, label: "Average Rating", value: "4.8" },
  { icon: Shield, label: "Verified Spots", value: "12K+" },
  { icon: CheckCircle, label: "Fresh Reviews", value: "95%" },
]

export function TrustSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 text-balance">
            Trusted by thousands of Australian travelers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join a community of adventurers sharing real experiences, verified information, and helpful tips.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 w-16 h-16 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
