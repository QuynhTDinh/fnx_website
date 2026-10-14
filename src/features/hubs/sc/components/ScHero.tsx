'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { scContent } from '@/content/units/sc';
import { Button } from '@/components/common/Button';

export function ScHero() {
  const { hero } = scContent;

  return (
    <section className="relative w-full min-h-[560px] md:min-h-[620px] overflow-hidden bg-[#013938] text-white flex flex-col justify-center pt-32 md:pt-40 pb-20">
      {/* Ảnh nền Logistics & Chuỗi cung ứng với Green Technology gradient mask */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={hero.image}
          alt="FNX-SC - Chuỗi cung ứng & Thương mại công nghiệp"
          fill
          priority
          className="object-cover object-center lg:object-[60%_center] opacity-45 md:opacity-60 contrast-110"
          sizes="100vw"
        />
        {/* Gradient mượt Green Tech từ trái sang phải */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#013938] via-[#013938]/90 md:via-[#013938]/75 to-[#013938]/30" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#013938]/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#013938] to-transparent" />
      </div>

      {/* Nội dung Hero */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 w-full">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs md:text-[13px] text-white/70">
          {hero.breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-white/40" />}
              {idx === hero.breadcrumbs.length - 1 ? (
                <span className="text-white font-medium">{crumb.label}</span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Khối Văn bản + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl lg:max-w-4xl"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold uppercase tracking-tight text-white leading-tight mb-5 md:mb-6">
            <span className="block sm:whitespace-nowrap">{hero.titlePart1}</span>
            <span className="block sm:whitespace-nowrap">{hero.titlePart2}</span>
          </h1>

          <p className="text-sm md:text-base lg:text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
            {hero.description}
          </p>

          <div>
            <Button
              href={hero.ctaHref}
              variant="primary"
              icon={true}
              className="w-full sm:w-auto shadow-md !bg-[#00756F] hover:!bg-[#008f88] text-white border-0"
            >
              {hero.ctaText}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
