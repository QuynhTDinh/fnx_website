import React from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { Button } from '@/components/common/Button';
import { ArrowLeft, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#0C1927] min-h-screen text-white flex flex-col justify-between">
      <SiteHeader transparentOnTop={false} />

      <main className="flex-grow flex items-center justify-center py-28 px-4 text-center">
        <div className="max-w-md mx-auto">
          <span className="text-xs uppercase font-semibold tracking-widest text-fnx-gold-300 block mb-2">
            LỖI 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Không tìm thấy trang
          </h1>
          <p className="text-sm md:text-base text-fnx-silver mb-8 leading-relaxed">
            Đường dẫn bạn yêu cầu không tồn tại, đã bị gỡ bỏ hoặc tạm thời không khả dụng.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/" variant="primary" icon={<ArrowLeft className="w-4 h-4 ml-2" />}>
              Về trang chủ
            </Button>
            <Button href="/engage" variant="outline-white" icon={<Mail className="w-4 h-4 ml-2" />}>
              Liên hệ FNX
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
