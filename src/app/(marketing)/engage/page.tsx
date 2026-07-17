'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EngagePage() {
  return (
    <div className="w-full min-h-screen bg-[#0F172A] text-white pt-40 pb-24 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6 font-heading">
            Kết Nối Với Chúng Tôi
          </h1>
          <p className="text-gray-400 text-lg">Khởi tạo hành trình tối ưu hóa mạng lưới công nghiệp của bạn cùng FNX.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1E293B] rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 blur-[100px] pointer-events-none"></div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10">Thông tin Liên hệ</h2>
            <div className="w-12 h-1 bg-white/20 mb-10 relative z-10"></div>
            
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <span className="text-emerald-400 font-bold mt-1">→</span>
                <div>
                  <span className="font-bold text-white block mb-1">Đơn vị chủ quản:</span>
                  <span className="text-gray-300">CÔNG TY CỔ PHẦN NGHIÊN CỨU PHÁT TRIỂN FNX</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-emerald-400 font-bold mt-1">→</span>
                <div>
                  <span className="font-bold text-white block mb-1">Địa chỉ:</span>
                  <span className="text-gray-300">173B Trường Chinh, Thanh Xuân, Hà Nội</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-emerald-400 font-bold mt-1">→</span>
                <div>
                  <span className="font-bold text-white block mb-1">Email:</span>
                  <span className="text-gray-300">info@fnx.vn</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-emerald-400 font-bold mt-1">→</span>
                <div>
                  <span className="font-bold text-white block mb-1">Hotline:</span>
                  <span className="text-gray-300">0898 291 618</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-emerald-400 font-bold mt-1">→</span>
                <div>
                  <span className="font-bold text-white block mb-1">Website:</span>
                  <span className="text-gray-300">fnx.vn</span>
                </div>
              </li>
            </ul>

            <div className="mt-16 pt-8 border-t border-white/10 relative z-10">
              <p className="text-gray-400 text-sm leading-relaxed">
                Đội ngũ chuyên gia của FNX luôn sẵn sàng tư vấn giải pháp kỹ thuật, tối ưu hóa chuỗi cung ứng và đồng hành cùng doanh nghiệp trên mọi chặng đường phát triển công nghiệp.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1E293B] rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden"
          >
             <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 relative z-10">Gửi Yêu cầu</h2>
             
             <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Tên tổ chức / Cá nhân" 
                    className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email liên hệ" 
                    className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Nội dung cần hỗ trợ..." 
                    rows={5}
                    className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold py-4 px-8 rounded-full transition-colors duration-300">
                  Gửi thông điệp
                </button>
             </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
