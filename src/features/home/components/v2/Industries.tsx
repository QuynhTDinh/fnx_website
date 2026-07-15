"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MOCK_INDUSTRIES } from '@/data/mockData';

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<string>(MOCK_INDUSTRIES[0].id);

  const activeIndustry = MOCK_INDUSTRIES.find(ind => ind.id === activeTab);

  return (
    <section ref={containerRef} className="relative w-full bg-white py-24 md:py-32 border-t border-black/5">
      <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-fnx-navy uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4 font-sans">
            Ứng dụng Công nghiệp
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-fnx-dark leading-tight uppercase">
            Bài toán <span className="text-fnx-gold-dark">Đặc thù</span>
          </h2>
        </motion.div>

        {/* Industry Filter / Compare Pattern */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mt-12">
          
          {/* Tabs / Filter List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 border-l-2 border-gray-100">
            {MOCK_INDUSTRIES.map((ind, index) => (
              <motion.button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`text-left pl-6 py-4 relative transition-all duration-300 ${
                  activeTab === ind.id 
                    ? 'text-fnx-navy border-l-2 border-fnx-navy -ml-[2px]' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <span className="block text-sm font-bold tracking-widest mb-1">
                  0{index + 1}
                </span>
                <span className="text-2xl font-heading font-bold uppercase">
                  {ind.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content (Compare view) */}
          <div className="w-full lg:w-2/3">
            {activeIndustry && (
              <motion.div 
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-surface-lab p-8 md:p-12 border border-gray-200 h-full flex flex-col justify-center"
              >
                <div className="mb-8">
                  <h4 className="text-fnx-gold-dark uppercase font-bold tracking-widest text-sm mb-4">
                    Thách thức (Pain Point)
                  </h4>
                  <p className="text-2xl md:text-3xl font-heading font-medium text-fnx-dark leading-relaxed">
                    "{activeIndustry.challenge}"
                  </p>
                </div>
                
                <div className="pt-8 border-t border-black/10">
                  <h4 className="text-fnx-navy uppercase font-bold tracking-widest text-sm mb-4">
                    Giải pháp từ FNX
                  </h4>
                  <p className="text-lg text-gray-600 font-sans leading-relaxed">
                    {activeIndustry.solution}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
