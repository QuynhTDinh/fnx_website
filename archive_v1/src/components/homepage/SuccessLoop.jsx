import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SuccessLoop() {
  const containerRef = useRef(null);
  
  // Track scroll inside this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to a rotation angle
  // When scrolling past, the wheel spins fast
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const loopNodes = [
    { title: "Khách hàng đạt kết quả", icon: "M5 13l4 4L19 7" },
    { title: "Gia tăng niềm tin", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
    { title: "Hệ sinh thái mở rộng", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
    { title: "Năng lực tăng lên", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Giải pháp tốt hơn", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  ];

  return (
    <section ref={containerRef} className="w-full bg-surface-chrome py-32 px-4 relative overflow-hidden flex flex-col items-center">
      
      {/* Headings */}
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-fnx-navy mb-6 uppercase tracking-tight">
          Vòng lặp <span className="text-fnx-gold-dark">Thành công</span>
        </h2>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
          Động cơ phát triển vĩnh cửu của FNX. Thành công của khách hàng hôm nay là dữ liệu và nguồn lực để giải quyết bài toán lớn hơn vào ngày mai.
        </p>
      </div>

      {/* The Flywheel */}
      <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
        
        {/* Static Base Ring */}
        <div className="absolute inset-0 rounded-full border border-slate-300 bg-white/30 shadow-[inset_0_0_100px_rgba(148,163,184,0.1)]"></div>
        
        {/* Dynamic Rotating Ring */}
        <motion.div 
          style={{ rotate: rotation }} 
          className="absolute inset-0"
        >
          {/* Dash ring */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(200,154,61,0.4)" strokeWidth="1" strokeDasharray="2 4" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(21,60,138,0.1)" strokeWidth="0.5" />
          </svg>

          {/* Nodes placed on the ring */}
          {loopNodes.map((node, i) => {
            const angle = (i * (360 / loopNodes.length)) * (Math.PI / 180);
            // r = 48% (almost outer edge)
            const x = 50 + 48 * Math.cos(angle);
            const y = 50 + 48 * Math.sin(angle);

            return (
              <div 
                key={i}
                className="absolute w-16 h-16 -ml-8 -mt-8 flex items-center justify-center rounded-sm bg-white border border-fnx-navy/30 shadow-[0_0_15px_rgba(21,60,138,0.1)]"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {/* Counter-rotate the icon so it stays upright */}
                <motion.div style={{ rotate: useTransform(rotation, r => -r) }}>
                  <svg className="w-6 h-6 text-fnx-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={node.icon} />
                  </svg>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Labels positioned around the wheel (Static) */}
        <div className="absolute inset-0 pointer-events-none">
          {loopNodes.map((node, i) => {
            const angle = (i * (360 / loopNodes.length)) * (Math.PI / 180);
            // Move labels further out
            const x = 50 + 65 * Math.cos(angle);
            const y = 50 + 65 * Math.sin(angle);

            // Alignment tweaks based on position
            let alignClass = "text-center -translate-x-1/2 -translate-y-1/2";
            if (x < 30) alignClass = "text-right -translate-x-full -translate-y-1/2 pr-4";
            if (x > 70) alignClass = "text-left translate-y-[-50%] pl-4";

            return (
              <div 
                key={i}
                className={`absolute w-40 ${alignClass}`}
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span className="text-fnx-navy font-heading font-bold text-sm tracking-wide">{node.title}</span>
              </div>
            );
          })}
        </div>

        {/* Center Core */}
        <div className="relative z-10 w-48 h-48 rounded-sm border border-fnx-navy/30 bg-white/90 backdrop-blur-xl flex items-center justify-center shadow-lg">
          <div className="text-center">
            <span className="text-gray-500 font-sans font-bold text-xs tracking-widest uppercase block mb-1">Customer</span>
            <span className="text-fnx-navy font-sans text-xl font-bold uppercase tracking-widest block">Success</span>
          </div>
        </div>

      </div>

      {/* Bottom CTA Element */}
      <div className="mt-24 relative z-10">
        <button className="px-8 py-4 bg-fnx-gold-dark hover:bg-fnx-navy text-white font-tech font-bold tracking-widest uppercase transition-colors duration-300 shadow-lg rounded-sm">
          Khởi đầu một bài toán mới
        </button>
      </div>

    </section>
  );
}
