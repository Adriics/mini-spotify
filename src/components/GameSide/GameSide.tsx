import { GameHeader } from "./GameHeader";

export function GameSide() {
  return (
    <aside className="col-span-3 p-4">
      <div className="w-full border flex justify-center bg-gradient-to-b from-spotimy-green-medium to-spotimy-gray-dark">
        <GameHeader />
      </div>
    </aside>
  );
}
