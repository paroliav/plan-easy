"use client"

import { MapPin, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MapViewProps {
  filters: any
}

export function MapView({ filters }: MapViewProps) {
  return (
    <div className="relative w-full h-full bg-muted">
      {/* Map Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p className="text-sm">Interactive map view</p>
          <p className="text-xs mt-1">Map integration coming soon</p>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button size="icon" variant="secondary" className="bg-background shadow-lg">
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-background rounded-lg shadow-lg p-3 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-xs">Free camps</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-xs">Paid sites</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="text-xs">Holiday parks</span>
        </div>
      </div>
    </div>
  )
}
