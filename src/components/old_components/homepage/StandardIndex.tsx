// @ts-nocheck
'use client';

import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function StandardIndex() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  
  return (
    <section ref={containerRef} className="w-full bg-surface-metal py-32 px-4 border-y border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border-[1px] border-white/10 border-dashed animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border-[1px] border-white/5 animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
            Thước đo <br/><span className="text-fnx-gold-dark">Công nghiệp</span>
          </h2>
          <p className="text-gray-400 text-xl mb-8 leading-relaxed">
            Đối với FNX, chất lượng không chỉ là một quy trình nội bộ. Chúng tôi biến tên tuổi của mình thành một <strong>tiêu chuẩn kiểm định</strong> khắt khe mà cả ngành tham chiếu.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
              <span className="text-fnx-gold-dark font-tech text-2xl font-bold">01</span>
              <div>
                <h4 className="text-gray-200 font-heading font-bold text-lg">Capability Measured</h4>
                <p className="text-gray-500 text-sm">Mọi năng lực đều được đo lường bằng dữ liệu thực tế.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
              <span className="text-fnx-gold-dark font-tech text-2xl font-bold">02</span>
              <div>
                <h4 className="text-gray-200 font-heading font-bold text-lg">FNX Index</h4>
                <p className="text-gray-500 text-sm">Hệ quy chiếu chuẩn xác cho mức độ hoàn thiện của hệ thống.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 pb-4">
              <span className="text-fnx-gold-dark font-tech text-2xl font-bold">03</span>
              <div>
                <h4 className="text-gray-200 font-heading font-bold text-lg">Authority Certified</h4>
                <p className="text-gray-500 text-sm">Sự bảo chứng danh giá nhất cho giải pháp.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: The Calibration System UI */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[500px] aspect-square rounded-full border border-white/10 bg-[#0B1120]/30 backdrop-blur-xl flex items-center justify-center">
            
            {/* The Dial Ticks */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle cx="50%" cy="50%" r="48%" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="20" strokeDasharray="4 8" />
              <motion.circle 
                cx="50%" cy="50%" r="48%" 
                fill="none" 
                stroke="#C89A3D" 
                strokeWidth="20" 
                strokeDasharray="4 8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isInView ? 0.82 : 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
              />
            </svg>

            {/* Inner Dashboard */}
            <div className="text-center relative z-10 flex flex-col items-center">
              <span className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-2 font-bold">Industry Standard</span>
              
              <div className="relative h-24 flex items-baseline justify-center overflow-hidden mb-2">
                <motion.span 
                  className="text-7xl font-tech font-bold text-white"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <CountUp to={82} play={isInView} />
                </motion.span>
                <span className="text-3xl text-fnx-gold-dark ml-2 font-tech">.9</span>
              </div>

              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: isInView ? 1 : 0.8, opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 2.5 }}
                className="mt-6 px-6 py-2 border border-fnx-gold-dark/50 bg-fnx-gold-dark/5 text-fnx-gold-dark font-bold uppercase tracking-widest text-sm rounded-sm"
              >
                FNX Certified
              </motion.div>
            </div>

            {/* Scanning Laser Line */}
            <motion.div 
              className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-fnx-gold-dark to-transparent"
              initial={{ top: '10%', opacity: 0 }}
              animate={{ 
                top: isInView ? ['10%', '90%', '50%'] : '10%',
                opacity: isInView ? [0, 1, 1, 0] : 0
              }}
              transition={{ duration: 2.5, times: [0, 0.4, 0.8, 1], ease: "easeInOut" }}
            />

          </div>
        </div>

      </div>
    </section>
  );
}

// Helper component for counting up numbers
const CountUp = ({ to, play }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!play) {
      setCount(0);
      return;
    }
    let start = 0;
    const duration = 2000;
    const increment = to / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [to, play]);

  return <>{count}</>;
};
