"use client"

import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface CampsiteLocationProps {
  name: string
  location: string
  coordinates: { lat: number; lng: number }
}

export function CampsiteLocation({ name, location, coordinates }: CampsiteLocationProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Where you'll be</h2>
      <Card className="p-6 bg-card/50">
        <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto mb-2 text-primary" />
            <p className="text-sm text-muted-foreground">Interactive map</p>
            <p className="text-xs text-muted-foreground mt-1">
              {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
            </p>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-1">{location}</div>
          <p className="text-sm text-muted-foreground">Exact location provided after booking</p>
        </div>
      </Card>
    </div>
  )
}
