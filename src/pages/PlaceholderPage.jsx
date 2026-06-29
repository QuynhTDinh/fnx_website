import React from 'react';
import { motion } from 'framer-motion';

export default function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full text-center border border-white/5 bg-[#0A1017] p-12 md:p-16 rounded-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-fnx-gold-dark/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
            <div className="w-16 h-16 rounded-full border border-fnx-gold-dark/30 border-dashed animate-[spin_3s_linear_infinite] mx-auto mb-8 flex items-center justify-center">
                <div className="w-2 h-2 bg-fnx-gold-light rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-widest mb-4 uppercase">{title}</h1>
            <p className="text-fnx-silver text-lg">Phân hệ đang trong quá trình đồng bộ dữ liệu.<br/>Vui lòng truy cập lại sau.</p>
            <div className="mt-12 inline-block border border-fnx-gold-dark/30 px-6 py-2 rounded">
                <p className="text-fnx-gold-light font-mono text-xs animate-pulse tracking-widest">STATUS: PROCESSING_</p>
            </div>
        </div>
      </motion.div>
    </div>
  );
}
