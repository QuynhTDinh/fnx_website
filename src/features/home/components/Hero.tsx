'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Local Background Video & Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe 
          src="https://play.vidyard.com/aCQhutxjmcNqJ1xFQrdcNZ?v=3.1.1&type=inline&autoplay=1&muted=1&loop=1&hidden_controls=1&playsinline=1"
          title="Vidyard video player" 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        ></iframe>

        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-fnx-dark via-fnx-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-fnx-dark via-fnx-dark/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-full"
        >
          <div className="mb-10 flex flex-col">
            <div className="overflow-hidden pb-6">
              <motion.h1 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[6rem] lg:text-[8rem] font-tech font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 pb-4 block whitespace-nowrap drop-shadow-sm"
              >
                Shaping surface
              </motion.h1>
            </div>
            <div className="overflow-hidden pt-2 pb-6 ml-16 md:ml-32 lg:ml-48">
              <motion.h1 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[6rem] lg:text-[8rem] font-tech font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 pb-4 block whitespace-nowrap drop-shadow-sm"
              >
                Shaping future
              </motion.h1>
            </div>
          </div>
          
          <Link href="/hubs/sc">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-fnx-navy overflow-hidden rounded-md border border-white/20"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative text-white font-sans tracking-wide font-medium text-base flex items-center">
                Kết nối chuỗi giá trị
                <svg className="ml-3 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-fnx-silver text-xs font-sans tracking-widest mb-2 uppercase">Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-fnx-silver to-transparent"></div>
      </motion.div>
    </section>
  );
}
