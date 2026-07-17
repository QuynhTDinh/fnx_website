"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MOCK_PARTNERS } from '@/data/mockData';
import { ShieldCheck } from 'lucide-react';

export default function TrustWall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const row1 = MOCK_PARTNERS.filter(p => p.logo && p.logo !== "");
  const row2 = MOCK_PARTNERS.filter(p => !p.logo || p.logo === "");

  return (
    <section ref={containerRef} className="relative w-full bg-[#F2F1ED] py-24 md:py-32 overflow-hidden border-t border-black/5">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 50s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 50s linear infinite;
        }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}} />

      <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 z-10 mb-20 md:mb-28">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#C47A4B] uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4 font-sans flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            Bảo chứng Chất lượng
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#273444] leading-tight uppercase flex flex-col items-center">
            <span className="block whitespace-nowrap">Đồng hành cùng</span>
            <span className="block text-[#6B7280] whitespace-nowrap">Thương hiệu Toàn cầu</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Area */}
      <div className="relative w-full flex flex-col gap-12 md:gap-16 marquee-container">
        
        {/* Gradient overlays for smooth edge fading */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#F2F1ED] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#F2F1ED] to-transparent z-20 pointer-events-none"></div>

        {/* Row 1: Left */}
        <div className="flex w-max animate-marquee-left items-center">
          {[...row1, ...row1].map((partner, index) => (
            <div 
              key={`r1-${partner.id}-${index}`}
              className="flex items-center justify-center px-12 md:px-24 opacity-30 hover:opacity-100 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:scale-105"
            >
              {partner.logo ? (
                <img src={partner.logo} alt={partner.name} className="h-16 md:h-20 object-contain" />
              ) : (
                <span className="font-heading font-black text-4xl md:text-6xl tracking-widest text-[#273444] whitespace-nowrap">
                  {partner.name.toUpperCase()}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Row 2: Right */}
        <div className="flex w-max animate-marquee-right items-center">
          {[...row2, ...row2].map((partner, index) => (
            <div 
              key={`r2-${partner.id}-${index}`}
              className="flex items-center justify-center px-12 md:px-24 opacity-30 hover:opacity-100 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:scale-105"
            >
              {partner.logo ? (
                <img src={partner.logo} alt={partner.name} className="h-16 md:h-20 object-contain" />
              ) : (
                <span className="font-heading font-black text-4xl md:text-6xl tracking-widest text-[#273444] whitespace-nowrap">
                  {partner.name.toUpperCase()}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
