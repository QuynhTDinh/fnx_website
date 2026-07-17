"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const bentoItems = {
  group: {
    id: "group",
    title: "FNX GROUP",
    subtitle: "TỔNG HÀNH DINH ĐIỀU PHỐI",
    desc: "Điều phối toàn bộ chuỗi giá trị và thiết lập tiêu chuẩn cho hệ sinh thái công nghiệp.",
    logo: "/assets/logo-fnx-1.png",
    link: "/"
  },
  rd: {
    id: "rd",
    title: "FNX-RD",
    subtitle: "NGHIÊN CỨU & ĐỔI MỚI",
    desc: "Nghiên cứu, phát triển công nghệ và xây dựng giải pháp.",
    logo: "/images/partners/logo-fnx-rd.png",
    link: "/hubs/rd"
  },
  sc: {
    id: "sc",
    title: "FNX-SC",
    subtitle: "MẠNG LƯỚI CUNG ỨNG TOÀN CẦU",
    desc: "Kết nối chuỗi cung ứng và nguồn lực toàn cầu.",
    logo: "/images/partners/logo-fnx-sc.png",
    link: "/hubs/sc"
  },
  m: {
    id: "m",
    title: "FNX-M",
    subtitle: "SẢN XUẤT & TRIỂN KHAI",
    desc: "Triển khai sản xuất, vận hành và chuyển giao.",
    logo: "/images/partners/FNX_M.png",
    link: "/hubs/m"
  },
  vasi_main: {
    id: "vasi_main",
    title: "VASI",
    subtitle: "HIỆP HỘI CNHT VIỆT NAM",
    desc: "Hiệp hội Công nghiệp hỗ trợ Việt Nam.",
    logo: "/images/partners/logo_vasis.png",
    link: "#",
    isAffiliate: true
  },
  vasi_xlbm: {
    id: "vasi_xlbm",
    title: "BAN XỬ LÝ BỀ MẶT",
    subtitle: "CHUYÊN MÔN CÔNG NGHIỆP",
    desc: "Trực thuộc Hiệp hội Công nghiệp hỗ trợ Việt Nam.",
    logo: "/images/partners/ban-xlbm.png",
    link: "/affiliate/xlbm",
    isAffiliate: true
  },
  truong_hoa: {
    id: "truong_hoa",
    title: "TRƯỜNG HÓA - KHOA HỌC SỰ SỐNG",
    subtitle: "ĐẠI HỌC BÁCH KHOA HÀ NỘI",
    desc: "Nghiên cứu công nghệ hóa học & vật liệu.",
    logo: "/images/partners/SCLC.png",
    link: "#",
    isAffiliate: true
  },
  vien_han_lam: {
    id: "vien_han_lam",
    title: "VIỆN HÀN LÂM KHCN",
    subtitle: "NGHIÊN CỨU HỌC THUẬT",
    desc: "Nghiên cứu nền tảng và kiểm chứng khoa học.",
    logo: "/images/partners/logo-vast.jpg",
    link: "#",
    isAffiliate: true
  },
  vien_dhqghn: {
    id: "vien_dhqghn",
    title: "VIỆN TNMT ĐHQGHN",
    subtitle: "NGHIÊN CỨU HỌC THUẬT",
    desc: "Phát triển tiêu chuẩn bảo vệ môi trường công nghiệp.",
    logo: "/images/partners/logo-cres.png",
    link: "#",
    isAffiliate: true
  },
  vien_dhbkhn: {
    id: "vien_dhbkhn",
    title: "ĐẠI HỌC BÁCH KHOA HÀ NỘI",
    subtitle: "NGHIÊN CỨU HỌC THUẬT",
    desc: "Đào tạo và chuyển giao công nghệ kỹ thuật.",
    logo: "/images/partners/logo-hust.png",
    link: "#",
    isAffiliate: true
  }
};

