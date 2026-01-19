"use client"

import { Search, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchBar() {
  return (
    <div className="flex items-center gap-3 max-w-4xl mx-auto">
      <div className="flex-1 relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Where do you want to explore?"
          className="pl-11 h-12 bg-muted/50 border-border"
        />
      </div>
      <Button size="lg" className="h-12 px-6">
        <Search className="h-5 w-5 mr-2" />
        Search
      </Button>
    </div>
  )
}
