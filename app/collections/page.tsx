import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Users, Bookmark, Search } from "lucide-react"
import Image from "next/image"

const collections = [
  {
    id: 1,
    title: "Best Beach Camps in NSW",
    description:
      "Discover stunning coastal campsites with ocean views, beach access, and perfect surf spots along the NSW coastline.",
    image: "/coastal-campsite-australia.jpg",
    sites: 24,
    curator: "PlanEasy Editors",
    featured: true,
    tags: ["Coastal", "Family-Friendly", "Beach Access"],
  },
  {
    id: 2,
    title: "Off-Grid Adventures",
    description:
      "Remote 4WD-accessible campsites for the self-sufficient adventurer. No facilities, just pure wilderness.",
    image: "/mountain-caravan-park.jpg",
    sites: 18,
    curator: "PlanEasy Editors",
    featured: true,
    tags: ["4WD", "Remote", "Off-Grid"],
  },
  {
    id: 3,
    title: "Family-Friendly Parks",
    description:
      "Caravan parks with playgrounds, pools, activities, and modern amenities perfect for kids and families.",
    image: "/family-friendly-caravan-park-playground-pool.jpg",
    sites: 32,
    curator: "PlanEasy Editors",
    featured: true,
    tags: ["Family", "Facilities", "Activities"],
  },
  {
    id: 4,
    title: "Free Camps Along the East Coast",
    description: "Budget-friendly free and donation-based camping spots from Queensland to Victoria.",
    image: "/free-campsite-east-coast-australia-bush-camping.jpg",
    sites: 45,
    curator: "PlanEasy Editors",
    featured: false,
    tags: ["Free", "Coastal", "Budget"],
  },
  {
    id: 5,
    title: "EV-Friendly Stops",
    description: "Campsites and caravan parks with EV charging stations for electric vehicle road trips.",
    image: "/modern-caravan-park-with-ev-charging-station.jpg",
    sites: 15,
    curator: "PlanEasy Editors",
    featured: false,
    tags: ["EV Charging", "Modern", "Powered"],
  },
  {
    id: 6,
    title: "Pet-Friendly Getaways",
    description:
      "Dog-friendly campsites where your furry companions are welcome. Includes off-leash areas and pet amenities.",
    image: "/dog-at-campsite-pet-friendly-caravan-park-australi.jpg",
    sites: 28,
    curator: "PlanEasy Editors",
    featured: false,
    tags: ["Pet-Friendly", "Dog-Friendly"],
  },
  {
    id: 7,
    title: "Great Walks Base Camps",
    description: "Perfect campsites near New Zealand's Great Walks and Australia's best hiking trails.",
    image: "/campsite-near-mountain-hiking-trail-new-zealand.jpg",
    sites: 21,
    curator: "PlanEasy Editors",
    featured: false,
    tags: ["Hiking", "National Parks", "Alpine"],
  },
  {
    id: 8,
    title: "Lakeside Serenity",
    description: "Peaceful camping by freshwater lakes with fishing, kayaking, and stunning reflections.",
    image: "/lakeside-campsite-kayaking-fishing-australia.jpg",
    sites: 19,
    curator: "PlanEasy Editors",
    featured: false,
    tags: ["Lakeside", "Fishing", "Kayaking"],
  },
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4">Curated Collections</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8">
                Discover hand-picked collections of the best campsites, caravan parks, and road trip routes across
                Australia and New Zealand. Curated by experts and trusted travelers.
              </p>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search collections..." className="pl-12 h-12 bg-background" />
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="border-b border-border bg-card/50 sticky top-20 z-10 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-background/50">
                <TabsTrigger value="all">All Collections</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="coastal">Coastal</TabsTrigger>
                <TabsTrigger value="remote">Off-Grid</TabsTrigger>
                <TabsTrigger value="family">Family</TabsTrigger>
                <TabsTrigger value="budget">Budget</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Collections</h2>
              <Button variant="ghost">View All</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections
                .filter((c) => c.featured)
                .map((collection) => (
                  <Card key={collection.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">Featured</Badge>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {collection.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{collection.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {collection.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{collection.sites} sites</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{collection.curator}</span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0 flex gap-2">
                      <Button className="flex-1">View Collection</Button>
                      <Button variant="outline" size="icon">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* All Collections */}
        <section className="py-8 md:py-12 bg-card/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">All Collections</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <Card key={collection.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {collection.featured && (
                      <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">Featured</Badge>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                      {collection.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{collection.description}</p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{collection.sites} sites</span>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Create Your Own CTA */}
        <section className="py-12 md:py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your Own Collection</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Save your favorite campsites into custom collections and share them with other travelers. Build your
                perfect road trip itinerary.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg">Start Collecting</Button>
                <Button size="lg" variant="outline">
                  Browse Campsites
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
