import { SiteHeader } from "@/components/site-header"
import { ItineraryBuilder } from "@/components/itinerary-builder"

export default function ItineraryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <ItineraryBuilder />
      </main>
    </div>
  )
}
