import type { Playlist } from "../domain/Playlist";
import type { Track } from "../domain/Track";

export class PlayerService {
  private queue: Track[] = [];
  private currentIndex = 0;

  constructor() {}

  //  CARGAR NUEVA LISTA DE REPRODUCCIÓN
  load(playlist: Playlist) {
    this.queue = playlist.tracks;
    this.currentIndex = 0;
  }

  // REPRODUCE LA CANCIÓN ACTUAL
  play() {
    const track = this.queue[this.currentIndex];
    if (!track) return;

    //Conerctar con adaptador infra AUDIO API
    console.log(`▶️ Reproduciendo: ${track.title} — ${track.artist}`);
  }

  /** Pausa la reproducción */
  pause() {
    // Lógica de pausa del Audio API
    console.log("⏸️ Pausado");
  }

  /** Salta a la siguiente pista */
  next() {
    if (this.currentIndex < this.queue.length - 1) {
      this.currentIndex++;
      this.play();
    } else {
      console.log("🏁 Fin de la cola");
    }
  }

  /** Vuelve a la pista anterior */
  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.play();
    }
  }
}
