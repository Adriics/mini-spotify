// src/app/modules/player/context/PlayerContextDefinition.ts
import { createContext } from "react";
import type { Playlist } from "../domain/Playlist";
import type { PlayerService } from "../services/PlayerServices";
import type { Track } from "../domain/Track";

export interface PlayerContextType {
  queue: Track[];
  service: PlayerService;
  loadPlaylist: (pl: Playlist) => void;
}

export const PlayerContext = createContext<PlayerContextType | undefined>(
  undefined
);
