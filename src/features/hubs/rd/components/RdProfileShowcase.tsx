'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { rdContent } from '@/content/units/rd';
import { Button } from '@/components/common/Button';

export function RdProfileShowcase() {
  const { profile } = rdContent;

  return (
    <div className="w-full rounded-xl bg-[#F8FAFC] border border-gray-200 p-8 sm:p-10 md:p-12 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* Cột trái (4/12): Mockup bìa tài liệu PDF 3D nghiêng nhẹ */}
        <div className="md:col-span-4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, rotate: -2, y: 15 }}
            whileInView={{ opacity: 1, rotate: -2, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-48 sm:w-52 aspect-[1/1.414] bg-white rounded-md shadow-2xl border border-gray-200 p-5 flex flex-col justify-between overflow-hidden transform hover:rotate-0 transition-transform duration-500"
            style={{
              boxShadow: '0 20px 35px -10px rgba(2, 132, 199, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.08)',
            }}
          >
            {/* Gáy sách giả lập hiệu ứng 3D */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-gray-200 via-gray-100 to-transparent pointer-events-none" />

            {/* Header bìa */}
            <div className="relative z-10 pt-2">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="font-bold text-base tracking-widest text-gray-900 font-sans">
                  FNX<span className="text-[#0284C7]">-RD</span>
                </span>
              </div>
              <div className="w-8 h-[2px] bg-[#0284C7] mb-3" />
              <p className="text-[9px] uppercase tracking-wider text-gray-400 font-medium font-sans">
                Research & Development
              </p>
            </div>

            {/* Giữa bìa: Họa tiết vector công nghệ nhẹ */}
            <div className="relative z-10 my-auto py-4 flex flex-col items-center opacity-30">
              <div className="w-16 h-16 rounded-full border border-dashed border-[#0284C7] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#0284C7]/20" />
              </div>
            </div>

            {/* Footer bìa */}
            <div className="relative z-10 border-t border-gray-100 pt-3">
              <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider block mb-0.5">
                HỒ SƠ NĂNG LỰC
              </span>
              <span className="text-[8px] text-gray-500 font-mono block">
                NĂM 2026
              </span>
            </div>
          </motion.div>
        </div>

        {/* Cột phải (8/12): Tiêu đề, Mô tả và Nút CTA yêu cầu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="md:col-span-8 flex flex-col justify-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-gray-900 leading-snug mb-4">
            {profile.title}
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 max-w-xl">
            {profile.description}
          </p>

          <div>
            <Button
              href={profile.ctaHref}
              variant="primary"
              icon={true}
              className="w-full sm:w-auto shadow-md"
            >
              {profile.ctaText}
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
