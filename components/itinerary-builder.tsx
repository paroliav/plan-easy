"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ItineraryStop } from "@/components/itinerary-stop"
import { SmartSuggestions } from "@/components/smart-suggestions"
import { ItinerarySummary } from "@/components/itinerary-summary"
import { Plus, Download, Share2, Save, Sparkles } from "lucide-react"

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

const initialStops: Stop[] = [
  {
    id: "1",
    name: "Melbourne CBD",
    location: "Starting Point",
    type: "poi",
    duration: 0,
    image: "/coastal-campsite-australia.jpg",
  },
  {
    id: "2",
    name: "Great Ocean Road Lookout",
    location: "Torquay, VIC",
    type: "poi",
    duration: 2,
    arrival: "10:30 AM",
    image: "/mountain-caravan-park.jpg",
  },
  {
    id: "3",
    name: "Emerald Bay Campground",
    location: "Great Ocean Road, VIC",
    type: "campsite",
    duration: 1440,
    arrival: "2:00 PM",
    price: 45,
    image: "/coastal-campsite-australia.jpg",
  },
]

export function ItineraryBuilder() {
  const [stops, setStops] = useState<Stop[]>(initialStops)
  const [tripName, setTripName] = useState("Great Ocean Road Adventure")
  const [budget, setBudget] = useState([500])
  const [days, setDays] = useState([5])

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/html", index.toString())
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()
    const dragIndex = Number.parseInt(e.dataTransfer.getData("text/html"))
    if (dragIndex === dropIndex) return

    const newStops = [...stops]
    const [removed] = newStops.splice(dragIndex, 1)
    newStops.splice(dropIndex, 0, removed)
    setStops(newStops)
  }

  const removeStop = (id: string) => {
    setStops(stops.filter((stop) => stop.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <Input
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              className="text-3xl font-bold border-none px-0 h-auto bg-transparent focus-visible:ring-0"
            />
            <p className="text-muted-foreground mt-2">Plan your perfect road trip with AI-powered suggestions</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Save className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Trip Settings */}
        <Card className="p-6 bg-card/50">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Label className="text-sm mb-3 block">Budget (${budget[0]})</Label>
              <Slider value={budget} onValueChange={setBudget} min={100} max={2000} step={50} />
            </div>
            <div>
              <Label className="text-sm mb-3 block">Duration ({days[0]} days)</Label>
              <Slider value={days} onValueChange={setDays} min={1} max={30} step={1} />
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="w-full gap-2 bg-transparent">
                <Sparkles className="h-4 w-4" />
                AI Optimize Route
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Itinerary */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Your Itinerary ({stops.length} stops)</h2>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Plus className="h-4 w-4" />
              Add Stop
            </Button>
          </div>

          {/* Stops List */}
          <div className="space-y-4">
            {stops.map((stop, index) => (
              <div
                key={stop.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
              >
                <ItineraryStop
                  stop={stop}
                  index={index}
                  isLast={index === stops.length - 1}
                  onRemove={() => removeStop(stop.id)}
                />
              </div>
            ))}
          </div>

          {/* Smart Insert Suggestions */}
          <Card className="p-6 border-primary/50 bg-primary/5">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Smart Suggestions</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered stops along your route that match your preferences
                </p>
              </div>
            </div>
            <SmartSuggestions />
          </Card>
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <ItinerarySummary stops={stops} budget={budget[0]} days={days[0]} />
          </div>
        </div>
      </div>
    </div>
  )
}
