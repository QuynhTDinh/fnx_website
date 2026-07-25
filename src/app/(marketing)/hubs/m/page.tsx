'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FnxM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    { title: "Gia công Bề mặt", desc: "Trực tiếp vận hành dây chuyền gia công, xử lý bề mặt chuyên sâu." },
    { title: "Quản lý Chất lượng", desc: "Đảm bảo chất lượng chế tạo và sản lượng đáp ứng khắt khe các tiêu chuẩn công nghiệp." },
    { title: "Dây chuyền Lắp ráp", desc: "Vận hành hệ thống dây chuyền lắp ráp hiện đại, chuẩn hóa quy trình sản xuất." }
  ];

  return (
    <div className="w-full bg-fnx-light-bg text-fnx-light-text pt-32 pb-20 min-h-screen font-sans selection:bg-fnx-orange selection:text-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Hub Terminal (Hero) */}
        <div className="relative rounded-[2rem] bg-gray-50 p-12 md:p-24 overflow-hidden border border-gray-200 mb-24 group shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,88,12,0.05),transparent_50%)] group-hover:opacity-100 opacity-50 transition-opacity duration-1000"></div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-7xl text-gray-900 tracking-widest mb-4">FNX-M</h1>
            <h2 className="text-fnx-orange text-xl md:text-2xl tracking-widest mb-8 uppercase">Trung tâm Sản xuất</h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed border-l-2 border-fnx-orange pl-6">
              Trái tim vận hành của hệ sinh thái. Biến công nghệ lõi thành những khối kim loại và bề mặt hoàn hảo nhất.
            </p>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-32">
          <h3 className="text-3xl text-gray-900 tracking-widest mb-12">NĂNG LỰC CỐT LÕI</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-fnx-orange/30 hover:shadow-md transition-all"
              >
                <div className="text-fnx-orange font-sans font-bold text-sm mb-4">PHÂN HỆ 0{i+1}</div>
                <h4 className="text-xl text-gray-900 mb-4">{cap.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ecosystem Sync */}
        <div className="bg-white border border-gray-200 rounded-2xl p-12 relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
          <div className="absolute right-0 top-0 w-64 h-64 bg-fnx-orange/5 rounded-full blur-3xl group-hover:bg-fnx-orange/10 transition-colors duration-1000"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h4 className="text-fnx-orange tracking-widest text-sm uppercase mb-2">Tích hợp Hệ sinh thái</h4>
              <p className="text-gray-900 font-bold text-2xl">Sản lượng: Tối đa</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex flex-col items-end">
                <span className="text-gray-500 text-xs mb-1 uppercase font-sans">Giao tiếp Lõi</span>
                <span className="text-fnx-orange font-mono text-sm animate-pulse">KẾT NỐI_</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}