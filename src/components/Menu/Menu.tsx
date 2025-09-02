import { useState, useEffect, useRef } from "react"
import { usePlayer } from "../../app/modules/player/hooks/usePlayer"
import type { Track } from "../../app/modules/player/domain/Track"

export function Menu() {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [history, setHistory] = useState<string[]>([])

  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { queue, service } = usePlayer()

  // Cargar historial desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem("searchHistory")
    if (stored) {
      try {
        setHistory(JSON.parse(stored))
      } catch (error) {
        console.error("Error loading search history:", error)
      }
    }
  }, [])

  // Manejar clicks fuera del componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Guardar historial
  const addToHistory = (term: string) => {
    if (!term.trim()) return
    const updated = [term, ...history.filter((h) => h !== term)].slice(0, 5)
    setHistory(updated)
    try {
      localStorage.setItem("searchHistory", JSON.stringify(updated))
    } catch (error) {
      console.error("Error saving search history:", error)
    }
  }

  // Filtrar resultados
  const results = query.trim()
    ? queue
        .filter(
          (track) =>
            track.title.toLowerCase().includes(query.toLowerCase()) ||
            track.artist.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 10) // Limitar a 10 resultados para mejor performance
    : []

  // Manejar navegación con teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    const items = query ? results : history
    const maxIndex = items.length - 1

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
        break
      case "Enter":
        e.preventDefault()
        if (items.length > 0) {
          handleItemSelect(items[selectedIndex])
        }
        break
      case "Escape":
        setIsOpen(false)
        inputRef.current?.blur()
        break
    }
  }

  // Manejar selección de items
  const handleItemSelect = (item: Track | string) => {
    const isTrack = (item: Track | string): item is Track => {
      return typeof item === "object" && item !== null && "id" in item
    }

    if (isTrack(item)) {
      // Es un track del resultado de búsqueda
      service.playTrackId(item.id)
      addToHistory(item.title)
    } else {
      // Es un item del historial (string)
      const found = queue.find(
        (t) =>
          t.title.toLowerCase().includes(item.toLowerCase()) ||
          t.artist.toLowerCase().includes(item.toLowerCase())
      )
      if (found) {
        service.playTrackId(found.id)
        setQuery(item) // Establecer la query del historial
      }
    }

    if (isTrack(item)) {
      setQuery("")
      setIsOpen(false)
    }
  }

  // Manejar cambios en el input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    setSelectedIndex(0)
    setIsOpen(true)
  }

  // Manejar focus del input
  const handleInputFocus = () => {
    setIsOpen(true)
  }

  return (
    <nav className="space-y-3 relative" ref={containerRef}>
      {/* Input de búsqueda */}
      <div
        className={`flex items-center gap-3 bg-spotimy-gray-medium px-3 py-2 rounded transition-all duration-300 border ${
          isOpen
            ? "border-spotimy-green-medium w-full"
            : "border-transparent w-48"
        }`}
      >
        <span className="text-xl">🔍</span>
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar canciones, artistas..."
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none text-spotimy-white placeholder:text-spotimy-gray-light w-full"
          autoComplete="off"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              setSelectedIndex(0)
              inputRef.current?.focus()
            }}
            className="text-spotimy-gray-light hover:text-spotimy-white transition-colors"
            type="button"
          >
            ✕
          </button>
        )}
      </div>

      {/* Lista de resultados o historial */}
      {isOpen && (results.length > 0 || (!query && history.length > 0)) && (
        <div className="absolute top-14 left-0 w-full bg-spotimy-gray-dark rounded shadow-lg z-50 max-h-80 overflow-y-auto border border-spotimy-gray-medium">
          {/* Título de sección */}
          <div className="px-4 py-2 text-xs text-spotimy-gray-light uppercase font-semibold border-b border-spotimy-gray-medium">
            {query ? `Resultados (${results.length})` : "Búsquedas recientes"}
          </div>

          {/* Items */}
          {(query ? results : history).map(
            (item: Track | string, i: number) => {
              const isTrack = (item: Track | string): item is Track => {
                return typeof item === "object" && item !== null && "id" in item
              }
              const isSelected = i === selectedIndex

              return (
                <button
                  key={isTrack(item) ? item.id : `history-${i}`}
                  onClick={() => handleItemSelect(item)}
                  onMouseEnter={() => setSelectedIndex(i)}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                    isSelected
                      ? "bg-spotimy-green-medium text-white"
                      : "hover:bg-spotimy-gray-medium text-spotimy-white"
                  }`}
                  type="button"
                >
                  {isTrack(item) ? (
                    <>
                      <span className="text-lg">🎵</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{item.title}</div>
                        <div className="text-sm text-spotimy-gray-light truncate">
                          {item.artist}
                        </div>
                      </div>
                      <span className="text-xs text-spotimy-gray-light">▶</span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg">🕒</span>
                      <div className="flex-1 truncate">{item}</div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          const newHistory = history.filter(
                            (_, idx) => idx !== i
                          )
                          setHistory(newHistory)
                          localStorage.setItem(
                            "searchHistory",
                            JSON.stringify(newHistory)
                          )
                        }}
                        className="text-xs text-spotimy-gray-light hover:text-spotimy-white opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Eliminar del historial"
                      >
                        ✕
                      </button>
                    </>
                  )}
                </button>
              )
            }
          )}

          {/* Mensaje cuando no hay resultados */}
          {query && results.length === 0 && (
            <div className="px-4 py-6 text-center text-spotimy-gray-light">
              <span className="text-2xl mb-2 block">🔍</span>
              No se encontraron resultados para "{query}"
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
