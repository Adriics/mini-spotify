// src/components/SurpriseMeButton.tsx
import React from "react"
import { usePlayer } from "../app/modules/player/hooks/usePlayer"

export function SurpriseMeButton() {
  const { queue, service } = usePlayer()

  const handleSurprise = () => {
    if (queue.length === 0) return

    // Elegir un índice aleatorio
    const randomIndex = Math.floor(Math.random() * queue.length)
    const randomTrack = queue[randomIndex]

    // Reproducir por id
    service.playTrackId(randomTrack.id)

    // Mostrar en consola
    console.log(
      `🎶 Reproduciendo: ${randomTrack.title} - ${randomTrack.artist}`
    )
  }

  return (
    <button
      onClick={handleSurprise}
      className="bg-spotimy-green-medium text-white px-4 py-2 rounded hover:bg-spotimy-green-light transition"
    >
      Sorpréndeme 🎲
    </button>
  )
}
