"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GripVertical, X, Clock, MapPin, DollarSign } from "lucide-react"
import Image from "next/image"

interface Stop {
  id: string
  name: string
  location: string
  type: "campsite" | "poi" | "service"
  duration: number
  arrival?: string
  image: string
  price?: number
}

interface ItineraryStopProps {
  stop: Stop
  index: number
  isLast: boolean
  onRemove: () => void
}

const typeLabels = {
  campsite: "Campsite",
  poi: "Point of Interest",
  service: "Service Stop",
}

export function ItineraryStop({ stop, index, isLast, onRemove }: ItineraryStopProps) {
  const durationText =
    stop.duration >= 1440
      ? `${Math.floor(stop.duration / 1440)} night${Math.floor(stop.duration / 1440) > 1 ? "s" : ""}`
      : `${Math.floor(stop.duration / 60)}h ${stop.duration % 60}m`

  return (
    <div className="relative">
      <Card className="p-4 hover:shadow-md transition-shadow cursor-move">
        <div className="flex gap-4">
          {/* Drag Handle */}
          <div className="flex flex-col items-center gap-2 pt-1">
            <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab active:cursor-grabbing" />
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              {index + 1}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
            <Image src={stop.image || "/placeholder.svg"} alt={stop.name} fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1">
                <h3 className="font-semibold mb-1 line-clamp-1">{stop.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" />
                  <span className="line-clamp-1">{stop.location}</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="flex-shrink-0 -mt-1 -mr-2" onClick={onRemove}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{typeLabels[stop.type]}</Badge>
              {stop.arrival && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {stop.arrival}
                </div>
              )}
              {stop.duration > 0 && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {durationText}
                </div>
              )}
              {stop.price !== undefined && (
                <div className="flex items-center gap-1 text-xs font-medium">
                  <DollarSign className="h-3 w-3" />${stop.price}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Connector Line */}
      {!isLast && <div className="absolute left-[50px] top-full w-0.5 h-4 bg-border" style={{ height: "16px" }}></div>}
    </div>
  )
}
