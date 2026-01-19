export function parseWktPoint(point: string | null | undefined): { lat: number; lng: number } | null {
  if (!point) return null
  // Expect "POINT(lon lat)"
  const match = point.match(/POINT\(([-0-9\.]+)\s+([-0-9\.]+)\)/)
  if (!match) return null
  const lng = parseFloat(match[1])
  const lat = parseFloat(match[2])
  if (Number.isNaN(lat) || Number.isNaN(lng)) return null
  return { lat, lng }
}
