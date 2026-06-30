import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Separate component for scattered nodes
const ScatterNode = ({ node, scrollYProgress }) => {
  const rad = node.angle * (Math.PI / 180);
  const targetX = Math.cos(rad) * node.distance;
  const targetY = Math.sin(rad) * node.distance;
  
  // Use explicit string values with 'px' to avoid any Framer Motion interpolation bugs
  const x = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.3, 0.6, 0.7, 1], 
    ["0px", "0px", `${targetX}px`, `${targetX}px`, "0px", "0px"]
  );
  
  const y = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.3, 0.6, 0.7, 1], 
    ["0px", "0px", `${targetY}px`, `${targetY}px`, "0px", "0px"]
  );

  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.25, 0.6, 0.65, 1], 
    [0, 0, 1, 1, 0, 0]
  );

  return (
    <motion.div
      style={{ x, y, opacity }}
      className="absolute flex items-center justify-center px-4 py-2 rounded-full border border-white/20 bg-black/80 backdrop-blur-md whitespace-nowrap z-30"
    >
      <div className="w-2 h-2 rounded-full bg-fnx-silver mr-2 shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
      <span className="text-fnx-silver text-sm font-sans tracking-wide">{node.label}</span>
    </motion.div>
  );
};

export default function Journey() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text Opacities
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25, 1], [1, 1, 1, 0, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.45, 0.5, 1], [0, 0, 1, 1, 0, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.65, 0.7, 1], [0, 0, 1, 1, 0, 0]);
  const text4Opacity = useTransform(scrollYProgress, [0, 0.65, 0.75, 1], [0, 0, 1, 1]);

  // Center Node (Problem)
  const problemScale = useTransform(scrollYProgress, [0, 0.15, 0.2, 1], [1, 1, 0, 0]);
  const problemOpacity = useTransform(scrollYProgress, [0, 0.15, 0.2, 1], [1, 1, 0, 0]);

  // Lines connecting nodes
  const linesOpacity = useTransform(scrollYProgress, [0, 0.35, 0.45, 0.6, 0.65, 1], [0, 0, 1, 1, 0, 0]);

  // Final Solution Node
  const solutionScale = useTransform(scrollYProgress, [0, 0.65, 0.75, 1], [0, 0, 1, 1]);
  const solutionOpacity = useTransform(scrollYProgress, [0, 0.65, 0.75, 1], [0, 0, 1, 1]);

  const scatterNodes = [
    { label: "Material", angle: 0, distance: 220 },
    { label: "Process", angle: 30, distance: 280 },
    { label: "Chemical", angle: 60, distance: 190 },
    { label: "Factory", angle: 90, distance: 260 },
    { label: "Expert", angle: 120, distance: 160 },
    { label: "Standard", angle: 150, distance: 270 },
    { label: "Technology", angle: 180, distance: 200 },
    { label: "Regulation", angle: 210, distance: 260 },
    { label: "Cost", angle: 240, distance: 180 },
    { label: "Logistics", angle: 270, distance: 240 },
    { label: "QA/QC", angle: 300, distance: 210 },
    { label: "Environment", angle: 330, distance: 280 },
  ];

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#05080C]">
      {/* Sticky container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-start pt-[10vh]">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(211,163,66,0.05),transparent_70%)] pointer-events-none z-0"></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        {/* --- TEXT CONTENT --- */}
        <div className="relative h-[20vh] w-full flex items-center justify-center z-20 px-4 pointer-events-none text-center">
          
          <motion.div style={{ opacity: text1Opacity }} className="absolute">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">Khách hàng nhìn thấy Vấn đề</h2>
            <p className="text-fnx-silver text-xl">Ví dụ: Xử lý nước thải vượt chuẩn.</p>
          </motion.div>

          <motion.div style={{ opacity: text2Opacity }} className="absolute">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-fnx-gold-light mb-4">Nhưng một bài toán công nghiệp...</h2>
            <p className="text-fnx-silver text-xl">...không bao giờ là một bài toán đơn lẻ. FNX nhìn thấy Nguyên nhân.</p>
          </motion.div>

          <motion.div style={{ opacity: text3Opacity }} className="absolute">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">Kết nối mọi nguồn lực</h2>
            <p className="text-fnx-silver text-xl">FNX nhìn thấy toàn bộ hệ thống để đồng bộ chuỗi giá trị.</p>
          </motion.div>

          <motion.div style={{ opacity: text4Opacity }} className="absolute">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">Tạo ra Một Lời Giải Duy Nhất</h2>
            <p className="text-fnx-gold-light text-xl font-bold uppercase tracking-widest mt-4">Đây chính là Solution Thinking.</p>
          </motion.div>

        </div>

        {/* --- VISUALS --- */}
        <div className="relative flex-1 w-full flex items-center justify-center pb-[5vh] z-10">
          <div className="relative w-[600px] h-[600px] flex items-center justify-center transform scale-75 md:scale-100">
          
            {/* Phase 0: Problem Node */}
            <motion.div 
              style={{ scale: problemScale, opacity: problemOpacity }}
              className="absolute flex items-center justify-center w-48 h-48 rounded-full border border-red-500/50 bg-red-500/10 shadow-[0_0_50px_rgba(239,68,68,0.2)] z-30"
            >
              <span className="text-red-400 font-sans font-bold text-center leading-tight">Water Quality<br/>Problem</span>
            </motion.div>

            {/* Phase 1, 2 & 3: Scattered Nodes */}
            {scatterNodes.map((node, i) => (
              <ScatterNode 
                key={i} 
                node={node} 
                scrollYProgress={scrollYProgress} 
              />
            ))}

            {/* Phase 2: Connecting Lines (SVG overlay) */}
            <motion.svg 
              style={{ opacity: linesOpacity }}
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
            >
              {scatterNodes.map((node, i) => {
                const rad = node.angle * (Math.PI / 180);
                const endX = 300 + Math.cos(rad) * node.distance;
                const endY = 300 + Math.sin(rad) * node.distance;

                const nextNode = scatterNodes[(i + 1) % scatterNodes.length];
                const nextRad = nextNode.angle * (Math.PI / 180);
                const nextX = 300 + Math.cos(nextRad) * nextNode.distance;
                const nextY = 300 + Math.sin(nextRad) * nextNode.distance;

                return (
                  <g key={i}>
                    <line x1="300" y1="300" x2={endX} y2={endY} stroke="rgba(211,163,66,0.4)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1={endX} y1={endY} x2={nextX} y2={nextY} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  </g>
                );
              })}
              
              <circle cx="300" cy="300" r="30" fill="rgba(211,163,66,0.1)" stroke="#D3A342" strokeWidth="2" />
              <text x="300" y="305" fill="#D3A342" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FNX</text>
            </motion.svg>

            {/* Phase 3: Final Solution Node */}
            <motion.div 
              style={{ scale: solutionScale, opacity: solutionOpacity }}
              className="absolute flex flex-col items-center justify-center w-64 h-64 rounded-3xl border border-fnx-gold-light bg-[#05080C] shadow-[0_0_80px_rgba(211,163,66,0.4)] overflow-hidden z-40"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(211,163,66,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[pulse_2s_ease-in-out_infinite]"></div>
              <div className="text-center relative z-10 p-6">
                <svg className="w-12 h-12 text-fnx-gold-light mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
                <h3 className="text-white font-sans font-bold text-2xl uppercase tracking-widest leading-tight">Integrated<br/>Solution</h3>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
