"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MOCK_PHILOSOPHY } from '@/data/mockData';

export default function WhyFNX() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-white text-fnx-dark py-16 md:py-24 overflow-hidden"
    >
      {/* Smooth transition from dark matrix above */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#080F12] to-transparent pointer-events-none z-10" />
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fnx-navy/5 via-white to-white opacity-60" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-gray-100/50 bg-[size:30px_30px] opacity-10 mix-blend-overlay" />

      <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 z-20">
        
        {/* Section Header */}
        <motion.div 
          className="mb-14 md:mb-16 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-fnx-navy uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-3 font-sans">
            Tầm nhìn & Sứ mệnh
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-fnx-dark uppercase tracking-tight font-bold">
            Một bài toán – một đầu mối <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fnx-navy to-fnx-navy/60">
              nhiều năng lực được kết nối.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-xl text-fnx-navy/80 font-sans leading-relaxed border-l-4 border-fnx-navy pl-5">
            Kết nối chuỗi giá trị - Chuyển hóa các bài toán thành giải pháp thực tiễn
          </p>
        </motion.div>

        {/* 3 Mục Manifesto trên cùng 1 Hàng (Desktop 3 Cột, giữ nguyên 100% design cũ) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {MOCK_PHILOSOPHY.manifestos.map((item, index) => (
            <motion.div 
              key={item.id}
              className="flex flex-col border-l border-gray-200 pl-6 md:pl-8 lg:pl-10"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.15 * index, ease: "easeOut" }}
            >
              {/* Visual Anchor: Vòng tròn kỹ thuật & Số thứ tự đứng cạnh nhau, không chồng đè */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-full border border-fnx-navy/25 bg-fnx-navy/5 flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-fnx-navy" />
                </div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-[#1A396C]/35 tracking-tight select-none">
                  0{index + 1}
                </span>
              </div>

              {/* Statement Title (H3 ALL CAPS như design cũ) */}
              <h3 className="text-xl md:text-2xl lg:text-3xl mb-3 text-fnx-dark uppercase font-bold tracking-tight">
                {item.statement}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 font-sans leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
