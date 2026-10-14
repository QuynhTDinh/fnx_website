'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { ChevronRight, Loader2 } from 'lucide-react';
import { ContactInfoCard } from './ContactInfoCard';
import { EngageForm } from './EngageForm';

function EngageInner() {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] pt-28 md:pt-36 pb-20 text-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs md:text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Trang chủ
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-semibold">Liên hệ</span>
        </nav>

        {/* Tiêu đề trang H1 */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#132949] leading-tight mb-3">
            Kết nối với chúng tôi
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            Sẵn sàng đồng hành cùng sự tăng trưởng của bạn
          </p>
        </div>

        {/* Lưới 2 cột: Trái (5/12) - Thông tin liên hệ, Phải (7/12) - Form gửi yêu cầu */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Cột trái (Desktop 5/12, Mobile order-2 xuống dưới) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ContactInfoCard />
          </div>

          {/* Cột phải (Desktop 7/12, Mobile order-1 lên trên) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <EngageForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export function EngageContent() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-screen bg-[#F8FAFC] flex items-center justify-center pt-28">
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Đang tải thông tin liên hệ...</span>
          </div>
        </div>
      }
    >
      <EngageInner />
    </Suspense>
  );
}
