'use client'

import algoliasearch from 'algoliasearch';

// This uses public search-only key on the client. Store sensitive admin keys in server routes only.
const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string;
const ALGOLIA_SEARCH_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY as string;
const ALGOLIA_INDEX = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || 'planeasy';

let client: ReturnType<typeof algoliasearch> | null = null;
let index: ReturnType<ReturnType<typeof algoliasearch>['initIndex']> | null = null;

function getClient() {
  if (!client) {
    if (!ALGOLIA_APP_ID || !ALGOLIA_SEARCH_KEY) {
      throw new Error('Algolia environment variables are not set');
    }
    client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);
  }
  return client;
}

function getSearchIndex() {
  if (!index) {
    index = getClient().initIndex(ALGOLIA_INDEX);
  }
  return index;
}

export async function searchPlaces(query: string, opts: Record<string, any> = {}) {
  const searchIndex = getSearchIndex();
  const res = await searchIndex.search(query, opts);
  return res;
}

// Export search index for client-side use
export const searchIndex = getSearchIndex();
