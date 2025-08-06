import { Sidebar } from "../components/Sidebar/Sidebar";

export function HomePage() {
  return (
    <div className="min-h-screen bg-spotimy-black text-white">
      <header className="bg-transparent px-6 py-4">
        <div className="max-w-screen-xl mx-auto text-4xl font-bold tracking-tight font-spotimy">
          <h1>🎵Spot&my</h1>
        </div>
      </header>

      {/** Main Content */}
      <main className="max-w-screen-xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          <Sidebar />
        </div>
      </main>
    </div>
  );
}
