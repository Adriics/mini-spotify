import { usePlayer } from "../hooks/usePlayer";

export function TrackList() {
  const { queue, service } = usePlayer();

  return (
    <div className="space-x-2">
      <div className="hover:bg.gray-100">
        {queue.map((t) => (
          <div
            key={t.id}
            className="bg-spotimy-gray-dark p-4 rounded shadow hover:bg-spotimy-gray-medium transition"
          >
            <div className="font-bold">{t.title}</div>
            <div className="text-sm text-gray-400">{t.artist}</div>
            <button
              className="text-indigo-600 hover:underline text-lg mt-1"
              onClick={() => service.playTrackId(t.id)}
            >
              ▶️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
