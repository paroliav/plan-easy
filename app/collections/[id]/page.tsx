import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CampsiteCard } from "@/components/campsite-card"
import { ArrowLeft, Bookmark, Share2, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const collectionData = {
  title: "Best Beach Camps in NSW",
  description:
    "Discover stunning coastal campsites with ocean views, beach access, and perfect surf spots along the NSW coastline. From Byron Bay to the Sapphire Coast, these hand-picked sites offer the best of beachside camping.",
  image: "/coastal-campsite-australia.jpg",
  sites: 24,
  curator: "PlanEasy Editors",
  tags: ["Coastal", "Family-Friendly", "Beach Access"],
  longDescription:
    "The New South Wales coastline offers some of Australia's most spectacular beach camping. This curated collection features campsites within walking distance of pristine beaches, many with excellent surf, swimming, and fishing opportunities. Whether you're looking for family-friendly facilities or remote coastal wilderness, these sites showcase the best of NSW's beach camping scene.",
}

const campsites = [
  {
    id: 1,
    name: "Byron Bay Holiday Park",
    location: "Byron Bay, NSW",
    image: "/coastal-campsite-australia.jpg",
    rating: 4.8,
    reviews: 342,
    price: 55,
    features: ["Beach Access", "Powered Sites", "Pet Friendly", "WiFi"],
    environment: "Coastal",
  },
  {
    id: 2,
    name: "Depot Beach Campground",
    location: "Murramarang NP, NSW",
    image: "/mountain-caravan-park.jpg",
    rating: 4.9,
    reviews: 218,
    price: 32,
    features: ["Beach Access", "Toilets", "Showers", "Surfing"],
    environment: "Coastal",
  },
  {
    id: 3,
    name: "Pebbly Beach Campground",
    location: "Murramarang NP, NSW",
    image: "/beach-campsite-kangaroos-nsw-australia.jpg",
    rating: 4.7,
    reviews: 189,
    price: 32,
    features: ["Beach Access", "Wildlife", "Toilets", "Unpowered"],
    environment: "Coastal",
  },
  {
    id: 4,
    name: "Hat Head Holiday Park",
    location: "Hat Head, NSW",
    image: "/coastal-caravan-park-beach-nsw.jpg",
    rating: 4.6,
    reviews: 156,
    price: 48,
    features: ["Beach Access", "Powered", "Dump Point", "Laundry"],
    environment: "Coastal",
  },
]

export default function CollectionDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src={collectionData.image || "/placeholder.svg"}
            alt={collectionData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-8 md:pb-12">
              <Link href="/collections">
                <Button variant="ghost" className="mb-4 text-white hover:text-white hover:bg-white/20">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Collections
                </Button>
              </Link>

              <div className="flex flex-wrap gap-2 mb-4">
                {collectionData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
                {collectionData.title}
              </h1>

              <div className="flex items-center gap-6 text-white/90 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{collectionData.sites} sites</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{collectionData.curator}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save Collection
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-8 md:py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold mb-4">About This Collection</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{collectionData.longDescription}</p>
            </div>
          </div>
        </section>

        {/* Campsites Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{collectionData.sites} Campsites</h2>
              <Button variant="outline">View on Map</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campsites.map((campsite) => (
                <CampsiteCard key={campsite.id} campsite={campsite} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" variant="outline">
                Load More Sites
              </Button>
            </div>
          </div>
        </section>

        {/* Related Collections */}
        <section className="py-8 md:py-12 bg-card/30 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Related Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Off-Grid Adventures", sites: 18, image: "/mountain-caravan-park.jpg" },
                { title: "Free Camps Along the East Coast", sites: 45, image: "/free-campsite-east-coast.jpg" },
                { title: "Pet-Friendly Getaways", sites: 28, image: "/dog-at-campsite.jpg" },
              ].map((collection, i) => (
                <Link key={i} href={`/collections/${i + 2}`}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold mb-1">{collection.title}</h3>
                      <p className="text-sm text-white/80">{collection.sites} sites</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
