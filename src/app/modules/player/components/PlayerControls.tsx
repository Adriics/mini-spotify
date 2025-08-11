import { useRef, useState, useEffect } from "react";
import { usePlayer } from "../hooks/usePlayer";
import type { Playlist } from "../domain/Playlist";
import { Button } from "../../../../components/Button";
import song1 from "../../../../assets/music/black-box.mp3";
import song2 from "../../../../assets/music/calm.mp3";

const demoPlaylist: Playlist = {
  id: "demo",
  name: "Focus Beats",
  mood: "focus",
  tracks: [
    { id: "t1", title: "Black Box", artist: "Android", duration: 180 },
    { id: "t2", title: "Calm", artist: "Inspired", duration: 200 },
  ],
};

const trackFiles = {
  t1: song1,
  t2: song2,
};

export function PlayerControls() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { service, loadPlaylist } = usePlayer();
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const currentTrack = demoPlaylist.tracks[currentTrackIndex];
  const currentSrc = trackFiles[currentTrack.id as keyof typeof trackFiles];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      // pon autoplay
      audioRef.current.autoplay = true; // Descomentar si se quiere auto-reproducir al cargar
      audioRef.current.src = currentSrc;
      // Opcional: auto-play al cambiar de track
      // audioRef.current.play();
    }
  }, [currentSrc]);

  const play = () => audioRef.current?.play();
  const pause = () => audioRef.current?.pause();
  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const next = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % demoPlaylist.tracks.length);
  };

  const prev = () => {
    setCurrentTrackIndex((prev) =>
      prev === 0 ? demoPlaylist.tracks.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-spotimy-gray-dark rounded-lg">
      <Button onClick={() => loadPlaylist(demoPlaylist)}>Cargar track</Button>

      <audio ref={audioRef} src={currentSrc} />

      <div className="flex gap-2">
        <button
          onClick={prev}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-spotimy-gray-light text-white hover:bg-spotimy-gray-medium transition"
        >
          ⏮️
        </button>
        <button
          onClick={play}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-spotimy-green text-black hover:bg-spotimy-green-medium transition"
        >
          ▶️
        </button>
        <button
          onClick={pause}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-spotimy-gray-light text-white hover:bg-spotimy-gray-medium transition"
        >
          ⏸️
        </button>
        <button
          onClick={next}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-spotimy-gray-light text-white hover:bg-spotimy-gray-medium transition"
        >
          ⏭️
        </button>
      </div>
    </div>
  );
}
