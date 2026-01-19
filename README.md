Plan Easy

Fresh Next.js App Router + Tailwind + Amplify-ready project.

Stack
- Next.js (App Router)
- TypeScript
- TailwindCSS
- AWS Amplify (hosting/config)
- Algolia (search)

Getting started
1. Install dependencies
   npm i

2. Set environment variables
   cp env.example .env.local
   # Fill in Algolia keys

3. Run locally
   npm run dev

Algolia usage
- A minimal client is in lib/algolia/client.ts
- Demo page at /search

Amplify hosting
- Configure Amplify per your account and attach this repo. If you already have amplify/ in monorepo, you can continue using it.
- Replace lib/amplify/exports.ts after running amplify init (or import from aws-exports.js).

Deploy
- Deploy with Amplify Console or Vercel. For Amplify, set env vars in Amplify console build settings.
