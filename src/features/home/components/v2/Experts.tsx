"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MOCK_EXPERTS } from '@/data/mockData';
import { Network, User } from 'lucide-react';

interface ExpertsProps {
  lineId?: string;
}

export default function Experts({ lineId }: ExpertsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeExpertId, setActiveExpertId] = useState<string | null>(null);

  // Filter if lineId is provided, else show all
  const displayedExperts = lineId 
    ? MOCK_EXPERTS.filter(exp => exp.meta_tags.line_id === lineId)
    : MOCK_EXPERTS;

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we've reached the end (with a small 10px buffer for rounding)
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 4000); // Tự động cuộn mỗi 4 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#F2F1ED] py-24 md:py-32">
      <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 z-10">
        
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col items-center text-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#273444] uppercase sm:whitespace-nowrap">
            <span className="text-fnx-dark uppercase">MẠNG LƯỚI</span> <span className="text-fnx-navy uppercase">CHUYÊN GIA</span>
          </h2>
        </motion.div>

        {/* Expert Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Ẩn scrollbar cho Webkit (Chrome, Safari) */}
          <style dangerouslySetInnerHTML={{__html: `
            div::-webkit-scrollbar { display: none; }
          `}} />

          {displayedExperts.map((expert, index) => (
            <div 
              key={expert.expert_id}
              className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] shrink-0 snap-start"
            >
              <motion.div
                className="group relative bg-white border border-[#E5E7EB] p-8 rounded-lg cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                onClick={() => setActiveExpertId(activeExpertId === expert.expert_id ? null : expert.expert_id)}
              >
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 bg-[#F2F1ED] rounded-full flex items-center justify-center mb-6 text-[#6B7280]">
                  {expert.image_url ? (
                    <img src={expert.image_url} alt={expert.name} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <User className="w-8 h-8" />
                  )}
                </div>

                {/* Default View: Name & Position */}
                <div className={`relative z-10 transition-opacity duration-300 ${activeExpertId === expert.expert_id ? 'opacity-0' : 'group-hover:opacity-0'}`}>
                  <p className="text-[#2F7C78] font-bold text-xs tracking-widest uppercase mb-2">
                    {expert.meta_tags.line_id || "FNX"}
                  </p>
                  <h3 className="text-xl md:text-2xl text-[#273444] mb-1 whitespace-normal break-words">
                    {expert.name}
                  </h3>
                  <p className="text-[#6B7280] text-sm font-sans whitespace-normal break-words">
                    {expert.role}
                  </p>
                </div>

                {/* Hover View: Expertise Reveal */}
                <div className={`absolute inset-0 bg-white/95 backdrop-blur-sm p-8 flex flex-col justify-center transform transition-all duration-300 z-20 ${
                  activeExpertId === expert.expert_id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                }`}>
                  <div className="mb-4">
                    <p className="text-xs uppercase text-[#C47A4B] font-bold tracking-widest mb-2">Lĩnh vực chuyên môn</p>
                    <p className="text-[#273444] font-sans text-sm font-medium leading-relaxed">
                      {expert.hover_content.short_bio}
                    </p>
                  </div>
                  {expert.hover_content.top_impact && (
                    <div>
                      <p className="text-xs uppercase text-[#C47A4B] font-bold tracking-widest mb-2">Kết quả tiêu biểu</p>
                      <p className="text-[#6B7280] font-sans text-sm leading-relaxed line-clamp-4">
                        {expert.hover_content.top_impact}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
