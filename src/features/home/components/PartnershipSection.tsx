'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { homeContent } from '@/content/home';
import { Button } from '@/components/common/Button';

export default function PartnershipSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const { s6Partnership } = homeContent;

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-[#F8FAFC] text-gray-900 py-24 md:py-32 lg:py-36 border-t border-gray-200">
      {/* ẢNH NỀN FULL TOÀN SECTION (BẢN ĐỒ MẠNG LƯỚI KẾT NỐI TOÀN CẦU) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={s6Partnership.image}
          alt="Mạng lưới hợp tác toàn cầu"
          fill
          priority={false}
          className="object-cover object-right md:object-[75%_center] opacity-85 contrast-105"
          sizes="100vw"
        />
        {/* Lớp phủ gradient mờ dần sang phải để văn bản bên trái luôn cực kỳ rõ nét */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/95 md:via-[#F8FAFC]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-[#F8FAFC]/50 md:hidden" />
      </div>

      {/* NỘI DUNG VĂN BẢN TRÊN LƯỚI 1600PX */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl lg:max-w-3xl"
        >
          <p className="text-[#A36426] uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-3 font-sans">
            {s6Partnership.eyebrow}
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-fnx-dark leading-tight mb-5 md:mb-6 sm:whitespace-nowrap">
            {s6Partnership.title}
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-8 md:mb-10 max-w-xl">
            {s6Partnership.description}
          </p>

          <div>
            <Button
              href={s6Partnership.ctaHref}
              variant="primary"
              icon={true}
              className="shadow-md"
            >
              {s6Partnership.ctaText}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
