"use client"

import { useEffect, useMemo, useState } from 'react'
import { searchIndex } from '@/lib/algolia/client'
import HitCard from './HitCard'

export default function SearchResults({ q, country, state, major }: { q: string; country?: string; state?: string; major?: string }) {
  const [hits, setHits] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [nbPages, setNbPages] = useState(0)
  const [loading, setLoading] = useState(false)

  const facetFilters = useMemo(() => {
    const filters: string[][] = []
    if (country) filters.push([`country:${country}`])
    if (state) filters.push([`state:${state}`])
    if (major) filters.push([`major_category:${major}`])
    return filters
  }, [country, state, major])

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    searchIndex
      .search(q || '', {
        hitsPerPage: 20,
        page,
        facetFilters,
      })
      .then(res => {
        if (cancelled) return
        setHits(res.hits)
        setNbPages(res.nbPages)
      })
      .finally(() => !cancelled && setLoading(false))

    return () => {
      cancelled = true
    }
  }, [q, page, facetFilters])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Results</h2>
        <div className="text-sm text-gray-500">Page {page + 1} / {nbPages}</div>
      </div>

      {loading ? (
        <div>Loading…</div>
      ) : hits.length === 0 ? (
        <div>No results.</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hits.map(hit => (
            <HitCard key={hit.objectID} hit={hit} />)
          )}
        </div>
      )}

      <div className="flex items-center justify-center gap-3">
        <button
          className="px-3 py-2 rounded border border-gray-300 disabled:opacity-50"
          onClick={() => setPage(p => Math.max(0, p - 1))}
          disabled={page === 0}
        >Previous</button>
        <button
          className="px-3 py-2 rounded border border-gray-300 disabled:opacity-50"
          onClick={() => setPage(p => Math.min(nbPages - 1, p + 1))}
          disabled={page >= nbPages - 1}
        >Next</button>
      </div>
    </div>
  )
}
