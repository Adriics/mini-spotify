import { TrackList } from "../app/modules/player/components/TrackList";
import { PlayerControls } from "../app/modules/player/components/PlayerControls";

export function HomePage() {
  return (
    <div className="min-h-screen bg-spotify-black text-white">
      {/* Header con el logo */}
      <header className="bg-spotify-black-light px-6 py-4 border-b border-spotify-gray-dark">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-spotimy-green text-4xl font-spotimy font-bold tracking-tight">
            🎵 Spot&my
          </h1>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-screen-xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6 min-h-[calc(100vh-120px)]">
          {/* 🎛️ Sidebar izquierdo - Navegación y opciones */}
          <aside className="col-span-3 space-y-4">
            {/* Navegación principal */}
            <div className="bg-spotify-gray-dark rounded-lg p-4">
              <nav className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 text-spotify-gray-light hover:text-white transition-colors duration-200 p-2 rounded hover:bg-spotify-gray-medium"
                >
                  <span className="text-xl">🏠</span>
                  <span className="font-medium">Inicio</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-spotify-gray-light hover:text-white transition-colors duration-200 p-2 rounded hover:bg-spotify-gray-medium"
                >
                  <span className="text-xl">🔍</span>
                  <span className="font-medium">Buscar</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-spotify-gray-light hover:text-white transition-colors duration-200 p-2 rounded hover:bg-spotify-gray-medium"
                >
                  <span className="text-xl">📚</span>
                  <span className="font-medium">Tu biblioteca</span>
                </a>
              </nav>
            </div>

            {/* Opciones y controles */}
            <div className="bg-spotify-gray-dark rounded-lg p-4 space-y-4">
              <h2 className="text-lg font-bold text-white mb-4">Opciones</h2>

              <button className="w-full bg-spotify-green hover:bg-spotify-green-hover text-black font-semibold py-3 px-4 rounded-full transition-all duration-200 transform hover:scale-105">
                🎲 Sorpréndeme
              </button>

              <button className="w-full bg-transparent border border-spotify-gray-light text-spotify-gray-light hover:text-white hover:border-white py-3 px-4 rounded-full transition-all duration-200">
                🌙 Cambiar tema
              </button>

              {/* Filtros rápidos */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-spotify-gray-light uppercase tracking-wider">
                  Filtros
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-spotify-gray-medium text-white text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-spotify-green hover:text-black transition-colors">
                    Rock
                  </span>
                  <span className="bg-spotify-gray-medium text-white text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-spotify-green hover:text-black transition-colors">
                    Pop
                  </span>
                  <span className="bg-spotify-gray-medium text-white text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-spotify-green hover:text-black transition-colors">
                    Jazz
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* 🎵 Contenido central - Música principal */}
          <section className="col-span-6 space-y-6">
            {/* Header de sección */}
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">Explora música</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-spotify-gray-dark hover:bg-spotify-gray-medium transition-colors">
                  <span className="text-xl">⬅️</span>
                </button>
                <button className="p-2 rounded-full bg-spotify-gray-dark hover:bg-spotify-gray-medium transition-colors">
                  <span className="text-xl">➡️</span>
                </button>
              </div>
            </div>

            {/* Sección de álbumes destacados */}
            <div className="bg-gradient-to-b from-spotify-gray-dark to-spotify-black-light rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Álbumes populares
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="bg-spotify-gray-dark hover:bg-spotify-gray-medium p-4 rounded-lg transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-spotify-green to-green-400 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🎵</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-spotify-green transition-colors">
                          Playlist {item}
                        </h4>
                        <p className="text-spotify-gray-light text-sm">
                          Mix de canciones
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lista de tracks */}
            <div className="bg-spotify-gray-dark rounded-lg p-6">
              <TrackList />
            </div>

            {/* Controles del reproductor */}
            <div className="bg-spotify-gray-dark rounded-lg p-4">
              <PlayerControls />
            </div>
          </section>

          {/* 🎮 Sidebar derecho - Juego y actividad */}
          <aside className="col-span-3 space-y-4">
            {/* Juego de adivinar */}
            <div className="bg-gradient-to-br from-purple-900 to-spotify-gray-dark rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                🎯 ¿Adivinas la canción?
              </h2>
              <p className="text-spotify-gray-light text-sm mb-4">
                Selecciona tu estado de ánimo y pon a prueba tus conocimientos
                musicales
              </p>

              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                  🧠 Focus
                </button>
                <button className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                  😊 Feliz
                </button>
                <button className="w-full bg-red-600 hover:bg-red-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                  🔥 Energético
                </button>
                <button className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                  😌 Relajado
                </button>
              </div>
            </div>

            {/* Actividad reciente */}
            <div className="bg-spotify-gray-dark rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-4">
                Actividad reciente
              </h3>
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-2 rounded hover:bg-spotify-gray-medium transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-spotify-green rounded-full flex items-center justify-center">
                      <span className="text-sm">🎵</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">
                        Canción {item}
                      </p>
                      <p className="text-spotify-gray-light text-xs">
                        Artista {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget de estadísticas */}
            <div className="bg-spotify-gray-dark rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-4">
                Tus stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-spotify-gray-light text-sm">
                    Canciones reproducidas
                  </span>
                  <span className="text-spotify-green font-semibold">
                    1,247
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-spotify-gray-light text-sm">
                    Tiempo total
                  </span>
                  <span className="text-spotify-green font-semibold">52h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-spotify-gray-light text-sm">
                    Artista favorito
                  </span>
                  <span className="text-white font-semibold text-sm">
                    The Beatles
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
