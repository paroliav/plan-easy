"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-3 max-w-4xl mx-auto">
      <div className="flex-1 relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Where do you want to explore?"
          className="pl-11 h-12 bg-muted/50 border-border"
        />
      </div>
      <Button type="submit" size="lg" className="h-12 px-6">
        <Search className="h-5 w-5 mr-2" />
        Search
      </Button>
    </form>
  )
}
