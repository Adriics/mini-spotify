export function ExploreHeader() {
  return (
    <div className="flex items-center gap-6 justify-between">
      <h2 className="font-bold font-spotimy text-3xl tracking-tight text-white">
        Explora música
      </h2>

      <div className="flex gap-2">
        <button className="p-2 rounded-full bg-spotimy-black hover:bg-gray-400 transition-colors">
          <span className="text-xl">⬅️</span>
        </button>
        <button className="p-2 rounded-full bg-spotimy-black hover:bg-gray-400 transition-colors">
          <span className="text-xl">➡️</span>
        </button>
      </div>
    </div>
  );
}
