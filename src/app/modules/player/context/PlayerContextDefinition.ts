// src/app/modules/player/context/PlayerContextDefinition.ts
import { createContext } from "react"
import type { Playlist } from "../domain/Playlist"
import type { Track } from "../domain/Track"

export interface PlayerActions {
  play: () => void
  playTrackId: (id: string) => void
  pause: () => void
  next: () => void
  previous: () => void
}

export interface PlayerContextType {
  queue: Track[]
  currentTrack: Track | null
  loadPlaylist: (playlist: Playlist) => void
  service: PlayerActions // Ya contiene next, previous, play, pause, etc.
}

export const PlayerContext = createContext<PlayerContextType | undefined>(
  undefined
)
