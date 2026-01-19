"use client"

import { SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FilterBarProps {
  onOpenFilters: () => void
  activeFilterCount: number
}

const QUICK_FILTERS = [
  { label: "Free camps", value: "free" },
  { label: "Pet-friendly", value: "pet" },
  { label: "EV Charging", value: "ev" },
  { label: "Beachfront", value: "beach" },
  { label: "Showers", value: "showers" },
  { label: "Dump point", value: "dump" },
]

export function FilterBar({ onOpenFilters, activeFilterCount }: FilterBarProps) {
  return (
    <div className="border-b border-border bg-background px-4 py-3">
      <div className="flex items-center gap-2 overflow-x-auto">
        <Button variant="outline" size="sm" onClick={onOpenFilters} className="shrink-0 bg-transparent">
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFilterCount}
            </Badge>
          )}
        </Button>

        {QUICK_FILTERS.map((filter) => (
          <Button key={filter.value} variant="outline" size="sm" className="shrink-0 bg-transparent">
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
