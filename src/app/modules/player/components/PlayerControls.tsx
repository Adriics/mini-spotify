import React from "react";
import { usePlayer } from "../hooks/usePlayer";
import type { Playlist } from "../domain/Playlist";

// Una playlist de prueba
const demoPlaylist: Playlist = {
  id: "demo",
  name: "Focus Beats",
  mood: "focus",
  tracks: [
    { id: "t1", title: "Beat One", artist: "DJ Focus", duration: 180 },
    { id: "t2", title: "Beat Two", artist: "DJ Focus", duration: 200 },
  ],
};

export function PlayerControls() {
  const { service, loadPlaylist } = usePlayer();

  return (
    <div className="space-x-2">
      <button onClick={() => loadPlaylist(demoPlaylist)}>Cargar demo</button>
      <button onClick={() => service.play()}>Play</button>
      <button onClick={() => service.pause()}>Pause</button>
      <button onClick={() => service.next()}>Next</button>
      <button onClick={() => service.previous()}>Prev</button>
    </div>
  );
}
