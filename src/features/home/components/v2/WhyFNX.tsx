"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MOCK_PHILOSOPHY } from '@/data/mockData';

export default function WhyFNX() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section ref={containerRef} className="relative w-full bg-fnx-dark text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fnx-navy/20 via-fnx-dark to-fnx-dark opacity-60"></div>
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-fnx-matrix bg-[size:30px_30px] opacity-10 mix-blend-overlay"></div>

      <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <motion.div 
          className="mb-20 md:mb-32 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-fnx-gold-light uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4 font-sans">
            Tầm nhìn & Sứ mệnh
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            Vượt lên trên <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fnx-silver to-white/50">Mọi Tiêu Chuẩn</span>
          </h2>
        </motion.div>

        {/* Manifesto Blocks */}
        <div className="flex flex-col gap-16 md:gap-32">
          {MOCK_PHILOSOPHY.manifestos.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.2), ease: "easeOut" }}
            >
              {/* Statement Number / Visual Anchor */}
              <div className="w-full md:w-1/3 flex justify-start md:justify-center">
                <div className="relative">
                  <span className="text-8xl md:text-[160px] font-heading font-black text-white/5 select-none absolute -top-10 md:-top-20 left-0 md:left-1/2 md:-translate-x-1/2">
                    0{index + 1}
                  </span>
                  <div className="w-16 h-16 rounded-full border border-fnx-gold-dark/30 bg-fnx-navy/40 flex items-center justify-center backdrop-blur-md relative z-10">
                    <div className="w-2 h-2 rounded-full bg-fnx-gold-light shadow-[0_0_10px_#C89A3D]"></div>
                  </div>
                </div>
              </div>

              {/* Statement Content */}
              <div className="w-full md:w-2/3 border-l border-white/10 pl-6 md:pl-10">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium leading-snug mb-6 text-white/90">
                  {item.statement}
                </h3>
                <p className="text-lg md:text-xl text-gray-400 font-sans max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
