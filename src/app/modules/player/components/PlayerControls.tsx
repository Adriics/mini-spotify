import React from "react";
import { usePlayer } from "../hooks/usePlayer";
import type { Playlist } from "../domain/Playlist";

// Playlist de prueba
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
    <div className="flex items-center justify-between gap-4 p-4 bg-spotimy-gray-dark rounded-lg">
      <button
        onClick={() => loadPlaylist(demoPlaylist)}
        className="px-4 py-2 bg-spotimy-green text-black text-sm font-semibold rounded-full hover:bg-spotimy-green-medium transition-colors"
      >
        🎧 Cargar demo
      </button>

      <div className="flex gap-2">
        <button
          onClick={() => service.previous()}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-spotimy-gray-light text-white hover:bg-spotimy-gray-medium transition"
        >
          ⏮️
        </button>
        <button
          onClick={() => service.play()}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-spotimy-green text-black hover:bg-spotimy-green-medium transition"
        >
          ▶️
        </button>
        <button
          onClick={() => service.pause()}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-spotimy-gray-light text-white hover:bg-spotimy-gray-medium transition"
        >
          ⏸️
        </button>
        <button
          onClick={() => service.next()}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-spotimy-gray-light text-white hover:bg-spotimy-gray-medium transition"
        >
          ⏭️
        </button>
      </div>
    </div>
  );
}
