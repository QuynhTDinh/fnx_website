'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function EngagePage() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] pt-24 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-fnx-navy/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fnx-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl text-fnx-navy tracking-tight mb-4 uppercase font-bold"
          >
            KẾT NỐI VỚI CHÚNG TÔI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl font-sans"
          >
            Sẵn sàng đồng hành cùng sự tăng trưởng của bạn
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl text-fnx-navy font-bold mb-8 tracking-wide">
                Thông tin Liên hệ
              </h2>
              
              <ul className="space-y-6 font-sans">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-fnx-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900">Đơn vị chủ quản:</span> <span className="text-gray-600">CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN FNX</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-fnx-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900">Địa chỉ:</span> <span className="text-gray-600">173B Trường Chinh, Thanh Xuân, Hà Nội</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-fnx-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900">Email:</span> <span className="text-gray-600">info@fnx.vn</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-fnx-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900">Hotline:</span> <span className="text-gray-600">0898 291 618</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-fnx-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900">Website:</span> <span className="text-gray-600">fnx.vn</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 text-gray-600 text-sm leading-relaxed font-sans">
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn trong việc triển khai giải pháp và tích hợp hệ thống hiện đại.
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 md:p-10"
          >
            <h2 className="text-2xl text-fnx-navy font-bold mb-8 tracking-wide">
              Gửi Yêu cầu
            </h2>
            
            <form className="space-y-6 flex flex-col font-sans" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Tên tổ chức / Cá nhân" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-fnx-navy focus:bg-white transition-colors"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email liên hệ" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-fnx-navy focus:bg-white transition-colors"
                  required
                />
              </div>
              <div>
                <textarea 
                  placeholder="Nội dung cần hỗ trợ..." 
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-fnx-navy focus:bg-white transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="mt-4 w-full md:w-auto px-8 py-4 bg-fnx-navy hover:bg-opacity-90 text-white font-bold rounded-lg transition-colors shadow-lg shadow-fnx-navy/20 flex items-center justify-center"
              >
                Gửi thông điệp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
