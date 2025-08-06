export function Filters() {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-spotimy-gray-light tracking-wider uppercase">
          Filtros
        </h3>

        <div className="flex flex-wrap gap-2">
          <span className="bg-transparent text-spotimy-gray-light text-xs font-semibold cursor-pointer border border-t-spotimy-gray-light hover:border-spotimy-white rounded-full px-3 py-2 hover:bg-spotimy-green-medium">
            Rock
          </span>
          <span className="bg-transparent text-spotimy-gray-light text-xs font-semibold cursor-pointer border border-t-spotimy-gray-light hover:border-spotimy-white rounded-full px-3 py-2 hover:bg-spotimy-green-medium">
            Pop
          </span>{" "}
          <span className="bg-transparent text-spotimy-gray-light text-xs font-semibold cursor-pointer border border-t-spotimy-gray-light hover:border-spotimy-white rounded-full px-3 py-2 hover:bg-spotimy-green-medium">
            Reggaeton
          </span>
        </div>
      </div>
    </>
  );
}
