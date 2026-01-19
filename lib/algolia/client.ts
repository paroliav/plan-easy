import algoliasearch from 'algoliasearch';

// This uses public search-only key on the client. Store sensitive admin keys in server routes only.
const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string;
const ALGOLIA_SEARCH_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY as string;
const ALGOLIA_INDEX = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || 'places';

let client: ReturnType<typeof algoliasearch> | null = null;

function getClient() {
  if (!client) {
    if (!ALGOLIA_APP_ID || !ALGOLIA_SEARCH_KEY) {
      throw new Error('Algolia environment variables are not set');
    }
    client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);
  }
  return client;
}

export async function searchPlaces(query: string, opts: Record<string, any> = {}) {
  const index = getClient().initIndex(ALGOLIA_INDEX);
  const res = await index.search(query, opts);
  return res;
}
