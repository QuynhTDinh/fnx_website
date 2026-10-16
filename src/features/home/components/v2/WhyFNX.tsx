"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Compass, Target, Network, type LucideIcon } from 'lucide-react';
import { MOCK_PHILOSOPHY } from '@/data/mockData';

const MANIFESTO_ICONS: Record<string, LucideIcon> = {
  compass: Compass,
  target: Target,
  network: Network,
};

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

        {/* Các khối Manifesto sắp xếp so le từ trên xuống dưới (Alternating Zig-Zag Layout) */}
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-28">
          {MOCK_PHILOSOPHY.manifestos.map((item, index) => {
            const Icon = (item.icon && MANIFESTO_ICONS[item.icon]) || (index === 0 ? Compass : index === 1 ? Target : Network);
            const isReverse = index % 2 !== 0;

            return (
              <motion.div 
                key={item.id}
                className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-14 lg:gap-20 group`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.15 + (index * 0.15), ease: "easeOut" }}
              >
                {/* Visual Anchor: Khối Icon đại diện */}
                <div className="w-full md:w-44 lg:w-52 flex justify-start md:justify-center shrink-0">
                  <div className="relative flex items-center justify-center">
                    {/* Vòng tròn công nghệ mờ phía sau tạo chiều sâu kỹ thuật */}
                    <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border border-fnx-navy/10 bg-fnx-navy/[0.02] pointer-events-none transition-transform duration-700 group-hover:scale-110" />
                    
                    {/* Badge Icon chính */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-fnx-navy/20 shadow-sm flex items-center justify-center text-fnx-navy relative z-10 transition-all duration-500 group-hover:bg-fnx-navy group-hover:text-white group-hover:shadow-lg group-hover:shadow-fnx-navy/20">
                      <Icon className="w-8 h-8 md:w-9 md:h-9 stroke-[1.5]" />
                    </div>
                  </div>
                </div>

                {/* Statement Content: Khối nội dung 3 tầng */}
                <div className="w-full md:flex-1 border-l-2 border-fnx-navy/20 pl-6 md:pl-10 transition-colors duration-300 group-hover:border-fnx-navy">
                  {/* Tầng 1: Title / Eyebrow Tag */}
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-fnx-navy mb-2 block font-mono">
                    {item.title}
                  </span>

                  {/* Tầng 2: Header / Key Motto (H3 ALL CAPS, giữ trên 1 dòng trên màn hình desktop/laptop) */}
                  <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-[1.75rem] xl:text-3xl mb-3 text-fnx-dark uppercase font-bold tracking-tight leading-tight md:whitespace-nowrap">
                    {item.header}
                  </h3>

                  {/* Tầng 3: Description */}
                  <p className="text-base md:text-lg text-gray-600 font-sans max-w-3xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
