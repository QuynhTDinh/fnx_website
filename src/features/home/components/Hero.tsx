'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Local Background Video & Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe 
          src="https://play.vidyard.com/aCQhutxjmcNqJ1xFQrdcNZ?autoplay=1&muted=1&loop=1&hidden_controls=1&playsinline=1"
          title="Vidyard video player" 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          className="absolute top-1/2 left-1/2 hero-video-iframe -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        ></iframe>

        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-fnx-dark via-fnx-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-fnx-dark via-fnx-dark/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-full pl-3 sm:pl-8 md:pl-14 lg:pl-20 xl:pl-28"
        >
          <div className="mb-10 flex flex-col">
            <div className="overflow-hidden pb-6">
              <motion.h1 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "'Orbitron', var(--font-tech-var), sans-serif" }}
                className="text-3xl sm:text-[2.75rem] md:text-[3.75rem] lg:text-[4.75rem] xl:text-[5.5rem] font-tech font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 pb-4 block whitespace-nowrap drop-shadow-sm pr-4"
              >
                Shaping surface
              </motion.h1>
            </div>
            <div className="overflow-hidden pt-2 pb-6 ml-4 sm:ml-8 md:ml-12 lg:ml-18 xl:ml-24">
              <motion.h1 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "'Orbitron', var(--font-tech-var), sans-serif" }}
                className="text-3xl sm:text-[2.75rem] md:text-[3.75rem] lg:text-[4.75rem] xl:text-[5.5rem] font-tech font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 pb-4 block whitespace-nowrap drop-shadow-sm pr-4"
              >
                Shaping future
              </motion.h1>
            </div>
          </div>
          
          <Link href="/engage" className="inline-block">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-[#1A396C] hover:bg-[#132949] overflow-hidden rounded-md border border-white/20 shadow-md transition-colors cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative text-white font-sans tracking-wide font-semibold text-base flex items-center">
                Kết nối chuỗi giá trị
                <svg className="ml-3 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
