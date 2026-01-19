"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SearchBar } from "@/components/search-bar"
import { FilterBar } from "@/components/filter-bar"
import { FilterDrawer } from "@/components/filter-drawer"
import { ResultsList } from "@/components/results-list"
import { MapView } from "@/components/map-view"

export default function SearchPage() {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)
  const [filters, setFilters] = useState({
    stayTypes: [] as string[],
    amenities: [] as string[],
    priceRange: [0, 100] as [number, number],
    vehicleType: [] as string[],
    environment: [] as string[],
    petFriendly: false,
    evCharging: false,
    powered: false,
  })

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <div className="flex flex-col flex-1">
        {/* Search Header */}
        <div className="border-b border-border bg-background p-4">
          <SearchBar />
        </div>

        {/* Filter Bar */}
        <FilterBar
          onOpenFilters={() => setIsFilterDrawerOpen(true)}
          activeFilterCount={Object.values(filters).flat().filter(Boolean).length}
        />

        {/* Split View: List + Map */}
        <div className="flex flex-1 overflow-hidden">
          {/* Results List */}
          <div className="w-full lg:w-1/2 overflow-y-auto">
            <ResultsList filters={filters} />
          </div>

          {/* Map View */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <MapView filters={filters} />
          </div>
        </div>

        {/* Filter Drawer */}
        <FilterDrawer
          open={isFilterDrawerOpen}
          onOpenChange={setIsFilterDrawerOpen}
          filters={filters}
          onFiltersChange={setFilters}
        />
      </div>
    </div>
  )
}
