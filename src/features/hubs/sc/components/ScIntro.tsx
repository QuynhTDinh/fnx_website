'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { scContent } from '@/content/units/sc';
import { Button } from '@/components/common/Button';

export function ScIntro() {
  const { intro } = scContent;

  const handleScrollToCatalog = (e: React.MouseEvent<any>) => {
    e.preventDefault();
    const el = document.getElementById(intro.ctaHref.replace('#', ''));
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-20 md:py-24 bg-white text-gray-900 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Cột trái (7/12 trên Desktop): Văn bản + Nút cuộn xuống danh mục */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs md:text-sm font-semibold tracking-[0.04em] uppercase text-[#00756F] mb-3 block">
              {intro.eyebrow}
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-gray-900 leading-snug mb-5">
              {intro.title}
            </h2>

            <p className="text-base md:text-lg lg:text-[19px] text-gray-600 leading-relaxed mb-8">
              {intro.description}
            </p>

            <div>
              <Button
                href={intro.ctaHref}
                variant="secondary"
                onClick={handleScrollToCatalog}
                className="w-full sm:w-auto hover:!text-[#00756F] hover:!border-[#00756F]"
              >
                {intro.ctaText}
              </Button>
            </div>
          </motion.div>

          {/* Cột phải (5/12 trên Desktop): Ảnh linh kiện xử lý bề mặt (tỉ lệ 4:3, bo 8px) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-5 relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-100"
          >
            <Image
              src={intro.image}
              alt={intro.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
