// src/app/modules/player/context/PlayerContext.tsx
import React, { useMemo, useState } from "react";
import { PlayerService } from "../services/PlayerServices";
import { PlayerContext } from "./PlayerContextDefinition";
import type { Track } from "../domain/Track";
import type { Playlist } from "../domain/Playlist";

export const PlayerProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const service = useMemo(() => new PlayerService(), []);
  const [queue, setQueue] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const loadPlaylist = (pl: Playlist) => {
    service.load(pl);
    setQueue(pl.tracks);
    setCurrentTrack(service.getCurrentTrack());
  };

  const playerActions = {
    play: () => {
      service.play();
      setCurrentTrack(service.getCurrentTrack());
    },
    playTrackId: (trackId: string) => {
      service.playTrackId(trackId);
      setCurrentTrack(service.getCurrentTrack());
    },
    pause: () => {
      service.pause();
    },
    next: () => {
      service.next();
      setCurrentTrack(service.getCurrentTrack());
    },
    previous: () => {
      service.previous();
      setCurrentTrack(service.getCurrentTrack());
    },
  };

  return (
    <PlayerContext.Provider
      value={{
        queue,
        currentTrack,
        loadPlaylist,
        service: playerActions, // usamos el adaptador
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
