import { useState, useEffect } from "react"
import { usePlayer } from "../../app/modules/player/hooks/usePlayer"

export function Menu() {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [history, setHistory] = useState<string[]>([])

  const { queue, service } = usePlayer()

  // Cargar historial desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem("searchHistory")
    if (stored) setHistory(JSON.parse(stored))
  }, [])

  // Guardar historial
  const addToHistory = (term: string) => {
    if (!term.trim()) return
    const updated = [term, ...history.filter((h) => h !== term)].slice(0, 5)
    setHistory(updated)
    localStorage.setItem("searchHistory", JSON.stringify(updated))
  }

  // Filtrar resultados
  const results = query
    ? queue.filter(
        (track) =>
          track.title.toLowerCase().includes(query.toLowerCase()) ||
          track.artist.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <nav className="space-y-3 relative">
      {/* Input de búsqueda */}
      <div
        className={`flex items-center gap-3 bg-spotimy-gray-medium px-3 py-2 rounded transition-all duration-300 border ${
          isFocused
            ? "border-spotimy-green-medium w-full"
            : "border-transparent w-48"
        }`}
      >
        <span className="text-xl">🔍</span>
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setSelectedIndex(0)
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          className="bg-transparent outline-none text-spotimy-white placeholder:text-spotimy-gray-light w-full"
        />
      </div>
      {/* Lista de resultados o historial */}
      // Mostrar resultados si hay consulta, o historial si no
      {isFocused && (results.length > 0 || history.length > 0) && (
        <div className="absolute top-14 left-0 w-full bg-spotimy-gray-dark rounded shadow-lg z-50">
          // Si hay query, mapea results, (cada item es un track) // Si no hay
          query, mapea history (cada item es un string) // i es para el índice
          del elemento seleccionado
          {(query ? results : history).map((item, i) => {
            const label =
              query && typeof item !== "string"
                ? item.title
                : typeof item === "string"
                ? item
                : ""
            const isSelected = i === selectedIndex
            return (
              <button
                key={typeof item === "string" ? item : item.id}
                onMouseDown={() => {
                  // si se hace click en un elemento, se reproduce
                  // el track correspondiente o se agrega al historial
                  if (query) {
                    if (typeof item !== "string") {
                      service.playTrackId(item.id)
                      addToHistory(query)
                    }
                  } else {
                    // Si no hay query, se busca en el historial
                    const found = queue.find(
                      (t) =>
                        typeof item === "string" &&
                        t.title.toLowerCase().includes(item.toLowerCase())
                    )
                    if (found) service.playTrackId(found.id)
                  }
                  // Resetea el input y el estado de enfoque
                  setQuery("")
                  setIsFocused(false)
                }}
                className={`w-full text-left px-4 py-2 ${
                  isSelected
                    ? "bg-spotimy-green-medium"
                    : "hover:bg-spotimy-green-medium"
                } text-spotimy-white`}
              >
                {label}
                {query && typeof item !== "string" && (
                  <span className="text-spotimy-gray-light">
                    {" "}
                    — {item.artist}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      )}
    </nav>
  )
}
