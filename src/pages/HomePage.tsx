import { GameSide } from "../components/GameSide/GameSide";
import { Header } from "../components/Header/Header";
import { MainContent } from "../components/MainContent/MainContent";
import { Sidebar } from "../components/Sidebar/Sidebar";

export function HomePage() {
  return (
    <div className="min-h-screen bg-spotimy-black text-white">
      <Header />

      {/** Main Content */}
      <main className="max-w-screen-xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          <Sidebar />
          <MainContent />
          <GameSide />
        </div>
      </main>
    </div>
  );
}
