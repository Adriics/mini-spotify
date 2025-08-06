// components/Sidebar/Options.tsx
export function Options() {
  return (
    <div className="bg-transparent rounded-lg p-2 space-y-4">
      <h2 className="text-lg font-bold">Opciones</h2>

      <button className="w-full bg-spotimy-green hover:bg-spotimy-green-medium text-white font-semibold px-2 py-2 rounded-full transition-all duration-200 transform hover:scale-105">
        🎲Sorpréndeme
      </button>

      <button className="w-full bg-transparent border border-x-spotimy-gray-light text-spotimy-gray-light hover:text-white hover:border-white rounded-full py-3 px-4 font-semibold transition-all duration-200">
        🌙 Cambiar Tema
      </button>
    </div>
  );
}
