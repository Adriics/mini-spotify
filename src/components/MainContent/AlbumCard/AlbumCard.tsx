type AlbumCardProps = {
  title: string;
  description: string;
};

export function AlbumCard({ title, description }: AlbumCardProps) {
  return (
    <div className="bg-spotimy-gray-dark rounded-full hover:bg-spotimy-gray-medium transition-all duration-200">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-lg flex items-center justify-center">
          <span className="text-2xl">🎵</span>
        </div>
        <div className="font-semibold text-white">
          <h4>{title}</h4>
          <p className="text-xs text-spotimy-gray-medium">{description}</p>
        </div>
      </div>
    </div>
  );
}
