import React from "react";
import { PlayerControls } from "../../player/components/PlayerControls";
import { TrackList } from "../../player/components/TrackList";

export default function PlayerPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reproductor</h1>
      <PlayerControls />
      <TrackList />
    </main>
  );
}
