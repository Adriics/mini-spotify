import { Menu } from "../Menu/Menu";

export function Sidebar() {
  return (
    <aside className="col-span-3 space-y-4">
      {/** Navegacion principal */}
      <div className="rounded-lg bg-spotimy-green p-4">
        <Menu />
      </div>

      <div className="bg-transparent rounded-lg p-2">
        <h2 className="text-lg font-bold mb-4">Opciones</h2>
      </div>

      <button className="w-full bg-spotimy-green hover:bg-spotimy-green-medium text-white font-semibold px-2 py-2 rounded-full transition-all duration-200 transform hover:scale-105">
        🎲Sorpréndeme
      </button>

      <button className="w-full bg-transparent border border-x-spotimy-gray-light text-spotimy-gray-light hover:text-white hover:border-white rounded-full py-3 px-4 font-semibold transition-all duration-200">
        🌙 Cambiar Tema
      </button>

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
    </aside>
  );
}
