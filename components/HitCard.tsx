import Image from 'next/image'

type Hit = {
  objectID: string
  poi_name?: string
  poi_description?: string
  poi_images?: string[]
  country?: string
  state?: string
  rating?: number
  reviews?: number
}

export default function HitCard({ hit }: { hit: Hit }) {
  const image = hit.poi_images && hit.poi_images.length > 0 ? hit.poi_images[0] : undefined
  return (
    <div className="rounded-lg border border-gray-200 p-4 shadow-sm bg-white">
      {image && (
        <div className="relative w-full h-48 mb-3 overflow-hidden rounded-md">
          <Image src={image} alt={hit.poi_name || 'Image'} fill className="object-cover" />
        </div>
      )}
      <h3 className="font-semibold text-lg">{hit.poi_name || 'Unknown'}</h3>
      {hit.poi_description && (
        <p className="text-sm text-gray-600 line-clamp-3 mt-1">{hit.poi_description}</p>
      )}
      <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
        <span>{hit.state ? `${hit.state}` : hit.country || ''}</span>
        {typeof hit.rating === 'number' && (
          <span>
            ⭐ {hit.rating}{hit.reviews ? ` (${hit.reviews})` : ''}
          </span>
        )}
      </div>
    </div>
  )}
