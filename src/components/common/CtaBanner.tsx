'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/Button';

interface CtaBannerProps {
  title: string;
  ctaText: string;
  ctaHref: string;
  image?: string;
  themeColor?: string;
}

export function CtaBanner({
  title,
  ctaText,
  ctaHref,
  image = '/images/banner/Hero.jpg',
  themeColor = '#0284C7',
}: CtaBannerProps) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-[#0C1927] border border-white/10 shadow-xl">
      {/* Ảnh nền mờ kết hợp gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={image}
          alt="FNX Industrial Solutions"
          fill
          className="object-cover object-center opacity-25 md:opacity-35"
          sizes="100vw"
        />
        {/* Gradient mượt từ trái sang phải */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1927] via-[#0C1927]/90 to-transparent" />
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 80% 50%, ${themeColor}, transparent 70%)`,
          }}
        />
      </div>

      {/* Nội dung Banner */}
      <div className="relative z-10 p-8 sm:p-12 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="max-w-3xl lg:max-w-4xl flex-1">
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[30px] font-bold uppercase tracking-tight text-white leading-snug">
            {title.split('\n').map((line, idx) => (
              <span key={idx} className="block md:whitespace-nowrap">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="flex-shrink-0 w-full sm:w-auto">
          <Button
            href={ctaHref}
            variant="primary"
            icon={true}
            className="w-full sm:w-auto shadow-lg"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
}
