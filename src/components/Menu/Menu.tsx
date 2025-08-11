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

  // Manejar teclas ↑ ↓ Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) =>
        prev < (query ? results.length : history.length) - 1 ? prev + 1 : prev
      )
    }
    if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
    }
    if (e.key === "Enter") {
      const item = query
        ? results[selectedIndex]
        : history[selectedIndex] &&
          queue.find((t) =>
            t.title.toLowerCase().includes(history[selectedIndex].toLowerCase())
          )

      if (item) {
        service.playTrackId(item.id)
        addToHistory(query || history[selectedIndex])
        setQuery("")
        setIsFocused(false)
      }
    }
  }

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
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none text-spotimy-white placeholder:text-spotimy-gray-light w-full"
        />
      </div>

      {/* Lista de resultados o historial */}
      {isFocused && (results.length > 0 || history.length > 0) && (
        <div className="absolute top-14 left-0 w-full bg-spotimy-gray-dark rounded shadow-lg z-50">
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
                  if (query) {
                    if (typeof item !== "string") {
                      service.playTrackId(item.id)
                      addToHistory(query)
                    }
                  } else {
                    const found = queue.find(
                      (t) =>
                        typeof item === "string" &&
                        t.title.toLowerCase().includes(item.toLowerCase())
                    )
                    if (found) service.playTrackId(found.id)
                  }
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
