import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    title: "Coastal Escapes",
    count: "234 spots",
    image: "/australian-beach-camping-coastal.jpg",
  },
  {
    title: "Outback Adventures",
    count: "156 spots",
    image: "/australian-outback-red-dirt-camping.jpg",
  },
  {
    title: "Mountain Retreats",
    count: "189 spots",
    image: "/australian-mountains-forest-camping.jpg",
  },
  {
    title: "Family Friendly",
    count: "312 spots",
    image: "/family-camping-australia-playground.jpg",
  },
]

export function FeaturedCollections() {
  return (
    <section className="border-t border-border/40 bg-muted/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-2">Curated collections</h2>
            <p className="text-lg text-muted-foreground">Handpicked destinations for every type of adventure</p>
          </div>
          <Button variant="ghost" className="hidden md:flex gap-2">
            View all <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, index) => (
            <Card key={index} className="group overflow-hidden cursor-pointer hover:border-primary/50 transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{collection.title}</h3>
                <p className="text-sm text-muted-foreground">{collection.count}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="ghost" className="gap-2">
            View all collections <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
