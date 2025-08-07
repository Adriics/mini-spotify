import { AlbumCard } from "./AlbumCard/AlbumCard";

export function PopularAlbums() {
  return (
    <div className="bg-gradient-to-b rounded-lg p-2 from-spotimy-green to-spotimy-green-medium">
      <h3 className="text-ls font-bold p-2">Àlbumes populares</h3>

      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <AlbumCard
            key={item}
            title={`Playlist ${item}`}
            description="Mix de canciones"
          />
        ))}
      </div>
    </div>
  );
}
