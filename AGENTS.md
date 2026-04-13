# AGENTS.md

## Mission

Eftanasya is a gothic-styled music discovery and social listening product. The repository already contains a working frontend MVP. The job for future agents is to stabilize it, replace demo-only music logic, and make deployment predictable without losing the current visual identity.

## Fast start

```bash
npm ci
npm run dev
npm run typecheck
npm run build
```

Use `npm run lint` for debt discovery, not as a release gate. It is currently red.

## What is true right now

- `main` is the only active branch on GitHub.
- The repo builds successfully.
- TypeScript passes.
- Supabase is the real backend for auth, profiles, playlists, library, downloads, friendships, chats, messages, listening history, and user preferences.
- The music layer is mixed: some flows use real stored data, while `src/services/musicService.ts` still uses simulated search and demo audio URLs.
- `src/pages/SearchResults.tsx` still performs direct YouTube client-side search.

## First files to read

- `README.md`
- `docs/architecture.md`
- `docs/roadmap.md`
- `src/App.tsx`
- `src/hooks/useAuth.tsx`
- `src/contexts/PlayerContext.tsx`
- `src/services/musicService.ts`

## Repo map

- `src/pages/Index.tsx`
  Main landing page and marketing shell.
- `src/pages/Profile.tsx`
  User profile, playlists, library, downloads, and recommendation setup.
- `src/pages/Friends.tsx`
  Friends list and entry point for chat.
- `src/pages/Gallery.tsx`
  Artist exploration and recommendation-driven browsing.
- `src/pages/MyWave.tsx`
  Personalized recommendation screen.
- `src/pages/SearchResults.tsx`
  Public track search UI using YouTube API directly.
- `src/components/ChatWindow.tsx`
  Realtime messaging powered by Supabase channels.
- `src/components/FriendsList.tsx`
  Friendship management and user discovery by tag.
- `src/components/TrackRecommendations.tsx`
  Recommendation widget based on listening history and library data.
- `supabase/migrations`
  Source of truth for the current schema.

## Guardrails

- Treat the connected Supabase project as shared state. Avoid destructive schema changes unless the migration is intentional and documented.
- Do not rip out the current player/search behavior without replacing the end-to-end user path.
- Preserve the existing dark/gothic visual language unless there is an explicit redesign task.
- Prefer `typecheck + build` as the minimum verification pair until lint debt is reduced.

## Recommended next tasks

1. Replace `musicService` mock search/playback with a real provider-backed flow.
2. Clean lint debt in chat, player, profile, playlist, and utility files.
3. Move all runtime config to environment variables without relying on hardcoded fallbacks.
4. Add deployment instructions and one-click preview hosting.
5. Decide whether search, library, and recommendations should stay client-only or move behind a backend/API layer.
