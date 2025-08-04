import type { Playlist } from "../domain/Playlist";
import { usePlayer } from "../hooks/usePlayer";

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

export function TrackList() {
  const { queue, service, loadPlaylist } = usePlayer();

  return (
    <div className="space-x-2">
      <button onClick={() => loadPlaylist(demoPlaylist)}>Cargar demo</button>

      <div className="hover:bg.gray-100">
        {queue.map((t) => (
          <div
            key={t.id}
            className="border p-2 rounded bg-white shadow hover:bg-red-400"
          >
            {t.title}, {t.artist}
            <button onClick={() => service.playTrackId(t.id)}>
              Reproducir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
