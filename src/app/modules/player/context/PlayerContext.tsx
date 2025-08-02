// src/app/modules/player/context/PlayerContext.tsx
import React, { useMemo } from "react";
import type { Playlist } from "../domain/Playlist";
import { PlayerService } from "../services/PlayerServices";
import { PlayerContext } from "./PlayerContextDefinition";

export const PlayerProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const service = useMemo(() => new PlayerService(), []);
  const loadPlaylist = (pl: Playlist) => service.load(pl);

  return (
    <PlayerContext.Provider value={{ service, loadPlaylist }}>
      {children}
    </PlayerContext.Provider>
  );
};
