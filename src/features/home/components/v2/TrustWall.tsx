"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MOCK_CUSTOMERS } from '@/data/mockData';

export default function TrustWall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="relative w-full bg-white py-24 md:py-32 border-t border-black/5">
      <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <motion.div 
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-fnx-navy uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4 font-sans">
            Bảo chứng Chất lượng
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-fnx-dark leading-tight uppercase">
            Đồng hành cùng <br />
            <span className="text-fnx-gold-dark">Thương hiệu Toàn cầu</span>
          </h2>
        </motion.div>

        {/* Trust Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {MOCK_CUSTOMERS.map((customer, index) => (
            <motion.div
              key={customer.id}
              className="bg-surface-lab border border-gray-200 p-8 md:p-12 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {/* Quote Section */}
              <div className="mb-12 relative">
                <span className="text-6xl text-fnx-gold-light/20 font-serif absolute -top-6 -left-4">"</span>
                <p className="text-xl md:text-2xl font-heading font-medium text-fnx-dark leading-relaxed relative z-10">
                  {customer.quote}
                </p>
              </div>

              {/* Customer Info & Logo */}
              <div className="flex items-center gap-6 border-t border-black/10 pt-6 mt-auto">
                {/* Logo Placeholder / Image */}
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center overflow-hidden shrink-0">
                  {/* Sử dụng ảnh thật khi có, tạm thời dùng ảnh mặc định */}
                  <img src={customer.logo} alt={customer.name} className="w-10 h-10 object-contain opacity-50 grayscale" />
                </div>
                
                <div>
                  <h4 className="font-heading font-bold text-lg text-fnx-dark uppercase">{customer.name}</h4>
                  <p className="text-sm font-sans text-gray-500 uppercase tracking-widest">{customer.industry}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
