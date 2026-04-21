import Hero from './components/Hero'
import Ecosystem from './components/Ecosystem'
import Pillars from './components/Pillars'

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navigation - Ultra Minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/80 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          
          <div className="text-2xl font-black tracking-tight text-white flex items-center">
            FNX GROUP
          </div>

          <div className="hidden md:flex space-x-12 text-sm font-semibold text-white/80">
            <a href="#" className="hover:text-white transition-colors">Surface</a>
            <a href="#" className="hover:text-white transition-colors">Parts</a>
            <a href="#" className="hover:text-white transition-colors">Lab</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>

        </div>
      </nav>

      <main className="pt-24 px-4 md:px-8 pb-20 max-w-[1600px] mx-auto space-y-4 md:space-y-8">
        <Hero />
        <Ecosystem />
        <Pillars />
      </main>

      <footer className="py-12 px-8 max-w-[1600px] mx-auto text-sm font-medium text-white/40">
        <p>© 2026 FNX Group. Shaping Surfaces, Leading Futures.</p>
      </footer>
    </div>
  )
}

export default App
