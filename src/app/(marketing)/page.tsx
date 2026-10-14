import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/features/home/components/Hero';
import NetworkEcosystem from '@/components/old_components/homepage/NetworkEcosystem';
import WhyFNX from '@/features/home/components/v2/WhyFNX';
import ChallengesSection from '@/features/home/components/ChallengesSection';
import AudienceSolutionsSection from '@/features/home/components/AudienceSolutionsSection';
import PartnershipSection from '@/features/home/components/PartnershipSection';
import TrustWall from '@/features/home/components/v2/TrustWall';

export const metadata: Metadata = {
  title: "FNX Group – Hệ sinh thái công nghiệp | Shaping surface, Shaping future",
  description: "FNX Group kết nối nghiên cứu, công nghệ, sản xuất và chuỗi cung ứng, mang lại giải pháp công nghiệp cho doanh nghiệp.",
  openGraph: {
    title: "FNX Group – Hệ sinh thái công nghiệp | Shaping surface, Shaping future",
    description: "FNX Group kết nối nghiên cứu, công nghệ, sản xuất và chuỗi cung ứng, mang lại giải pháp công nghiệp cho doanh nghiệp.",
    images: ["/fnx-og-1200x630.png"],
  },
};

export default function Home() {
  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      {/* S1: HERO — Video Vidyard & Slogan Orbitron, Nút CTA /engage */}
      <Hero />
      
      {/* S2: HỆ SINH THÁI CÔNG NGHIỆP — Sơ đồ 11 Logo 2 Quỹ đạo */}
      <NetworkEcosystem />

      {/* S3: TẦM NHÌN & SỨ MỆNH — 01 Sứ Mệnh, 02 Tầm Nhìn, 03 Triết Lý */}
      <WhyFNX />

      {/* S4: NHỮNG BÀI TOÁN CHÚNG TÔI HƯỚNG TỚI — Box Navy-800, 6 ô thách thức (không icon) */}
      <ChallengesSection />

      {/* S5: SẢN PHẨM & DỊCH VỤ — 5 Thẻ Khách Hàng định vị trực tiếp anchor sang RD/SC */}
      <AudienceSolutionsSection />

      {/* S6: KẾT NỐI HỢP TÁC — Box sáng 7/12 & 5/12 với CTA /engage?topic=hop-tac */}
      <PartnershipSection />

      {/* S7: MẠNG LƯỚI ĐỐI TÁC — Marquee 17 Logo & 9 Tên Doanh Nghiệp */}
      <TrustWall />

      {/* SECTION CŨ TẮT THEO flags.ts (KHÔNG XÓA CODE THEO SPEC 01 & 02) */}
      {/* <Journey /> */}
      {/* <StandardIndex /> */}
      {/* <Capabilities /> */}
      {/* <Solutions /> */}
      {/* <Industries /> */}
      {/* <Experts /> */}
      {/* <SuccessLoop /> */}
    </div>
  );
}
