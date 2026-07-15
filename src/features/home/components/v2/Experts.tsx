"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MOCK_EXPERTS } from '@/data/mockData';
import { Network } from 'lucide-react';

export default function Experts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="relative w-full bg-[#05080F] py-24 md:py-32 border-t border-white/5">
      
      {/* Background Subtle Network Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="net-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#net-pattern)" />
        </svg>
      </div>

      <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <p className="text-fnx-gold-light uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4 font-sans flex items-center gap-2">
              <Network className="w-5 h-5" />
              Bảo chứng Chuyên môn
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight uppercase">
              Mạng lưới <br />
              <span className="text-fnx-silver">Chuyên gia</span>
            </h2>
          </div>
        </motion.div>

        {/* Expert Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_EXPERTS.map((expert, index) => (
            <motion.div
              key={expert.id}
              className="group relative bg-white/5 border border-white/10 p-8 rounded-lg cursor-pointer overflow-hidden transition-colors hover:bg-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Default View: Name & Position */}
              <div className="relative z-10">
                <p className="text-fnx-gold-light font-bold text-xs tracking-widest uppercase mb-2">
                  {expert.company}
                </p>
                <h3 className="text-2xl font-heading font-bold text-white mb-1">
                  {expert.name}
                </h3>
                <p className="text-gray-400 text-sm font-sans">
                  {expert.position}
                </p>
              </div>

              {/* Hover View: Expertise Reveal (Interaction Pattern: Explore) */}
              <div className="mt-8 border-t border-white/10 pt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs uppercase text-gray-500 font-bold tracking-widest mb-2">Lĩnh vực chuyên môn</p>
                <p className="text-white font-sans text-sm md:text-base">
                  {expert.expertise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
