"use client"

import { CampsiteCard } from "@/components/campsite-card"

const MOCK_RESULTS = [
  {
    id: "1",
    name: "Coastal Paradise Camp",
    location: "Byron Bay, NSW",
    price: 0,
    rating: 4.8,
    reviews: 234,
    image: "/coastal-campsite-australia.jpg",
    amenities: ["Toilets", "Showers", "Water", "Pet-friendly"],
    environment: "Coastal",
    isFree: true,
  },
  {
    id: "2",
    name: "Mountain View Caravan Park",
    location: "Bright, VIC",
    price: 45,
    rating: 4.6,
    reviews: 189,
    image: "/mountain-caravan-park.jpg",
    amenities: ["Power", "WiFi", "Showers", "Dump point"],
    environment: "Alpine",
    isFree: false,
  },
  {
    id: "3",
    name: "Riverside Free Camp",
    location: "Margaret River, WA",
    price: 0,
    rating: 4.5,
    reviews: 156,
    image: "/riverside-campground.jpg",
    amenities: ["Toilets", "Water", "BBQ"],
    environment: "Riverside",
    isFree: true,
  },
  {
    id: "4",
    name: "Beachfront Holiday Park",
    location: "Gold Coast, QLD",
    price: 65,
    rating: 4.9,
    reviews: 312,
    image: "/beach-holiday-park.jpg",
    amenities: ["Power", "WiFi", "Showers", "Pool", "Dump point"],
    environment: "Coastal",
    isFree: false,
  },
  {
    id: "5",
    name: "Forest Hideaway",
    location: "Daintree, QLD",
    price: 25,
    rating: 4.7,
    reviews: 98,
    image: "/rainforest-campsite.jpg",
    amenities: ["Toilets", "Water", "Showers"],
    environment: "Rainforest",
    isFree: false,
  },
  {
    id: "6",
    name: "Outback Rest Area",
    location: "Alice Springs, NT",
    price: 0,
    rating: 4.3,
    reviews: 67,
    image: "/outback-rest-area.jpg",
    amenities: ["Toilets", "Bins"],
    environment: "Outback",
    isFree: true,
  },
]

interface ResultsListProps {
  filters: any
}

export function ResultsList({ filters }: ResultsListProps) {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{MOCK_RESULTS.length} stays</span> in Australia
        </p>
        <select className="text-sm border border-border rounded-md px-3 py-1.5 bg-background">
          <option>Sort by: Relevance</option>
          <option>Sort by: Distance</option>
          <option>Sort by: Rating</option>
          <option>Sort by: Price (Low to High)</option>
          <option>Sort by: Price (High to Low)</option>
        </select>
      </div>

      {MOCK_RESULTS.map((result) => (
        <CampsiteCard key={result.id} campsite={result} />
      ))}
    </div>
  )
}
