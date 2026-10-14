'use client';

import React from 'react';
import { siteConfig } from '@/content/site';

export function ContactInfoCard() {
  const { company } = siteConfig;

  return (
    <div className="w-full bg-[#132949] text-white rounded-xl p-8 sm:p-10 md:p-12 shadow-lg flex flex-col justify-between h-full select-none border border-white/10">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
            Thông tin liên hệ
          </h2>
          <p className="text-sm text-white/80 leading-relaxed max-w-sm">
            Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 space-y-4 text-sm">
          <div>
            <span className="font-bold uppercase tracking-wider block text-white text-xs mb-1">
              Đơn vị chủ quản
            </span>
            <p className="text-white/90 font-medium">
              {company.fullName}
            </p>
          </div>

          <div>
            <span className="font-bold uppercase tracking-wider block text-white/70 text-xs mb-1">
              Địa chỉ trụ sở
            </span>
            <p className="text-white/90">
              {company.address}
            </p>
          </div>

          <div>
            <span className="font-bold uppercase tracking-wider block text-white/70 text-xs mb-1">
              Email liên hệ
            </span>
            <a
              href={`mailto:${company.email}`}
              className="text-white hover:underline transition-colors block font-medium"
            >
              {/* Kỹ thuật chống Cloudflare email obfuscation */}
              <span>{company.email}</span>
            </a>
          </div>

          <div>
            <span className="font-bold uppercase tracking-wider block text-white/70 text-xs mb-1">
              Hotline
            </span>
            <a
              href={`tel:${company.hotlineTel}`}
              className="text-white hover:underline transition-colors block font-bold text-base"
            >
              {company.hotlineDisplay}
            </a>
          </div>

          <div>
            <span className="font-bold uppercase tracking-wider block text-white/70 text-xs mb-1">
              Website chính thức
            </span>
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors block"
            >
              {company.website}
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 mt-8 border-t border-white/10 text-xs text-white/60">
        FNX Group · Nền tảng kết nối nguồn lực công nghiệp hàng đầu Việt Nam
      </div>
    </div>
  );
}
