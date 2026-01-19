import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AIConciergeSection } from "@/components/ai-concierge-section"
import { FeaturedCollections } from "@/components/featured-collections"
import { TrustSection } from "@/components/trust-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AIConciergeSection />
        <FeaturedCollections />
        <TrustSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}

