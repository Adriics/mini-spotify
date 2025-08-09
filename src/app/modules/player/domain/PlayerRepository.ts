import type { Track } from "./Track";

export interface PlayerRepository {
  play(track: Track): void;
  pause(): void;
  // Otros métodos...
}
