"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MOCK_SOLUTIONS_BY_BU } from '@/data/mockData';
import { LayoutGrid, Target, ShieldCheck } from 'lucide-react';

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<string>(MOCK_SOLUTIONS_BY_BU[0].id);

  const activeBU = MOCK_SOLUTIONS_BY_BU.find(bu => bu.id === activeTab);

  return (
    <section ref={containerRef} className="relative w-full bg-[#F2F1ED] py-24 md:py-32 border-t border-black/5">
      <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <p className="text-fnx-navy uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4 font-sans flex items-center gap-2">
              <LayoutGrid className="w-5 h-5" />
              Giải pháp Cốt lõi
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-fnx-dark leading-tight uppercase">
              Bài toán & <br />
              <span className="text-fnx-gold-dark">Giải pháp</span>
            </h2>
          </div>
        </motion.div>

        {/* Filter / Compare Pattern */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Tabs / Filter List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 border-l-2 border-gray-200">
            {MOCK_SOLUTIONS_BY_BU.map((bu, index) => (
              <motion.button
                key={bu.id}
                onClick={() => setActiveTab(bu.id)}
                className={`text-left pl-6 py-4 relative transition-all duration-300 ${
                  activeTab === bu.id 
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
                <span className="text-xl md:text-2xl font-heading font-bold uppercase">
                  {bu.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full lg:w-2/3 min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeBU && (
                <motion.div 
                  key={activeBU.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-8"
                >
                  {activeBU.solutions.map((solution) => (
                    <div key={solution.id} className="bg-white p-8 md:p-10 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-2xl font-heading font-bold text-fnx-dark mb-8 pb-4 border-b border-gray-100">
                        {solution.name}
                      </h3>
                      
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <Target className="w-5 h-5 text-fnx-gold-dark" />
                            <h4 className="text-fnx-gold-dark uppercase font-bold tracking-widest text-xs">
                              Thách thức (Pain Point)
                            </h4>
                          </div>
                          <p className="text-gray-600 font-sans leading-relaxed text-sm md:text-base">
                            {solution.challenge}
                          </p>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <ShieldCheck className="w-5 h-5 text-fnx-navy" />
                            <h4 className="text-fnx-navy uppercase font-bold tracking-widest text-xs">
                              Giải pháp từ FNX
                            </h4>
                          </div>
                          <p className="text-fnx-dark font-medium font-sans leading-relaxed text-sm md:text-base">
                            {solution.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
