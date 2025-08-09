import type { PlayerRepository } from "../domain/PlayerRepository";
import type { Track } from "../domain/Track";

export class PlayTrackUseCase {
  private playerRepository: PlayerRepository;

  constructor(playerRepository: PlayerRepository) {
    this.playerRepository = playerRepository;
  }

  execute(track: Track) {
    // Lógica de aplicación, por ejemplo:
    this.playerRepository.play(track);
  }
}
