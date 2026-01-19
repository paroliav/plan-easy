import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="border-t border-border/40">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold">PlanEasy</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Your ultimate companion for discovering campsites, caravan parks, and building unforgettable road trip
                itineraries across Australia.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Discover</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/search" className="text-muted-foreground hover:text-foreground transition-colors">
                    Search Campsites
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="text-muted-foreground hover:text-foreground transition-colors">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="/map" className="text-muted-foreground hover:text-foreground transition-colors">
                    Explore Map
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Plan</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/itinerary" className="text-muted-foreground hover:text-foreground transition-colors">
                    Build Itinerary
                  </Link>
                </li>
                <li>
                  <Link href="/saved" className="text-muted-foreground hover:text-foreground transition-colors">
                    Saved Spots
                  </Link>
                </li>
                <li>
                  <Link href="/trips" className="text-muted-foreground hover:text-foreground transition-colors">
                    My Trips
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 PlanEasy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
