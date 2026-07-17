"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MOCK_CAPABILITIES } from '@/data/mockData';
import { ArrowUpRight } from 'lucide-react';

export default function Capabilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section ref={containerRef} className="relative w-full bg-surface-lab py-24 md:py-32 border-t border-black/5">
      
      <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex-1 pr-8">
            <p className="text-fnx-navy uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4 font-sans">
              Năng lực Cốt lõi
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-fnx-dark leading-tight uppercase">
              <span className="block whitespace-nowrap">Giải pháp</span>
              <span className="block whitespace-nowrap">Công nghiệp Toàn diện</span>
            </h2>
          </div>
        </motion.div>

        {/* Capability Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1">
          {MOCK_CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.id}
              className="group relative h-[400px] bg-white border border-gray-200 p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-colors duration-500 hover:bg-fnx-dark"
              onMouseEnter={() => setHoveredId(cap.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
            >
              {/* Default State (Visible initially) */}
              <div className={`transition-opacity duration-500 ${hoveredId === cap.id ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-fnx-navy/30 text-5xl font-heading font-black mb-6 block">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-heading font-bold text-fnx-dark uppercase leading-snug">
                  {cap.title}
                </h3>
              </div>

              {/* Hover State (Progressive Disclosure) */}
              <div className={`absolute inset-0 p-8 flex flex-col justify-between text-white transition-opacity duration-500 ${hoveredId === cap.id ? 'opacity-100' : 'opacity-0'}`}>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white uppercase leading-snug mb-4">
                    {cap.title}
                  </h3>
                  <p className="text-gray-300 font-sans text-sm leading-relaxed mb-4">
                    {cap.summary}
                  </p>
                  <p className="text-gray-400 font-sans text-xs leading-relaxed">
                    {cap.detail}
                  </p>
                </div>
                
                {/* Drill Down Call to Action */}
                <div className="flex items-center gap-2 text-fnx-gold-light mt-auto group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-bold uppercase tracking-wider">Khám phá</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
