## Arquitectura del módulo `player`

- **Domain**:

  - `Track.ts`
  - `Mood.ts`
  - `Playlist.ts`

- **Services**:

  - `PlayerService.ts` (orquesta las pistas)

- **Context**:

  - `PlayerContextDefinition.ts` (define el contexto)
  - `PlayerContext.tsx` (Provider)

- **Hooks**:

  - `usePlayer.ts` (consumidor del contexto)

- **Components**:

  - `PlayerControls.tsx` (botones Play/Pause/Next/Prev)

- **Pages & Routing**:
  - `PlayerPage.tsx`
  - Ruta `/player` en `router.tsx`
