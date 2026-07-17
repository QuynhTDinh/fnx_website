'use client';

import React from 'react';

export default function SecurityPage() {
  return (
    <div className="w-full min-h-screen bg-[#0F172A] text-white pt-40 pb-24 px-4 md:px-8">
      <div className="max-w-[800px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6 font-heading">
          Bảo Mật Hệ Thống
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Thông tin về các chuẩn mực an toàn và bảo mật công nghiệp áp dụng tại FNX.
          Nội dung chi tiết đang được cập nhật.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto opacity-30"></div>
      </div>
    </div>
  );
}
