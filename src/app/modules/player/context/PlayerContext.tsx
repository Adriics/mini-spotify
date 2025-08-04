// src/app/modules/player/context/PlayerContext.tsx
import React, { useMemo, useState } from "react";
import type { Playlist } from "../domain/Playlist";
import { PlayerService } from "../services/PlayerServices";
import { PlayerContext } from "./PlayerContextDefinition";
import type { Track } from "../domain/Track";

export const PlayerProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const service = useMemo(() => new PlayerService(), []);
  const [queue, setQueue] = useState<Track[]>([]);
  const loadPlaylist = (pl: Playlist) => {
    service.load(pl);
    setQueue(pl.tracks);
  };

  return (
    <PlayerContext.Provider value={{ queue, service, loadPlaylist }}>
      {children}
    </PlayerContext.Provider>
  );
};
