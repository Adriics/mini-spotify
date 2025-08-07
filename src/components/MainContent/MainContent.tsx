import { CurrentTrack } from "../../app/modules/player/components/CurrentTrack";
import { PlayerControls } from "../../app/modules/player/components/PlayerControls";
import { TrackList } from "../../app/modules/player/components/TrackList";
import { ExploreHeader } from "./ExploreHeader";
import { PopularAlbums } from "./PopularAlbums";

export function MainContent() {
  return (
    <>
      <section className="col-span-6 space-y-6">
        <ExploreHeader />
        <PopularAlbums />
        <CurrentTrack />
        <TrackList />
        <PlayerControls />
      </section>
    </>
  );
}