const BentoCard = ({ item, className, delay = 0 }: { item: any, className?: string, delay?: number }) => (
  <Link href={item.link} className={`block relative rounded-xl overflow-hidden group cursor-pointer border border-[#2A3441] hover:border-fnx-gold-dark/50 shadow-md transition-all duration-500 ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className="w-full h-full bg-[#1A2230] backdrop-blur-md"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center p-2 md:p-4 opacity-50 group-hover:opacity-20 transition-all duration-700 ease-out overflow-hidden rounded-xl">
        {item.logo && (
          <img 
            src={item.logo} 
            alt={item.title} 
            className={`w-auto object-contain opacity-80 ${['rd', 'sc', 'm', 'vasi_xlbm'].includes(item.id) ? 'h-full scale-[2.5] md:scale-[3] opacity-30' : 'h-[80%] max-w-[90%]'}`} 
          />
        )}
      </div>
      
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">
        <div className="flex flex-col transform group-hover:-translate-y-2 transition-transform duration-300 ease-out">
          <h3 className="text-2xl md:text-2xl font-heading font-bold text-white tracking-widest leading-tight">
            {item.title}
          </h3>
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
            <div className="overflow-hidden">
              <div className="mt-2 text-fnx-gold-light text-[10px] md:text-xs font-sans font-bold tracking-widest mb-1 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {item.subtitle}
              </div>
              <p className="text-gray-300 font-medium text-xs md:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
);

export default function Solutions() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col justify-center py-12 md:py-16 bg-surface-lab border-t border-black/5">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-fnx-navy tracking-tight uppercase">KIẾN TRÚC <span className="text-fnx-gold-dark">HỆ SINH THÁI</span></h2>
      </div>

      <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* TOP ROW: Core Ecosystem */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Left: Command Center */}
          <div className="md:col-span-2">
            <BentoCard item={bentoItems.group} className="h-[300px] md:h-[420px]" delay={0} />
          </div>

          {/* Right: Value Chain Sequence */}
          <div className="md:col-span-1 flex flex-col gap-4 md:gap-6 relative">
            
            {/* The Vertical Light Flow */}
            <div className="absolute left-[-11px] md:left-[-15px] top-10 bottom-10 w-[2px] bg-fnx-navy/10 hidden md:block">
              <motion.div 
                className="absolute top-0 w-full h-32 bg-gradient-to-b from-transparent via-fnx-gold-dark to-transparent"
                initial={{ top: '-10%', opacity: 0 }}
                animate={{ 
                  top: isInView ? ['-10%', '110%'] : '-10%',
                  opacity: isInView ? [0, 1, 1, 0] : 0
                }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
                style={{ filter: 'drop-shadow(0 0 10px rgba(200,154,61,0.5))' }}
              />
            </div>

            <BentoCard item={bentoItems.rd} className="h-[120px] md:h-[124px]" delay={0.2} />
            <div className="hidden md:flex absolute left-[-23px] top-[62px] w-4 h-4 rounded-sm border-2 border-fnx-gold-dark bg-white z-10 items-center justify-center">
               <div className="w-1.5 h-1.5 bg-fnx-gold-dark rounded-sm"></div>
            </div>

            <BentoCard item={bentoItems.sc} className="h-[120px] md:h-[124px]" delay={0.4} />
            <div className="hidden md:flex absolute left-[-23px] top-[210px] w-4 h-4 rounded-sm border-2 border-fnx-gold-dark bg-white z-10 items-center justify-center">
               <div className="w-1.5 h-1.5 bg-fnx-gold-dark rounded-sm"></div>
            </div>

            <BentoCard item={bentoItems.m} className="h-[120px] md:h-[124px]" delay={0.6} />
            <div className="hidden md:flex absolute left-[-23px] top-[358px] w-4 h-4 rounded-sm border-2 border-fnx-gold-dark bg-white z-10 items-center justify-center">
               <div className="w-1.5 h-1.5 bg-fnx-gold-dark rounded-sm"></div>
            </div>

          </div>
        </div>

        {/* BOTTOM ROW: Independent Affiliates & Academic */}
        <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <BentoCard item={bentoItems.vasi_main} className="h-[180px]" delay={0.8} />
          <BentoCard item={bentoItems.vasi_xlbm} className="h-[180px]" delay={0.9} />
          <BentoCard item={bentoItems.truong_hoa} className="h-[180px]" delay={1.0} />
          <BentoCard item={bentoItems.vien_han_lam} className="h-[180px]" delay={1.1} />
          <BentoCard item={bentoItems.vien_dhqghn} className="h-[180px]" delay={1.2} />
          <BentoCard item={bentoItems.vien_dhbkhn} className="h-[180px]" delay={1.3} />
        </div>

      </div>
    </section>
  );
}
