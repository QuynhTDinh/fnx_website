import React from 'react';
import Hero from '@/features/home/components/Hero';
import Journey from '@/components/old_components/homepage/Journey';
import NetworkEcosystem from '@/components/old_components/homepage/NetworkEcosystem';
import StandardIndex from '@/components/old_components/homepage/StandardIndex';
import SuccessLoop from '@/components/old_components/homepage/SuccessLoop';
import TrustWall from "@/features/home/components/v2/TrustWall";
import WhyFNX from "@/features/home/components/v2/WhyFNX";
import Capabilities from "@/features/home/components/v2/Capabilities";
import Solutions from "@/features/home/components/v2/Solutions";
import Industries from "@/features/home/components/v2/Industries";
import Experts from "@/features/home/components/v2/Experts";
import Pillars from '@/components/old_components/Pillars';

export default function Home() {
  return (
    <div className="w-full bg-fnx-dark min-h-screen">
      {/* SECTION 01: HERO */}
      <Hero />
      
      {/* SECTION 02: HÀNH TRÌNH BÀI TOÁN (Ẩn để đưa về Why FNX) */}
      {/* <Journey /> */}

      {/* SECTION 03: HỆ SINH THÁI NETWORK */}
      <NetworkEcosystem />

      {/* SECTION 04: TIÊU CHUẨN -> NÂNG CẤP THÀNH WHY FNX */}
      {/* <StandardIndex /> */}
      <WhyFNX />

      {/* SECTION 04.5: NĂNG LỰC CỐT LÕI (New) */}
      <Capabilities />

      {/* SECTION 06: DÒNG CHẢY GIÁ TRỊ (Nâng cấp từ Ecosystem) */}
      {/* <Ecosystem /> */}
      <Solutions />

      {/* SECTION 07: ỨNG DỤNG CÔNG NGHIỆP (New) */}
      {/* <Industries /> */}

      {/* SECTION 08: BẢO CHỨNG CHUYÊN MÔN (New) */}
      <Experts />

      {/* SECTION 05: VÒNG LẶP THÀNH CÔNG (Tạm ẩn cho Version 1.0) */}
      {/* <SuccessLoop /> */}

      {/* SECTION ĐỐI TÁC KHÁCH HÀNG (Nâng cấp thành Trust Wall) */}
      {/* <GlobalClients /> */}
      <TrustWall />

    </div>
  );
}
