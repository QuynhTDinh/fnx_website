'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { flags } from '@/content/flags';
import { scContent } from '@/content/units/sc';
import { ScHero } from './ScHero';
import { ScIntro } from './ScIntro';
import { ScProfileShowcase } from './ScProfileShowcase';
import { UnitAccordion } from '@/components/common/UnitAccordion';
import { ExpertsSection } from '@/components/common/ExpertsSection';
import { CtaBanner } from '@/components/common/CtaBanner';
import { ChevronRight, Search, Microscope, GitMerge, Rocket, BarChart3, Box } from 'lucide-react';

export function ScPageContent() {
  // Trạng thái cho legacy section cũ (nếu bật lại bằng flags.sc.legacySections)
  const [activeCapability, setActiveCapability] = useState('surface');

  const capabilities = {
    surface: {
      title: 'Xử lý Bề mặt',
      desc: 'Phụ trách hoạt động thương mại mảng xử lý bề mặt do FNX-M sản xuất (Mạ chuyên sâu, Mạ thông dụng, Sơn ED). Hỗ trợ Tổ điều phối Ban XLBM VASI (Phát triển khách hàng, tư vấn, kết nối).',
      solutions: ['Mạ chuyên sâu', 'Mạ thông dụng', 'Sơn ED', 'Ban XLBM VASI'],
    },
    commercial: {
      title: 'Đại diện Thương mại',
      desc: 'Độc quyền sản phẩm FNX Group (Thanh ray trượt, Tay nâng khí nén, Topcoat). Đại diện Hãng (Điện cực, Phụ gia động cơ, Nước làm mát pin).',
      solutions: ['Thanh ray trượt', 'Tay nâng khí nén', 'Topcoat', 'Phụ gia động cơ', 'Nước làm mát pin'],
    },
    supply: {
      title: 'Thương mại & Cung ứng',
      desc: 'Cung ứng Hóa chất xây dựng & Gỗ công nghiệp; cung ứng cho ngành Hóa chất - Dầu khí và CN Hỗ trợ (Hóa chất nguyên liệu/cơ bản/công nghệ/xử lý nước).',
      solutions: ['Hóa chất xây dựng', 'Gỗ công nghiệp', 'Hóa chất dầu khí', 'Xử lý nước'],
    },
  };

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen font-sans">
      {/* ========================================================================= */}
      {/* SPEC 04 — CẤU TRÚC 5 KHỐI CHÍNH THỨC CỦA TRANG FNX-SC                      */}
      {/* ========================================================================= */}

      {/* C1: HERO — Ảnh Logistics / Chuỗi cung ứng, H1, Mô tả & Nút CTA liên hệ */}
      <ScHero />

      {/* C2: GIỚI THIỆU FNX-SC — Bố cục 7/12 & 5/12, Nút cuộn xuống danh mục */}
      <ScIntro />

      {/* C3: SẢN PHẨM & DỊCH VỤ — Accordion 3 Nhóm 15 Mục Thumbnail, Mở Sẵn Cả 3 */}
      <section
        id={scContent.catalog.id}
        className="w-full py-20 md:py-24 bg-[#F6FDFC] text-gray-900 border-b border-gray-200"
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          {/* Header Section */}
          <div className="mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-gray-900 leading-snug mb-3">
              {scContent.catalog.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {scContent.catalog.description}
            </p>
          </div>

          {/* Component Accordion Biến thể Thumbnail (mở sẵn cả 3 nhóm theo Spec 04) */}
          <UnitAccordion
            groups={scContent.catalog.groups}
            themeColor="#00756F"
            variant="thumbnail"
            defaultAllOpen={true}
            headerBgColor="#F6FDFC"
            itemWidthDesktop="md:w-[35%]"
            unit="sc"
          />
        </div>
      </section>

      {/* C3.5: ĐỘI NGŨ CHUYÊN GIA — Spec 07 */}
      <ExpertsSection unit="sc" />

      {/* C4: HỒ SƠ NĂNG LỰC — Khối Mời Nhận Profile PDF & Link /engage */}
      <section className="w-full py-20 md:py-24 bg-white text-gray-900 border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <ScProfileShowcase />
        </div>
      </section>

      {/* C5: BANNER LIÊN HỆ — CTA Cuối Trang /engage?unit=sc */}
      <section className="w-full py-16 md:py-24 bg-[#F6FDFC]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <CtaBanner
            title={scContent.ctaBanner.title}
            ctaText={scContent.ctaBanner.ctaText}
            ctaHref={scContent.ctaBanner.ctaHref}
            image={scContent.ctaBanner.image}
            themeColor="#00756F"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BẢO TỒN SECTION CŨ — ẨN THEO CỜ flags.sc.legacySections                    */}
      {/* ========================================================================= */}
      {flags.sc.legacySections && (
        <div className="border-t-4 border-dashed border-red-500/40 opacity-75 my-12">
          <div className="p-4 bg-red-50 text-red-700 text-xs font-mono font-bold uppercase tracking-widest text-center">
            [LEGACY SECTIONS PRESERVED — ONLY VISIBLE WHEN flags.sc.legacySections = true]
          </div>

          {/* 02. CAPABILITY SECTION (The Network) */}
          <section className="py-32 px-4 md:px-8 border-b border-gray-200 relative bg-gray-50/50">
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#00756F]/5 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="max-w-[1200px] mx-auto relative z-10">
              <h3 className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-16 flex items-center gap-4 animate-pulse">
                <span className="w-8 h-[1px] bg-gray-500"></span>
                Mảng hoạt động cốt lõi
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {Object.entries(capabilities).map(([key, cap]) => (
                    <div 
                      key={key}
                      onMouseEnter={() => setActiveCapability(key)}
                      onClick={() => setActiveCapability(key)}
                      className={`group p-6 md:p-8 cursor-pointer transition-all duration-500 border-l-4 rounded-xl ${activeCapability === key ? 'bg-[#00756F] border-[#00756F] text-white shadow-md' : 'border-transparent hover:bg-white/60'}`}
                    >
                      <h4 className={`text-2xl md:text-3xl transition-colors duration-300 font-bold ${activeCapability === key ? 'text-white' : 'text-gray-400 group-hover:text-[#00756F]'}`}>
                        {cap.title}
                      </h4>
                    </div>
                  ))}
                </div>
                
                <div className="lg:col-span-7 bg-[#00756F] text-white p-8 md:p-12 border border-[#00756F]/20 shadow-lg flex flex-col justify-center min-h-[400px] rounded-2xl relative overflow-hidden">
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
                      <span className="block text-xs uppercase tracking-widest text-white/70 font-bold mb-4 font-sans">Sản phẩm & Giải pháp</span>
                      <div className="flex flex-wrap gap-2">
                        {capabilities[activeCapability as keyof typeof capabilities].solutions.map(sol => (
                          <span key={sol} className="text-sm text-[#00756F] bg-white px-4 py-2 rounded-full font-sans font-bold shadow-sm">
                            {sol}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* 03. SOLUTION SECTION (The Timeline) */}
          <section className="py-32 px-4 md:px-8 border-b border-gray-200 overflow-hidden">
            <div className="max-w-[1200px] mx-auto">
              <h3 className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-16 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-500"></span>
                Phương pháp Giải quyết
              </h3>
              
              <div className="relative">
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -translate-y-1/2"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                  {[
                    { step: '01', title: 'Vấn đề', desc: 'Phát hiện điểm đứt gãy chuỗi cung ứng' },
                    { step: '02', title: 'Chẩn đoán', desc: 'Phân tích chi phí ẩn và năng lực đối tác' },
                    { step: '03', title: 'Khung giải pháp', desc: 'Thiết kế mạng lưới điều phối trung tâm' },
                    { step: '04', title: 'Thực thi', desc: 'Triển khai cung ứng và giám sát chất lượng' },
                    { step: '05', title: 'Kết quả', desc: 'Tối ưu hóa tổng chi phí và thời gian' },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white border border-gray-200 p-6 md:p-8 hover:shadow-md transition-shadow relative group rounded-2xl"
                    >
                      <div className="text-[#00756F] font-mono text-xl font-bold mb-4">{item.step}.</div>
                      <h4 className="text-xl text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 04. FRAMEWORK SECTION (The Methodology) */}
          <section className="py-32 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
            <div className="max-w-[1200px] mx-auto">
              <h3 className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-16 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-500"></span>
                Khung Vận hành Mạng lưới (FNX Supply Framework)
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                {[
                  { icon: <Search className="w-6 h-6" />, label: 'Khám phá' },
                  { icon: <Microscope className="w-6 h-6" />, label: 'Phân tích' },
                  { icon: <GitMerge className="w-6 h-6" />, label: 'Kết nối' },
                  { icon: <Rocket className="w-6 h-6" />, label: 'Triển khai' },
                  { icon: <BarChart3 className="w-6 h-6" />, label: 'Tối ưu' },
                ].map((node, i, arr) => (
                  <React.Fragment key={node.label}>
                    <div className="flex flex-col items-center gap-4 group">
                      <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 group-hover:bg-[#00756F] group-hover:text-white group-hover:border-[#00756F] transition-all duration-300 bg-white">
                        {node.icon}
                      </div>
                      <span className="text-sm font-bold tracking-widest uppercase text-gray-600 group-hover:text-[#00756F] transition-colors">{node.label}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    )}
                    {i < arr.length - 1 && (
                      <div className="block md:hidden h-8 w-[1px] bg-gray-300 my-2"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* 05. EVIDENCE SECTION (The Metrics & Trust Grid) */}
          <section className="py-32 px-4 md:px-8 border-b border-gray-200">
            <div className="max-w-[1200px] mx-auto">
              <h3 className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-16 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-500"></span>
                Bảo chứng Thực tế
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24">
                {[
                  { value: '150+', label: 'Nhà cung cấp' },
                  { value: '30+', label: 'Hãng Quốc tế' },
                  { value: '99%', label: 'Tỷ lệ đáp ứng' },
                  { value: '05', label: 'Trung tâm Kho bãi' },
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="border-l border-gray-200 pl-6"
                  >
                    <div className="text-5xl md:text-7xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 07. CALL TO ACTION CŨ */}
          <section className="py-40 px-4 md:px-8 relative overflow-hidden bg-white">
            <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
              <h2 className="text-4xl md:text-6xl text-gray-900 mb-12">
                Bạn đang mất bao nhiêu chi phí ẩn trong chuỗi cung ứng?
              </h2>
              
              <button className="group bg-gray-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#00756F] transition-all duration-300 flex items-center gap-3 shadow-lg">
                Trò chuyện với Chuyên gia
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
