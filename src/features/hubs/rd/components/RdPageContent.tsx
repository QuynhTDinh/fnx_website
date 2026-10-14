'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { flags } from '@/content/flags';
import { rdContent } from '@/content/units/rd';
import { RdHero } from './RdHero';
import { RdIntro } from './RdIntro';
import { RdProfileShowcase } from './RdProfileShowcase';
import { UnitAccordion } from '@/components/common/UnitAccordion';
import { ExpertsSection } from '@/components/common/ExpertsSection';
import { CtaBanner } from '@/components/common/CtaBanner';
import { ChevronRight, Search, Microscope, GitMerge, Rocket, BarChart3, Cpu } from 'lucide-react';

export function RdPageContent() {
  // Trạng thái cho legacy section cũ (nếu bật lại bằng flags.rd.legacySections)
  const [activeCapability, setActiveCapability] = useState('research');
  const [showComingSoon, setShowComingSoon] = useState(false);

  const capabilities = {
    research: {
      title: 'Nghiên cứu Khoa học & Đổi mới sáng tạo',
      desc: 'Làm chủ công nghệ lõi CN Hỗ trợ VN, kết nối mạng lưới chuyên gia học thuật (ĐHBK HN, Viện Hàn lâm, Viện TNMT...), tiếp nhận chuyển giao công nghệ.',
      solutions: ['Công nghệ lõi', 'Chuyển giao công nghệ'],
    },
    consulting: {
      title: 'Tư vấn & Triển khai Dự án',
      desc: 'Đồng hành cùng Chủ đầu tư (tư vấn chuẩn bị, thiết kế, quản lý dự án, tổ chức triển khai, tối ưu sản xuất...).',
      solutions: ['Quản lý dự án', 'Tối ưu sản xuất'],
    },
    digital_talent: {
      title: 'Nhân lực số',
      desc: 'Nơi nhận định, định hướng, nuôi dưỡng và phát triển cho nguồn nhân lực chất lượng cao với hệ sinh thái các sản phẩm số theo triết lý và tư duy cốt lõi của FNX',
      solutions: ['CO² platform', 'CO²-PIM', 'CO²-CSF', 'CO²-CCS'],
    },
  };

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen font-sans">
      {/* ========================================================================= */}
      {/* SPEC 03 — CẤU TRÚC 5 KHỐI CHÍNH THỨC CỦA TRANG FNX-RD                      */}
      {/* ========================================================================= */}

      {/* R1: HERO — Ảnh Lab, Tiêu đề H1, Mô tả & Nút CTA liên hệ */}
      <RdHero />

      {/* R2: GIỚI THIỆU FNX-RD — Bố cục 7/12 & 5/12, Nút cuộn xuống danh mục */}
      <RdIntro />

      {/* R3: SẢN PHẨM & DỊCH VỤ — Accordion 3 Nhóm 11 Mục, Deep-link theo Anchor */}
      <section
        id={rdContent.catalog.id}
        className="w-full py-20 md:py-24 bg-[#F8FAFC] text-gray-900 border-b border-gray-200"
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          {/* Header Section */}
          <div className="mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-gray-900 leading-snug mb-3">
              {rdContent.catalog.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {rdContent.catalog.description}
            </p>
          </div>

          {/* Component Accordion */}
          <UnitAccordion groups={rdContent.catalog.groups} themeColor="#0284C7" unit="rd" />
        </div>
      </section>

      {/* R3.5: ĐỘI NGŨ CHUYÊN GIA — Spec 07 */}
      <ExpertsSection unit="rd" />

      {/* R4: HỒ SƠ NĂNG LỰC — Khối Mời Nhận Profile PDF & Link /engage */}
      <section className="w-full py-20 md:py-24 bg-white text-gray-900 border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <RdProfileShowcase />
        </div>
      </section>

      {/* R5: BANNER LIÊN HỆ — CTA Cuối Trang /engage?unit=rd */}
      <section className="w-full py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <CtaBanner
            title={rdContent.ctaBanner.title}
            ctaText={rdContent.ctaBanner.ctaText}
            ctaHref={rdContent.ctaBanner.ctaHref}
            themeColor="#0284C7"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION CŨ TẠM ẨN BẰNG CỜ flags.rd.legacySections (GIỮ 100% CODE THEO SPEC) */}
      {/* ========================================================================= */}
      {flags.rd.legacySections && (
        <div className="border-t-4 border-red-500 bg-gray-50/50">
          <div className="p-4 bg-yellow-100 text-yellow-800 text-xs text-center font-mono">
            [LEGACY SECTIONS - KÍCH HOẠT KHI flags.rd.legacySections = true]
          </div>

          {/* LEGACY 02. CAPABILITY SECTION (The Network) */}
          <section className="py-32 px-4 md:px-8 border-b border-gray-200 relative bg-gray-50/50">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fnx-sky/5 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="max-w-[1200px] mx-auto relative z-10">
              <h3 className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-16 flex items-center gap-4 animate-pulse">
                <span className="w-8 h-[1px] bg-gray-500"></span>
                Năng lực chuyên môn
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {Object.entries(capabilities).map(([key, cap]) => (
                    <div
                      key={key}
                      onMouseEnter={() => setActiveCapability(key)}
                      onClick={() => setActiveCapability(key)}
                      className={`group p-6 md:p-8 cursor-pointer transition-all duration-500 border-l-4 rounded-xl ${
                        activeCapability === key
                          ? 'bg-fnx-sky border-fnx-sky text-white shadow-md'
                          : 'border-transparent hover:bg-white/60'
                      }`}
                    >
                      <h4
                        className={`text-2xl md:text-3xl transition-colors duration-300 font-bold ${
                          activeCapability === key
                            ? 'text-white'
                            : 'text-gray-400 group-hover:text-fnx-sky'
                        }`}
                      >
                        {cap.title}
                      </h4>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-7 bg-fnx-sky text-white p-8 md:p-12 border border-fnx-sky/20 shadow-lg flex flex-col justify-center min-h-[400px] rounded-2xl relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
                  <motion.div
                    key={activeCapability}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <h4 className="text-3xl text-white font-bold mb-6">
                      {capabilities[activeCapability as keyof typeof capabilities].title}
                    </h4>
                    <p className="text-lg text-gray-100 leading-relaxed mb-12">
                      {capabilities[activeCapability as keyof typeof capabilities].desc}
                    </p>

                    <div className="mt-8">
                      <span className="block text-xs uppercase tracking-widest text-white/70 font-bold mb-4 font-sans">
                        Sản phẩm & Giải pháp
                      </span>
                      <div className="flex flex-wrap gap-2 relative">
                        {capabilities[activeCapability as keyof typeof capabilities].solutions.map(
                          (sol) => {
                            if (sol === 'CO² platform') {
                              return (
                                <div key={sol} className="relative z-20">
                                  <button
                                    onClick={() => {
                                      setShowComingSoon(true);
                                      setTimeout(() => setShowComingSoon(false), 4000);
                                    }}
                                    className="relative flex items-center gap-3 px-6 py-2.5 bg-[#080F12] text-white rounded-full font-sans font-bold text-sm tracking-wide shadow-2xl hover:scale-105 hover:bg-[#121A25] transition-all duration-300 border border-white/20 group cursor-pointer"
                                  >
                                    <span className="relative z-10">{sol}</span>
                                    <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white" />
                                  </button>
                                  {showComingSoon && (
                                    <motion.div
                                      initial={{ opacity: 0, y: 15 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="absolute bottom-full left-0 mb-4 w-72 bg-[#080F12]/95 text-white p-5 rounded-xl shadow-2xl z-50"
                                    >
                                      <h5 className="font-bold text-base mb-2 uppercase">Sắp Ra Mắt</h5>
                                      <p className="text-sm text-white/80">
                                        Nền tảng công nghệ đang trong giai đoạn hoàn thiện cuối cùng.
                                      </p>
                                    </motion.div>
                                  )}
                                </div>
                              );
                            }
                            return (
                              <span
                                key={sol}
                                className="text-sm text-fnx-sky bg-white/90 px-4 py-2 rounded-full font-sans font-bold shadow-sm"
                              >
                                {sol}
                              </span>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* LEGACY 03. SOLUTION SECTION (The Timeline) */}
          <section className="py-32 px-4 md:px-8 border-b border-gray-200 overflow-hidden">
            <div className="max-w-[1200px] mx-auto">
              <h3 className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-16 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-500"></span>
                Phương pháp Giải quyết
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {[
                  { step: '01', title: 'Vấn đề', desc: 'Nhận diện rào cản kỹ thuật' },
                  { step: '02', title: 'Chẩn đoán', desc: 'Đánh giá lõi công nghệ hiện tại' },
                  { step: '03', title: 'Khung giải pháp', desc: 'Thiết lập phương pháp luận' },
                  { step: '04', title: 'Thực thi', desc: 'Triển khai tích hợp vào hệ thống' },
                  { step: '05', title: 'Kết quả', desc: 'Đo lường OEE và tối ưu hóa' },
                ].map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 p-6 rounded-2xl">
                    <div className="text-fnx-sky font-mono text-xl font-bold mb-4">{item.step}.</div>
                    <h4 className="text-xl text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* LEGACY 04. FRAMEWORK SECTION (The Methodology) */}
          <section className="py-32 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
            <div className="max-w-[1200px] mx-auto">
              <h3 className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-16 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-500"></span>
                Khung Vận hành Công nghệ (FNX Tech Framework)
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                {[
                  { icon: <Search className="w-6 h-6" />, label: 'Khám phá' },
                  { icon: <Microscope className="w-6 h-6" />, label: 'Phân tích' },
                  { icon: <GitMerge className="w-6 h-6" />, label: 'Kết nối' },
                  { icon: <Rocket className="w-6 h-6" />, label: 'Triển khai' },
                  { icon: <BarChart3 className="w-6 h-6" />, label: 'Tối ưu' },
                ].map((node) => (
                  <div key={node.label} className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 bg-white">
                      {node.icon}
                    </div>
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-600">
                      {node.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* LEGACY 05. EVIDENCE SECTION (The Metrics) */}
          <section className="py-32 px-4 md:px-8 border-b border-gray-200">
            <div className="max-w-[1200px] mx-auto">
              <h3 className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-16 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-500"></span>
                Bảo chứng Thực tế
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                {[
                  { value: '48+', label: 'Dự án Triển khai' },
                  { value: '12', label: 'Ngành Công nghiệp' },
                  { value: '300+', label: 'Chuyên gia Mạng lưới' },
                  { value: '25', label: 'Lĩnh vực Năng lực' },
                ].map((stat, i) => (
                  <div key={i} className="border-l border-gray-200 pl-6">
                    <div className="text-5xl md:text-7xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* LEGACY 07. CALL TO ACTION */}
          <section className="py-40 px-4 md:px-8 relative overflow-hidden bg-white">
            <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
              <h2 className="text-4xl md:text-6xl text-gray-900 mb-12">
                Có một bài toán kỹ thuật <br />
                chưa thể giải quyết?
              </h2>
              <button className="bg-gray-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-fnx-sky transition-all duration-300 flex items-center gap-3 shadow-lg">
                Trò chuyện với Chuyên gia
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
