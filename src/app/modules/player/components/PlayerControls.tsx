import { useEffect, useRef } from "react"
import { Button } from "../../../../components/Button"
import type { Playlist } from "../domain/Playlist"
import { usePlayer } from "../hooks/usePlayer"
import song1 from "../../../../assets/music/black-box.mp3"
import song2 from "../../../../assets/music/calm.mp3"

const trackFiles = {
  t1: song1,
  t2: song2,
}
export function PlayerControls() {
  type TrackId = keyof typeof trackFiles

  const audioRef = useRef<HTMLAudioElement>(null)

  const demoPlaylist: Playlist = {
    id: "demo",
    name: "Focus Beats",
    mood: "focus",
    tracks: [
      {
        id: "t1" as TrackId,
        title: "Black Box",
        artist: "Android",
        duration: 180,
      },
      { id: "t2" as TrackId, title: "Calm", artist: "Inspired", duration: 200 },
    ],
  }

  const { currentTrack, loadPlaylist, service } = usePlayer()

  console.log("Track del contexto", currentTrack)

  useEffect(() => {
    console.log("El track cambió", currentTrack)
    if (currentTrack) {
      const audioFiles = trackFiles[currentTrack.id as TrackId]
      console.log("Archivo de audio para el track actual:", audioFiles)
      if (audioRef.current) {
        audioRef.current.src = audioFiles
        audioRef.current.play()
      }
    }
  }, [currentTrack])

  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }

  const previousTrack = () => {
    service.previous()
  }

  const nextTrack = () => {
    service.next()
  }

  return (
    <>
      <Button onClick={() => loadPlaylist(demoPlaylist)}>
        Cargar Playlist
      </Button>
      <audio ref={audioRef} src={song1}></audio>

      <Button onClick={() => pauseTrack()}>Pausa</Button>

      <Button onClick={() => previousTrack()}>⬅️</Button>
      <Button onClick={() => nextTrack()}>➡️</Button>
    </>
  )
}
