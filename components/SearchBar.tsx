"use client"

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function SearchBar() {
  const router = useRouter()
  const [q, setQ] = useState('')

  useEffect(() => {
    const handler = setTimeout(() => {
      if (q && q.length > 1) {
        router.push(`/search?q=${encodeURIComponent(q)}`)
      }
    }, 500)
    return () => clearTimeout(handler)
  }, [q, router])

  return (
    <div className="flex items-center gap-2 mx-auto max-w-2xl">
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search campgrounds, POIs, regions…"
        className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => router.push(`/search?q=${encodeURIComponent(q)}`)}
        className="rounded-md bg-blue-600 px-4 py-3 text-white font-medium hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  )
}
