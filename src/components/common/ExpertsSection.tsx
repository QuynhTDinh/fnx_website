'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Expert, getExpertsByUnit, EXPERT_GROUPS } from '@/content/experts';
import { Button } from '@/components/common/Button';

interface ExpertsSectionProps {
  unit: 'rd' | 'sc';
  className?: string;
}

function ExpertCard({ expert, unit }: { expert: Expert; unit: 'rd' | 'sc' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      id={`cg-${expert.id}`}
      tabIndex={0}
      aria-label={expert.name}
      className="group relative bg-white border border-[#DCE3EC] rounded-xl overflow-hidden lg:overflow-visible transition-all duration-200 scroll-mt-28 flex flex-col focus-within:ring-2 focus-within:ring-[var(--theme-primary)] hover:border-[var(--theme-primary)]/40 hover:shadow-md"
    >
      {/* 1. Phần hiển thị sẵn (Default Card Content) */}
      <div className="p-5 pb-0 flex items-center">
        {expert.photo ? (
          <Image
            src={expert.photo}
            alt={expert.name}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-xs"
          />
        ) : (
          <div
            aria-hidden="true"
            className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold border-2 border-white shadow-xs bg-gradient-to-br from-[var(--theme-accent,#A7DEFD)] to-[var(--theme-bg-tint,#F7FBFE)] text-[var(--theme-primary,#0478B3)] select-none shrink-0"
          >
            {expert.ini}
          </div>
        )}
      </div>

      <div className="p-5 pt-3.5 flex flex-col gap-1.5 flex-1">
        <h3 className="text-lg font-semibold text-[#132949] leading-snug">
          {expert.name}
        </h3>
        <div className="text-sm text-gray-500 leading-snug">
          {expert.title}
        </div>
        <div className="text-sm text-gray-800 leading-snug mt-1">
          {expert.field}
        </div>

        {/* Tags nhóm */}
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {expert.groups.map((g) => (
            <span
              key={g}
              className="text-xs font-medium text-[var(--theme-primary)] bg-[var(--theme-bg-tint)] border border-[var(--theme-accent,#A7DEFD)] rounded-full px-2.5 py-0.5"
            >
              {EXPERT_GROUPS[g] || g}
            </span>
          ))}
        </div>

        {/* Mobile / Tablet Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="lg:hidden mt-3 self-start text-sm font-semibold text-[var(--theme-primary)] hover:underline cursor-pointer select-none"
        >
          {isOpen ? 'Thu gọn' : 'Xem thêm'}
        </button>
      </div>

      {/* 2. Phần hiển thị thêm (Desktop Hover/Focus Overlay & Mobile Accordion) */}
      <div
        className={`p-5 text-sm text-gray-700 leading-relaxed ${
          isOpen ? 'block border-t border-[#DCE3EC] bg-white' : 'hidden'
        } lg:block lg:absolute lg:top-[-1px] lg:left-[-1px] lg:right-[-1px] lg:min-h-[calc(100%+2px)] lg:bg-white lg:border lg:border-[var(--theme-primary)] lg:rounded-xl lg:shadow-2xl lg:opacity-0 lg:invisible lg:pointer-events-none group-hover:lg:opacity-100 group-hover:lg:visible group-hover:lg:pointer-events-auto group-focus-within:lg:opacity-100 group-focus-within:lg:visible group-focus-within:lg:pointer-events-auto group-hover:lg:translate-y-0 lg:translate-y-1.5 lg:transition-all lg:duration-200 lg:z-30`}
      >
        {expert.pending && (
          <span className="inline-block text-[11px] font-semibold text-[#A36426] bg-[#FDF4E7] rounded px-2 py-0.5 mb-2.5">
            Nội dung tạm
          </span>
        )}

        {/* Họ tên trên desktop overlay */}
        <h4 className="hidden lg:block text-base font-semibold text-[#132949] mb-2">
          {expert.name}
        </h4>

        {/* Bio */}
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          {expert.bio}
        </p>

        {/* Dự án / đề tài tiêu biểu */}
        {expert.highlights && expert.highlights.length > 0 && (
          <div className="mb-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[var(--theme-primary)] mb-1.5">
              Dự án / đề tài tiêu biểu
            </h5>
            <ul className="list-disc pl-4 space-y-1 text-xs text-gray-600">
              {expert.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Quote / Thông điệp */}
        {expert.quote && (
          <p className="border-l-3 border-[var(--theme-primary)] pl-3 italic text-xs text-gray-800 my-3">
            “{expert.quote}”
          </p>
        )}

        {/* CTA Link tới Form /engage */}
        <div className="pt-2">
          <Link
            href={`/engage?unit=${unit}&topic=chuyen-gia-${unit}&expert=${expert.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--theme-primary)] hover:underline"
          >
            Trao đổi với chuyên gia này →
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ExpertsSection({ unit, className = '' }: ExpertsSectionProps) {
  const experts = getExpertsByUnit(unit);

  if (experts.length === 0) {
    return null;
  }

  const isRd = unit === 'rd';
  const heading = isRd
    ? 'Chuyên gia đồng hành cùng FNX-RD'
    : 'Chuyên gia đồng hành cùng FNX-SC';
  const lead = isRd
    ? 'Đội ngũ chuyên gia nghiên cứu, kỹ thuật và quản trị trực tiếp tham gia các giải pháp của FNX-RD.'
    : 'Đội ngũ chuyên gia xử lý bề mặt và chuỗi cung ứng trực tiếp tham gia các giải pháp của FNX-SC.';
  const ctaText = isRd
    ? 'Trao đổi với chuyên gia FNX-RD'
    : 'Trao đổi với chuyên gia FNX-SC';
  const ctaHref = `/engage?unit=${unit}&topic=chuyen-gia-${unit}`;

  return (
    <section
      id="chuyen-gia"
      className={`relative w-full py-20 md:py-24 bg-[var(--theme-bg-tint,#F7FBFE)] border-t border-b border-[#DCE3EC] scroll-mt-24 ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <span className="block text-xs md:text-sm font-semibold tracking-wider uppercase text-[var(--theme-primary)] mb-2.5 font-mono">
            ĐỘI NGŨ CHUYÊN GIA
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#132949] leading-tight mb-3.5">
            {heading}
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
            {lead}
          </p>
        </div>

        {/* Lưới Thẻ Chuyên Gia (Responsive Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} unit={unit} />
          ))}
        </div>

        {/* CTA Button Cuối Section */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <Button
            href={ctaHref}
            variant="primary"
            icon={true}
            className="shadow-md"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
