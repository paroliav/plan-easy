import algoliasearch from 'algoliasearch'

const appId = process.env.ALGOLIA_APPLICATION_ID as string
const apiKey = process.env.ALGOLIA_API_KEY as string
const indexName = process.env.ALGOLIA_INDEX_NAME || 'planeasy'

export const adminClient = algoliasearch(appId, apiKey)
export const adminIndex = adminClient.initIndex(indexName)
