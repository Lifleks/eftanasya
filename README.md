# Eftanasya

Eftanasya is a dark-themed music discovery and social listening web app. This repository contains the current frontend MVP: landing experience, auth, profile management, library and playlists, listening history, recommendations, friends/chat, and a shared player shell backed by Supabase.

Start here:
- [AGENTS.md](./AGENTS.md)
- [docs/architecture.md](./docs/architecture.md)
- [docs/roadmap.md](./docs/roadmap.md)

## Current status

- Build: passes with `npm run build`
- Typecheck: passes with `npm run typecheck`
- Lint: currently fails because of inherited React hook and TypeScript debt
- Product maturity: UI-heavy MVP with real Supabase data flows and partial demo logic in the music layer

## What works today

- Supabase auth and profile editing
- User library, downloads, playlists, and listening history
- Recommendation surfaces in `TrackRecommendations`, `Gallery`, and `MyWave`
- Friends, chat, and realtime message subscription
- Global player UI with recent tracks sidebar
- Legal/support/community pages for a public-facing product shell

## What is still partial

- `src/services/musicService.ts` still simulates search and audio playback for part of the experience
- `src/pages/SearchResults.tsx` talks to the YouTube client API directly
- Recommendation logic is heuristic and based on stored user activity, not a dedicated recommendation backend
- `npm run lint` is red and should not be used as the only quality gate yet

## Stack

- React 18
- Vite 5
- TypeScript
- Tailwind CSS + shadcn/ui
- Supabase Auth, Postgres, Storage, and Realtime

## Quick start

```bash
git clone https://github.com/Lifleks/eftanasya.git
cd eftanasya
npm ci
npm run dev
```

Optional local overrides can live in `.env.local`. See [.env.example](./.env.example). The repository currently includes client-safe fallbacks for the active Supabase project and the current YouTube search key so the app can boot without extra setup.

## Scripts

- `npm run dev` - local development server
- `npm run build` - production build
- `npm run typecheck` - TypeScript verification
- `npm run lint` - ESLint scan, currently expected to fail until debt is cleaned up
- `npm run verify` - typecheck plus build
- `npm run preview` - preview the production bundle

## Project map

- `src/App.tsx` - route registration and global providers
- `src/pages/*` - route-level screens
- `src/components/*` - reusable UI and feature widgets
- `src/contexts/PlayerContext.tsx` - global player state and library hooks
- `src/hooks/useAuth.tsx` - Supabase auth session provider
- `src/services/musicService.ts` - current client-side playback and mocked search layer
- `src/integrations/supabase/*` - generated Supabase client and database types
- `supabase/migrations/*` - schema history for profiles, playlists, library, downloads, chat, listening history, and preferences

## Data model

The current Supabase project stores:

- `profiles`
- `playlists`
- `user_library`
- `downloaded_tracks`
- `friendships`
- `chats`
- `chat_participants`
- `messages`
- `listening_history`
- `user_preferences`

Each table already has RLS policies defined in the migrations directory.

## Deployment notes

Today the repository is easiest to deploy as a static frontend with Supabase as the backend service. Recommended targets:

- Vercel
- Netlify
- Lovable publish flow for quick previews

Before calling it production-ready, plan to finish the tasks in [docs/roadmap.md](./docs/roadmap.md), especially around the music backend, runtime configuration, and lint/code health.
