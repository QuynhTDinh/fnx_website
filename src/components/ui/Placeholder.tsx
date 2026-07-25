import React from 'react';
import { motion } from 'framer-motion';

interface PlaceholderProps {
  title: string;
  subtitle?: string;
}

export default function Placeholder({ title, subtitle = 'Phân hệ đang trong quá trình nâng cấp' }: PlaceholderProps) {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-fnx-dark text-white px-4">
      <div className="relative border border-white/10 bg-[#0A1017] p-12 md:p-24 max-w-4xl w-full text-center overflow-hidden">
        {/* Decorative Corner Borders */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/50"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/50"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/50"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/50"></div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center space-x-3 mb-12">
          <div className="w-2 h-2 rounded-full bg-fnx-gold-light animate-pulse"></div>
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-fnx-gold-light">
            Trạng Thái: In Development
          </span>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="uppercase text-white mb-6"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-fnx-silver text-lg md:text-xl font-sans tracking-widest uppercase max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
        
        {/* Progress Bar Illusion */}
        <div className="w-full max-w-md mx-auto mt-16 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-fnx-gold-light/50 to-transparent"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
