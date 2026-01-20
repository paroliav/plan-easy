"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Calendar, Users } from "lucide-react"

export function HeroSection() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleQuickSearch = (searchTerm: string) => {
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/australian-outback-camping-sunset-caravan.jpg"
          alt="Australian camping adventure"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Your perfect road trip,
            <br />
            <span className="text-primary">planned in minutes</span>
          </h1>
          <p className="text-pretty text-lg text-muted-foreground sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            AI-powered itineraries, trusted reviews, and 15,000+ campsites across Australia. Everything you need for an
            unforgettable adventure.
          </p>

          {/* Quick Search */}
          <div className="mx-auto max-w-3xl">
            <form onSubmit={handleSearch}>
              <div className="rounded-xl bg-card border border-border/50 p-2 shadow-2xl backdrop-blur">
                <div className="grid gap-2 md:grid-cols-[1fr_auto_auto_auto] md:gap-0">
                  <div className="flex items-center gap-2 px-4 py-3 md:border-r border-border">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Where to?"
                      className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 md:border-r border-border">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="When?"
                      className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      disabled
                    />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 md:border-r border-border">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Who?"
                      className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      disabled
                    />
                  </div>
                  <div className="px-2 py-2">
                    <Button type="submit" size="lg" className="w-full">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">
              Or try:{" "}
              <Button 
                variant="link" 
                className="h-auto p-0 text-sm"
                onClick={() => handleQuickSearch('Great Ocean Road')}
              >
                Great Ocean Road
              </Button>{" "}
              ·
              <Button 
                variant="link" 
                className="h-auto p-0 text-sm"
                onClick={() => handleQuickSearch('Red Centre')}
              >
                Red Centre
              </Button>{" "}
              ·
              <Button 
                variant="link" 
                className="h-auto p-0 text-sm"
                onClick={() => handleQuickSearch('East Coast')}
              >
                East Coast
              </Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
