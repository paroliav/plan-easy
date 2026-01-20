import algoliasearch from 'algoliasearch'

const appId = process.env.ALGOLIA_APPLICATION_ID || process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string
const apiKey = process.env.ALGOLIA_API_KEY || process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY as string
const indexName = process.env.ALGOLIA_INDEX_NAME || process.env.NEXT_PUBLIC_ALGOLIA_INDEX || 'planeasy'

export const adminClient = algoliasearch(appId, apiKey)
export const adminIndex = adminClient.initIndex(indexName)

export async function searchPlaces(query: string, opts: Record<string, any> = {}) {
  const res = await adminIndex.search(query, opts)
  return res
}
