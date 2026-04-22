import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css'; // You can change this to a custom FNX theme later
import usePresentationStore from '../store/usePresentationStore';
import { ArrowLeft } from 'lucide-react';

export default function RevealViewer() {
  const navigate = useNavigate();
  const deckRef = useRef(null);
  const presentationData = usePresentationStore(state => state.presentationData);

  useEffect(() => {
    if (!presentationData) {
      navigate('/fx-engine');
      return;
    }

    let deck;
    if (deckRef.current) {
      deck = new Reveal(deckRef.current, {
        hash: true,
        slideNumber: true,
        transition: 'slide',
        backgroundTransition: 'fade',
      });
      deck.initialize();
    }

    return () => {
      try {
        if (deck) deck.destroy();
      } catch (e) {
        console.warn("Reveal.js destroy error:", e);
      }
    };
  }, [presentationData, navigate]);

  if (!presentationData) return null;

  return (
    <div className="h-screen w-full bg-black text-white relative">
      {/* Back button overlay */}
      <button 
        onClick={() => navigate('/fx-engine')}
        className="absolute top-4 left-4 z-50 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all"
        title="Back to Dashboard"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Reveal.js markup */}
      <div className="reveal" ref={deckRef}>
        <div className="slides">
          {presentationData.slides.map((slide) => (
            <section key={slide.id}>
              {slide.layout === 'TITLE' && (
                <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="text-6xl font-black text-white mb-6">{slide.data.title}</h1>
                  <h3 className="text-2xl text-neutral-400 font-medium mb-8">{slide.data.subtitle}</h3>
                  <p className="text-sm tracking-widest text-blue-500 font-bold uppercase">{slide.data.author}</p>
                </div>
              )}

              {slide.layout === 'MECE_TREE' && (
                <div className="h-full pt-12">
                  <h2 className="text-4xl font-bold mb-12 text-left text-blue-400">{slide.data.title}</h2>
                  <div className="grid grid-cols-3 gap-6">
                    {slide.data.nodes.map((node, i) => (
                      <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-left h-64 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">{node.title}</h3>
                        <ul className="space-y-3">
                          {node.details.map((detail, j) => (
                            <li key={j} className="text-neutral-400 flex items-start gap-2 text-lg">
                              <span className="text-blue-500 mt-1">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.layout === 'BULLET_POINTS' && (
                <div className="h-full pt-12 text-left">
                  <h2 className="text-4xl font-bold mb-12 text-blue-400">{slide.data.title}</h2>
                  <ul className="space-y-6">
                    {slide.data.items.map((item, i) => (
                      <li key={i} className="text-2xl text-neutral-300 flex items-start gap-4">
                        <span className="text-blue-500 mt-2">♦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
