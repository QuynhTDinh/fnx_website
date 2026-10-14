'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { homeContent, type AudienceCardItem } from '@/content/home';
import { SectionHeading } from '@/components/common/SectionHeading';

export default function AudienceSolutionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const { s5AudienceSolutions } = homeContent;
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const offset = scrollContainerRef.current.clientWidth * 0.75;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -offset : offset,
      behavior: 'smooth',
    });
  };

  return (
    <section ref={containerRef} className="w-full py-16 md:py-24 bg-[#F8FAFC] text-gray-900 border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Tiêu đề Section (Eyebrow, H2, Description) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14">
          <SectionHeading
            eyebrow={s5AudienceSolutions.eyebrow}
            title={s5AudienceSolutions.title}
            description={s5AudienceSolutions.description}
            className="mb-0"
          />

          {/* Nút điều hướng Carousel trên màn hình vừa và nhỏ */}
          <div className="hidden sm:flex xl:hidden items-center gap-2 mt-4 md:mt-0 flex-shrink-0">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Xem thẻ trước"
              className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Xem thẻ tiếp theo"
              className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Danh sách 5 Thẻ Khách Hàng */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex xl:grid xl:grid-cols-5 gap-5 overflow-x-auto xl:overflow-visible pb-6 xl:pb-0 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {s5AudienceSolutions.cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
              className="flex-shrink-0 w-[280px] sm:w-[300px] xl:w-auto snap-start flex flex-col"
            >
              <Link
                href={card.href}
                className="group flex flex-col h-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Ảnh thẻ tỷ lệ 16:10 */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 280px, (max-width: 1280px) 300px, 220px"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                  {/* Badge số thứ tự tròn 32px (nền navy-500, chữ trắng) đè cạnh dưới ảnh */}
                  <div className="absolute -bottom-3 left-4 w-8 h-8 rounded-full bg-[#1A396C] text-white flex items-center justify-center font-bold text-xs shadow-md border-2 border-white z-10">
                    {card.number}
                  </div>
                </div>

                {/* Nội dung text */}
                <div className="p-5 pt-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-base md:text-[17px] font-bold text-gray-900 leading-snug mb-2.5 group-hover:text-[#1A396C] transition-colors line-clamp-2">
                      {card.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
                      {card.description}
                    </p>
                  </div>

                  {/* Nút hành động đáy thẻ (cao 36px) */}
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-[#1A396C] group-hover:text-[#132949] transition-colors">
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Chú thích vuốt trên Mobile */}
        <div className="flex sm:hidden justify-center items-center gap-1.5 mt-2">
          {s5AudienceSolutions.cards.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          ))}
        </div>

      </div>
    </section>
  );
}
