import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero'
import Ecosystem from './components/Ecosystem'
import Pillars from './components/Pillars'
import FXDashboard from './fx-engine/pages/Dashboard'
import RevealViewer from './fx-engine/components/RevealViewer'
import { Sparkles } from 'lucide-react';

function LandingPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navigation - Ultra Minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/80 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          
          <div className="text-2xl font-black tracking-tight text-white flex items-center">
            FNX GROUP
          </div>

          <div className="hidden md:flex space-x-12 text-sm font-semibold text-white/80 items-center">
            <a href="#" className="hover:text-white transition-colors">Surface</a>
            <a href="#" className="hover:text-white transition-colors">Parts</a>
            <a href="#" className="hover:text-white transition-colors">Lab</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            
            {/* Link to FX-Engine */}
            <Link 
              to="/fx-engine" 
              className="ml-8 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center gap-2 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              FX-Engine
            </Link>
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fx-engine" element={<FXDashboard />} />
        <Route path="/fx-engine/view" element={<RevealViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
