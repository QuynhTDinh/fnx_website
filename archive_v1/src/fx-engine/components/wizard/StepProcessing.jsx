import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function StepProcessing({ statusText }) {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] animate-in fade-in zoom-in duration-500">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
        <div className="w-24 h-24 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center relative z-10 animate-bounce">
          <Sparkles className="w-10 h-10 text-blue-500 animate-pulse" />
        </div>
      </div>
      
      <h2 className="text-3xl font-black mt-8 mb-4">AI Đang Tổng Hợp...</h2>
      <p className="text-neutral-400 font-medium text-lg max-w-md text-center">
        {statusText || "Đang áp dụng chuẩn McKinsey và xây dựng bộ Slide cho bạn..."}
      </p>
      
      <div className="w-64 h-2 bg-neutral-900 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-1/2 animate-[pulse_2s_ease-in-out_infinite] origin-left"></div>
      </div>
    </div>
  );
}
