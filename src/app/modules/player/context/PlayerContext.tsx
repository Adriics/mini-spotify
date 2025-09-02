import React, { useMemo, useState } from "react"
import { PlayerService } from "../services/PlayerServices"
import { PlayerContext } from "./PlayerContextDefinition"
import type { Track } from "../domain/Track"
import type { Playlist } from "../domain/Playlist"

export const PlayerProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const service = useMemo(() => new PlayerService(), [])
  const [queue, setQueue] = useState<Track[]>([])
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)

  const loadPlaylist = (pl: Playlist) => {
    service.load(pl)
    setQueue([...pl.tracks]) // Crear una nueva referencia para forzar re-render
    const newCurrentTrack = service.getCurrentTrack()
    setCurrentTrack(newCurrentTrack)
  }

  const playerActions = {
    play: () => {
      service.play()
      const newCurrentTrack = service.getCurrentTrack()
      setCurrentTrack(newCurrentTrack)
    },
    playTrackId: (trackId: string) => {
      console.log(`🎯 Intentando reproducir track ID: ${trackId}`)

      try {
        service.playTrackId(trackId)
        const newCurrentTrack = service.getCurrentTrack()
        console.log(`✅ Nuevo track actual:`, newCurrentTrack)
        setCurrentTrack(newCurrentTrack)

        // También actualizar la queue para reflejar el estado actual
        const currentQueue = service.getQueue()
        setQueue([...currentQueue])
      } catch (error) {
        console.error(`❌ Error reproduciendo track ${trackId}:`, error)

        // Si el track no está en la queue actual, intentar buscarlo en la queue del contexto
        const trackInQueue = queue.find((t) => t.id === trackId)
        if (trackInQueue) {
          console.log(
            `🔄 Track encontrado en queue del contexto, reintentando...`
          )
          // Actualizar el servicio con la queue actual del contexto
          service.updateQueue(queue)
          service.playTrackId(trackId)
          const newCurrentTrack = service.getCurrentTrack()
          setCurrentTrack(newCurrentTrack)
        }
      }
    },
    pause: () => {
      service.pause()
      // No necesitamos actualizar currentTrack en pause
    },
    next: () => {
      service.next()
      const newCurrentTrack = service.getCurrentTrack()
      setCurrentTrack(newCurrentTrack)
    },
    previous: () => {
      service.previous()
      const newCurrentTrack = service.getCurrentTrack()
      setCurrentTrack(newCurrentTrack)
    },
  }

  return (
    <PlayerContext.Provider
      value={{
        queue,
        currentTrack,
        loadPlaylist,
        service: playerActions, // ← Pasar todo el objeto
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
