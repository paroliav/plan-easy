"use client"

import { useEffect, useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { searchIndex } from "@/lib/algolia/client"
import { PoiHit } from "@/lib/algolia/types"
import { CampsiteCard } from "@/components/campsite-card"
import { Skeleton } from "@/components/ui/skeleton"

interface ResultsListProps {
  query: string
  filters: any
}

export function ResultsList({ query, filters }: ResultsListProps) {
  const router = useRouter()
  const [hits, setHits] = useState<PoiHit[]>([])
  const [loading, setLoading] = useState(false)
  const [nbHits, setNbHits] = useState(0)
  const [page, setPage] = useState(0)
  const [sortBy, setSortBy] = useState('relevance')

  // Build facet filters from filter state
  const facetFilters = useMemo(() => {
    const filtersArray: string[][] = []
    
    if (filters.stayTypes?.length > 0) {
      filtersArray.push(filters.stayTypes.map((type: string) => `major_category:${type}`))
    }
    
    if (filters.petFriendly) {
      filtersArray.push(['minor_category:Pets Welcome'])
    }
    
    if (filters.evCharging) {
      filtersArray.push(['minor_category:EV Charging'])
    }

    return filtersArray
  }, [filters])

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    const searchOptions: any = {
      hitsPerPage: 20,
      page,
      facetFilters: facetFilters.length > 0 ? facetFilters : undefined,
    }

    // Add sorting
    if (sortBy === 'rating') {
      searchOptions.sortFacetValuesBy = 'count'
    }

    searchIndex
      .search(query || '', searchOptions)
      .then((res) => {
        if (cancelled) return
        setHits(res.hits as PoiHit[])
        setNbHits(res.nbHits)
      })
      .catch((err) => {
        console.error('Search error:', err)
        if (!cancelled) {
          setHits([])
          setNbHits(0)
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [query, page, facetFilters, sortBy])

  // Transform Algolia hits to CampsiteCard format
  const transformedResults = useMemo(() => {
    return hits.map((hit) => {
      const isFree = !hit.poi_fees || hit.poi_fees.toLowerCase().includes('free') || hit.poi_fees === 'null'
      const priceMatch = hit.poi_fees?.match(/\$(\d+)/)
      const price = priceMatch ? parseInt(priceMatch[1]) : 0

      // Extract amenities from minor_category
      const amenitiesSet = new Set<string>()
      if (hit.minor_category) {
        const categories = Array.isArray(hit.minor_category) ? hit.minor_category : [hit.minor_category]
        categories.forEach((cat: string) => {
          if (cat.includes('Toilet')) amenitiesSet.add('Toilets')
          if (cat.includes('Shower')) amenitiesSet.add('Showers')
          if (cat.includes('Water')) amenitiesSet.add('Water')
          if (cat.includes('Power')) amenitiesSet.add('Power')
          if (cat.includes('WiFi') || cat.includes('Wifi')) amenitiesSet.add('WiFi')
          if (cat.includes('Dump')) amenitiesSet.add('Dump point')
          if (cat.includes('Pets')) amenitiesSet.add('Pet-friendly')
        })
      }
      const amenities = Array.from(amenitiesSet)

      // Determine environment from categories or location
      let environment = 'General'
      if (hit.minor_category) {
        const categories = Array.isArray(hit.minor_category) ? hit.minor_category : [hit.minor_category]
        const catStr = categories.join(' ').toLowerCase()
        if (catStr.includes('coastal') || catStr.includes('beach')) environment = 'Coastal'
        else if (catStr.includes('lake')) environment = 'Lakeside'
        else if (catStr.includes('river')) environment = 'Riverside'
        else if (catStr.includes('forest') || catStr.includes('rainforest')) environment = 'Forest'
        else if (catStr.includes('alpine') || catStr.includes('mountain')) environment = 'Alpine'
        else if (catStr.includes('outback')) environment = 'Outback'
      }

      return {
        id: hit.objectID || hit.poi_id?.toString() || '',
        name: hit.poi_name || 'Unknown',
        location: [hit.locality, hit.state, hit.country].filter(Boolean).join(', ') || hit.address || 'Location unknown',
        price,
        rating: hit.rating || 0,
        reviews: hit.reviews || 0,
        image: hit.poi_images && hit.poi_images.length > 0 ? hit.poi_images[0] : '/placeholder.svg',
        amenities: amenities.length > 0 ? amenities : ['Basic facilities'],
        environment,
        isFree,
      }
    })
  }, [hits])

  if (loading && hits.length === 0) {
    return (
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-8 w-40" />
        </div>
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-48 w-full" />
        ))}
      </div>
    )
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground">
          {query ? (
            <>
              <span className="font-semibold text-foreground">{nbHits.toLocaleString()}</span> results for "{query}"
            </>
          ) : (
            <>
              <span className="font-semibold text-foreground">{nbHits.toLocaleString()}</span> places found
            </>
          )}
        </p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm border border-border rounded-md px-3 py-1.5 bg-background"
        >
          <option value="relevance">Sort by: Relevance</option>
          <option value="rating">Sort by: Rating</option>
        </select>
      </div>

      {transformedResults.length === 0 && !loading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            {query ? `No results found for "${query}"` : 'Start searching to find campsites and POIs'}
          </p>
        </div>
      ) : (
        <>
          {transformedResults.map((result) => (
            <div
              key={result.id}
              onClick={() => router.push(`/campsite/${result.id}`)}
              className="cursor-pointer"
            >
              <CampsiteCard campsite={result} />
            </div>
          ))}

          {/* Pagination */}
          {nbHits > 20 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="px-4 py-2 rounded-md border border-border bg-background hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="text-sm text-muted-foreground">
                Page {page + 1} of {Math.ceil(nbHits / 20)}
              </span>
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={page >= Math.ceil(nbHits / 20) - 1}
                className="px-4 py-2 rounded-md border border-border bg-background hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
