import { MoodProvider } from "../app/modules/mood/context/MoodProvider";
import { Header } from "../components/Header/Header";
import { MainContent } from "../components/MainContent/MainContent";
import { MoodCreator } from "../components/MoodCreator/MoodSide";
import { Sidebar } from "../components/Sidebar/Sidebar";

export function HomePage() {
  return (
    <div className="min-h-screen bg-spotimy-black text-white">
      <Header />

      <main className="max-w-screen-xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          <Sidebar />
          <MainContent />
          <MoodProvider>
            <MoodCreator />
          </MoodProvider>
        </div>
      </main>
    </div>
  );
}
