# Roadmap

## Current baseline

The repository is already useful as a product MVP:

- build works
- typecheck works
- Supabase-backed auth and user data flows exist
- core social and recommendation screens are present

The main gap is not "missing product vision". The main gap is stabilization and replacing demo-only parts of the music layer.

## Priority 1: stabilize the core

- Fix the current ESLint failures in:
  - `src/components/ChatWindow.tsx`
  - `src/components/DownloadedTracksManager.tsx`
  - `src/components/PlaylistManager.tsx`
  - `src/components/TrackRecommendations.tsx`
  - `src/contexts/PlayerContext.tsx`
  - `src/pages/Profile.tsx`
  - `src/utils/trackConverter.ts`
- Add a small CI check that runs `npm run typecheck` and `npm run build`
- Review dead or placeholder UX paths before adding more features

Definition of done:
- `npm run lint`
- `npm run typecheck`
- `npm run build`
all pass on `main`

## Priority 2: replace demo music behavior

- Replace the mock search flow in `src/services/musicService.ts`
- Decide whether playback should come from:
  - YouTube
  - a licensed audio source
  - uploaded/audio-library storage inside Supabase
- Merge `SearchResults` and `musicService` into one consistent track model

Definition of done:
- users can search, play, save, and revisit tracks through one coherent flow

## Priority 3: make deployment boring

- Move remaining runtime values to environment-driven config
- Document Vercel or Netlify deployment end-to-end
- Add a production checklist for Supabase URL, keys, redirect URLs, and storage policies
- Decide whether the app is public-read, auth-gated, or mixed

Definition of done:
- a new machine or agent can deploy the project without reading source code first

## Priority 4: improve product quality

- Add analytics or simple event logging for search, play, save, and friend interactions
- Improve recommendation quality beyond simple heuristics
- Add moderation and abuse constraints for social features
- Reduce bundle size by splitting heavier routes

## Suggested work order for the next agent

1. Clean lint debt and lock in CI.
2. Unify the music search/playback layer.
3. Write deployment playbooks and verify one hosted environment.
4. Revisit feature expansion only after the core loop is stable.
