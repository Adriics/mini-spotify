export function MainContent() {
  return (
    <>
      <section className="col-span-6 space-y-6">
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

        <div className="bg-gradient-to-b rounded-lg p-2 from-spotimy-green to-spotimy-green-medium">
          <h3 className="text-ls font-bold">Àlbumes populares</h3>

          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-spotimy-gray-dark rounded-full hover:bg-spotimy-gray-medium transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎵</span>
                  </div>
                  <div className="font-semibold text-white">
                    <h4>Playlist {item}</h4>
                    <p className="text-xs text-spotimy-gray-medium">
                      Mix de canciones
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
