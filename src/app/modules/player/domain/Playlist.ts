import type { Mood } from "./Mood";
import type { Track } from "./Track";

export interface Playlist {
  id: string;
  name: string;
  mood: Mood;
  tracks: Track[];
}
