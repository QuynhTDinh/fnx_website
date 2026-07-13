import React from 'react';
import Hero from '@/features/home/components/Hero';
import Journey from '@/components/old_components/homepage/Journey';
import NetworkEcosystem from '@/components/old_components/homepage/NetworkEcosystem';
import StandardIndex from '@/components/old_components/homepage/StandardIndex';
import SuccessLoop from '@/components/old_components/homepage/SuccessLoop';
import GlobalClients from '@/components/old_components/GlobalClients';
import Ecosystem from '@/components/old_components/Ecosystem';
import Pillars from '@/components/old_components/Pillars';

export default function Home() {
  return (
    <div className="w-full bg-fnx-dark min-h-screen">
      {/* SECTION 01: HERO */}
      <Hero />
      
      {/* SECTION 02: HÀNH TRÌNH BÀI TOÁN */}
      <Journey />

      {/* SECTION 03: HỆ SINH THÁI NETWORK */}
      <NetworkEcosystem />

      {/* SECTION 04: TIÊU CHUẨN FNX */}
      <StandardIndex />

      {/* SECTION 06: CHUỖI GIÁ TRỊ (Business Ecosystem) */}
      <Ecosystem />

      {/* SECTION 05: VÒNG LẶP THÀNH CÔNG (Flywheel) */}
      <SuccessLoop />

      {/* SECTION ĐỐI TÁC KHÁCH HÀNG CHẠY NGANG */}
      <GlobalClients />

    </div>
  );
}
