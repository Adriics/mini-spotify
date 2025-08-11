import { useState } from "react";
import { GameHeader } from "../../app/modules/mood/components/MoodHeader";
import { StartMoodButton } from "../../app/modules/mood/components/StartMoodButton";
import { QuestionPanel } from "./QuestionPanel";

export function MoodCreator() {
  const [started, setStarted] = useState(false);

  return (
    <aside className="col-span-3 p-4">
      <div className="w-full border h-full justify-center bg-gradient-to-b from-spotimy-green-medium to-spotimy-gray-dark">
        <GameHeader />
        {!started ? (
          <StartMoodButton onStart={() => setStarted(true)} />
        ) : (
          <QuestionPanel />
        )}
      </div>
    </aside>
  );
}
