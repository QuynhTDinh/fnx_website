'use client';

import React from 'react';

export default function CareersPage() {
  return (
    <div className="w-full min-h-screen bg-[#0F172A] text-white pt-40 pb-24 px-4 md:px-8">
      <div className="max-w-[800px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6 font-heading">
          Tuyển Dụng
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Gia nhập đội ngũ FNX để cùng kiến tạo tương lai của công nghiệp hỗ trợ. 
          Các vị trí tuyển dụng sẽ sớm được công bố.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto opacity-30"></div>
      </div>
    </div>
  );
}
