import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Search } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight">PlanEasy</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/search"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Discover
            </Link>
            <Link
              href="/itinerary"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Plan Trip
            </Link>
            <Link
              href="/collections"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Collections
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="hidden md:flex">
            Log in
          </Button>
          <Button>Sign up</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
