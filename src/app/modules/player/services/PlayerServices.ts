import type { Playlist } from "../domain/Playlist"
import type { Track } from "../domain/Track"

export class PlayerService {
  private queue: Track[] = []
  private currentIndex = 0

  constructor() {}

  //  CARGAR NUEVA LISTA DE REPRODUCCIÓN
  load(playlist: Playlist) {
    this.queue = [...playlist.tracks] // Crear copia para evitar mutaciones
    this.currentIndex = 0
    console.log(`📁 Playlist cargada: ${this.queue.length} tracks`)
  }

  // Método auxiliar para actualizar la queue (útil para sincronización)
  updateQueue(tracks: Track[]) {
    this.queue = [...tracks]
    // Mantener el índice válido
    if (this.currentIndex >= this.queue.length) {
      this.currentIndex = 0
    }
    console.log(`🔄 Queue actualizada: ${this.queue.length} tracks`)
  }

  // REPRODUCE LA CANCIÓN ACTUAL
  play() {
    const track = this.queue[this.currentIndex]
    if (!track) {
      console.log("❌ No hay track para reproducir")
      return
    }

    //Conectar con adaptador infra AUDIO API
    console.log(
      `▶️ Reproduciendo [${this.currentIndex + 1}/${this.queue.length}]: ${
        track.title
      } — ${track.artist}`
    )
  }

  // REPRODUCE UNA CANCION ESPECIFICA
  playTrackId(id: string): void {
    console.log(
      `🔍 Buscando track con ID: ${id} en queue de ${this.queue.length} elementos`
    )

    const index = this.queue.findIndex((t) => t.id === id)

    if (index === -1) {
      console.log(
        `❌ Track no encontrado. IDs disponibles:`,
        this.queue.map((t) => t.id)
      )
      throw new Error(`No existe el track con id ${id}`)
    }

    console.log(`✅ Track encontrado en índice ${index}`)
    this.currentIndex = index
    this.play()
  }

  /** Pausa la reproducción */
  pause() {
    const track = this.getCurrentTrack()
    if (track) {
      console.log(`⏸️ Pausado: ${track.title}`)
    } else {
      console.log("⏸️ Pausado")
    }
  }

  /** Salta a la siguiente pista */
  next() {
    if (this.currentIndex < this.queue.length - 1) {
      this.currentIndex++
      this.play()
    } else {
      console.log("🏁 Fin de la cola")
    }
  }

  /** Vuelve a la pista anterior */
  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.play()
    } else {
      console.log("⏮️ Ya estás en la primera canción")
    }
  }

  getQueue(): Track[] {
    return [...this.queue] // Retornar copia para evitar mutaciones externas
  }

  /** Devuelve la canción actual */
  getCurrentTrack(): Track | null {
    const track = this.queue[this.currentIndex] ?? null
    if (track) {
      console.log(
        `🎵 Track actual: ${track.title} (índice ${this.currentIndex})`
      )
    }
    return track
  }

  /** Método auxiliar para debugging */
  getStatus() {
    return {
      queueLength: this.queue.length,
      currentIndex: this.currentIndex,
      currentTrack: this.getCurrentTrack()?.title || "ninguna",
    }
  }
}
