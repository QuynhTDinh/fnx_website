'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { homeContent } from '@/content/home';

export default function ChallengesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const { s4Challenges } = homeContent;

  // Trạng thái bài toán đang mở rộng (null = không có mục nào mở rộng, tất cả chia đều)
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleChallenge = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-[#080F12] text-white">
      {/* ẢNH NỀN FULL TOÀN SECTION (HERO.JPG: PHƯỢNG HOÀNG & TỔ HỢP CÔNG NGHIỆP) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={s4Challenges.image}
          alt="FNX Industrial Challenges"
          fill
          priority={false}
          className="object-cover object-right md:object-center opacity-70 md:opacity-80 contrast-125"
          sizes="100vw"
        />
        {/* Lớp phủ gradient tối mượt để văn bản bên trái luôn nổi bật 100% */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080F12] via-[#080F12]/90 md:via-[#080F12]/80 to-[#080F12]/30" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080F12] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080F12] via-[#080F12]/80 to-transparent" />
      </div>

      {/* PHẦN TRÊN: TIÊU ĐỀ & MÔ TẢ TRÊN LƯỚI 1600PX */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl lg:max-w-5xl"
        >
          <p className="text-[#D3A342] uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-3 font-sans">
            {s4Challenges.eyebrow}
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white leading-tight mb-5 md:mb-6">
            <span className="block sm:whitespace-nowrap">Cùng doanh nghiệp tìm lời giải</span>
            <span className="block sm:whitespace-nowrap">cho những thách thức công nghiệp</span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl">
            {s4Challenges.description}
          </p>
        </motion.div>
      </div>

      {/* PHẦN DƯỚI: HORIZONTAL EXPANDING ACCORDION (DI CHUỘT VÀO TỰ ĐỘNG DÃN RỘNG SANG 2 BÊN) */}
      <div className="relative z-10 w-full border-t border-white/15 bg-[#080F12]/85 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div 
            onMouseLeave={() => setActiveId(null)}
            className="flex flex-col lg:flex-row w-full divide-y lg:divide-y-0 lg:divide-x divide-white/15 min-h-[380px]"
          >
            {s4Challenges.items.map((item, idx) => {
              const isActive = activeId === item.id;
              const hasActive = activeId !== null;

              return (
                <motion.div
                  key={item.id}
                  layout
                  transition={{ layout: { duration: 0.45, ease: [0.25, 1, 0.5, 1] } }}
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={() => toggleChallenge(item.id)}
                  style={{
                    flex: hasActive ? (isActive ? '3.5 1 0%' : '1 1 0%') : '1 1 0%',
                  }}
                  className={`group relative p-5 sm:p-6 lg:p-7 flex flex-col justify-between overflow-hidden cursor-pointer select-none transition-colors duration-300 ${
                    isActive
                      ? 'bg-white/[0.08] border-t-2 lg:border-t-0 lg:border-l-2 border-[#D3A342]'
                      : 'hover:bg-white/[0.04]'
                  }`}
                >
                  {/* Top Bar: Chỉ hiển thị số thứ tự (đã loại bỏ nút + - theo yêu cầu) */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold tracking-wider transition-colors duration-200 ${
                      isActive ? 'text-[#EEB583]' : 'text-[#D3A342]'
                    }`}>
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Tiêu đề Bài toán */}
                      <h3
                        className={`font-semibold text-white leading-snug transition-all duration-200 ${
                          isActive
                            ? 'text-base sm:text-lg lg:text-xl font-bold uppercase tracking-tight mb-3 text-[#EEB583]'
                            : 'text-sm mb-2 group-hover:text-white'
                        }`}
                      >
                        {item.label}
                      </h3>

                      {/* Trạng thái THU GỌN: Chỉ hiển thị câu hỏi tóm tắt */}
                      {!isActive && (
                        <p className="text-xs text-white/60 leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors">
                          {item.question}
                        </p>
                      )}

                      {/* Trạng thái MỞ RỘNG: Hiển thị đầy đủ câu hỏi & định hướng giải pháp FNX */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                            className="mt-3 space-y-4"
                          >
                            {/* Khối Câu hỏi Thách thức */}
                            <div>
                              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white/50 block mb-1">
                                THÁCH THỨC ĐẶT RA:
                              </span>
                              <p className="text-sm md:text-base font-medium text-white/95 leading-relaxed">
                                {item.question}
                              </p>
                            </div>

                            {/* Khối Định hướng giải pháp của FNX */}
                            {item.solution && (
                              <div className="pl-3.5 border-l-2 border-[#D3A342] bg-white/[0.03] py-2.5 pr-3 rounded-r">
                                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#D3A342] block mb-1">
                                  ĐỊNH HƯỚNG GIẢI PHÁP FNX:
                                </span>
                                <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                                  {item.solution}
                                </p>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom Action khi mở rộng: Link liên kết giải pháp */}
                    {isActive && item.unitHref && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.3 }}
                        className="pt-5 mt-4 border-t border-white/10"
                      >
                        <Link
                          href={item.unitHref}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D3A342] hover:text-white transition-colors group/cta"
                        >
                          <span>Xem năng lực & giải pháp thực thi</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
