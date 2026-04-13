# Architecture

## Product shape

Eftanasya is a single-page React application with Supabase as the backend platform. It combines:

- a branded landing/marketing shell
- authenticated social features
- music library and recommendation surfaces
- a shared playback experience

## Application shell

- `src/main.tsx`
  Boots the React app.
- `src/App.tsx`
  Registers routes and wraps the app in:
  - `QueryClientProvider`
  - `AuthProvider`
  - `PlayerProvider`
  - `TooltipProvider`

## Route map

- `/`
  Landing page with hero, features, philosophy, signup, FAQ, recommendations, and footer.
- `/auth`
  Sign in and sign up flow.
- `/profile`
  Profile editing, avatar upload, playlists, library, downloads, and recommendation setup.
- `/friends`
  Friend management plus entry into chat.
- `/gallery`
  Artist-focused exploration based on listening history and library data.
- `/my-wave`
  Personalized recommendation stream driven by `user_preferences` and stored activity.
- `/search`
  Track search via YouTube client API.
- `/recent-tracks`
  Listening history view.
- `/privacy`, `/terms`, `/usage`, `/support`, `/community`
  Static support and policy pages.

## State and service model

- `src/hooks/useAuth.tsx`
  Owns Supabase session state and exposes `user`, `session`, `loading`, and `signOut`.
- `src/contexts/PlayerContext.tsx`
  Owns current track, playback state, volume, library toggles, and listening-history writes.
- `src/services/musicService.ts`
  Abstracts track search and audio playback, but currently uses simulated search results and demo audio URLs for part of the flow.

## Backend model

Supabase migrations show the current domain model:

- `profiles`
  Display name, avatar, bio, and tag.
- `playlists`
  User-owned playlists.
- `user_library`
  Saved tracks.
- `downloaded_tracks`
  Offline/download metadata.
- `friendships`
  Social graph and friend requests.
- `chats`
  Chat threads.
- `chat_participants`
  Chat membership.
- `messages`
  Realtime chat messages.
- `listening_history`
  Played tracks and recommendation seed data.
- `user_preferences`
  Explicit recommendation preferences and onboarding status.

All of these tables already have RLS policies in `supabase/migrations`.

## External integrations

- Supabase Auth, Postgres, Storage, Realtime
- YouTube Data API from `src/pages/SearchResults.tsx`
- Lovable as the original project source

## Current architectural risks

- Music search and playback are split across two approaches: `musicService` mock logic and direct YouTube search in `SearchResults`.
- Runtime config has only recently been centralized and still keeps compatibility fallbacks.
- The project builds, but lint debt is concentrated in chat, playlists, profile, player context, and some UI utility files.
- Recommendation logic is embedded in UI components and pages, which makes reuse and testing harder.

## Practical direction

The cleanest next evolution is:

1. introduce one real music-provider abstraction
2. move recommendation logic into reusable domain helpers or a backend endpoint
3. finish environment-based config
4. clean lint debt so CI can trust `npm run lint`
