'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FnxSC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    { title: "Thương mại Hóa chất", desc: "Cung cấp hóa chất xử lý bề mặt chất lượng cao từ các nhà sản xuất hàng đầu toàn cầu." },
    { title: "Vật tư Dự án", desc: "Cung ứng thiết bị và vật tư chuyên dụng cho các dự án xây dựng và bảo trì công nghiệp." },
    { title: "Bảo trì Hệ thống", desc: "Cung cấp giải pháp bảo trì, bảo dưỡng hệ thống dây chuyền sản xuất định kỳ." }
  ];

  return (
    <div className="w-full bg-fnx-dark pt-32 pb-20 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Hub Terminal (Hero) */}
        <div className="relative rounded-[2rem] bg-fnx-matrix p-12 md:p-24 overflow-hidden border border-white/5 mb-24 group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(211,163,66,0.1),transparent_50%)] group-hover:opacity-100 opacity-50 transition-opacity duration-1000"></div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white tracking-widest mb-4">FNX-SC</h1>
            <h2 className="text-fnx-gold-light text-xl md:text-2xl font-sans tracking-widest mb-8 uppercase">Trung tâm Thương mại & Cung ứng</h2>
            <p className="text-fnx-silver text-lg md:text-xl leading-relaxed border-l-2 border-fnx-gold-dark pl-6">
              Đảm bảo dòng chảy nguyên vật liệu liền mạch, tối ưu hóa chuỗi cung ứng cho toàn bộ hệ sinh thái công nghiệp.
            </p>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-32">
          <h3 className="text-3xl font-sans font-bold text-white tracking-widest mb-12">NĂNG LỰC CỐT LÕI</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0A1017] p-10 rounded-2xl border border-white/5 hover:border-white/20 transition-colors"
              >
                <div className="text-fnx-gold-dark font-sans font-bold text-sm mb-4">PHÂN HỆ 0{i+1}</div>
                <h4 className="text-xl font-bold text-white mb-4">{cap.title}</h4>
                <p className="text-fnx-silver text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ecosystem Sync */}
        <div className="bg-[#0C141C] border border-fnx-gold-dark/20 rounded-2xl p-12 relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-64 h-64 bg-fnx-gold-dark/5 rounded-full blur-3xl group-hover:bg-fnx-gold-dark/10 transition-colors duration-1000"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h4 className="text-fnx-gold-light font-sans tracking-widest text-sm uppercase mb-2">Tích hợp Hệ sinh thái</h4>
              <p className="text-white font-bold text-2xl">Trạng thái: Hoạt động 100%</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex flex-col items-end">
                <span className="text-fnx-silver text-xs mb-1 uppercase font-sans">Giao tiếp Lõi</span>
                <span className="text-green-400 font-mono text-sm animate-pulse">KẾT NỐI_</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}