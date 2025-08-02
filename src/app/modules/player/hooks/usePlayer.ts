// src/app/modules/player/hooks/usePlayer.ts
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContextDefinition";

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer debe usarse dentro de un PlayerProvider");
  }
  return context;
}
