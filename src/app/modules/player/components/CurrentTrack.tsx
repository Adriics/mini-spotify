import { usePlayer } from "../hooks/usePlayer";

export function CurrentTrack() {
  const { currentTrack } = usePlayer();

  if (!currentTrack) return null;

  return (
    <div className="text-sm text-white">
      Reproduciendo: <strong>{currentTrack.title}</strong> -{" "}
      {currentTrack.artist}
    </div>
  );
}
