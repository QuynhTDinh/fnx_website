import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Journey() {
  const containerRef = useRef(null);
  
  // Track scroll progress within this 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // PHASES
  // 0.0 - 0.2: Start, single problem node
  // 0.2 - 0.4: Explode into many nodes
  // 0.4 - 0.6: Connect lines
  // 0.6 - 0.8: Converge into Solution
  // 0.8 - 1.0: End state hold

  // Text Opacities
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.75, 0.8], [0, 1, 1, 0]);
  const text4Opacity = useTransform(scrollYProgress, [0.8, 0.85, 1, 1], [0, 1, 1, 1]);

  // Center Node (Problem)
  const problemScale = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const problemOpacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);

  // Scattered Nodes
  // We'll generate 12 nodes spreading out from center
  const nodesOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.7, 0.8], [0, 1, 1, 0]);
  
  // Lines connecting nodes
  const linesOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.7, 0.8], [0, 1, 1, 0]);

  // Final Solution Node
  const solutionScale = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const solutionOpacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);

  // Data for the 12 scattered nodes (angles and distances)
  const scatterNodes = [
    { label: "Material", angle: 0, distance: 200 },
    { label: "Process", angle: 30, distance: 280 },
    { label: "Chemical", angle: 60, distance: 180 },
    { label: "Factory", angle: 90, distance: 250 },
    { label: "Expert", angle: 120, distance: 150 },
    { label: "Standard", angle: 150, distance: 270 },
    { label: "Technology", angle: 180, distance: 190 },
    { label: "Regulation", angle: 210, distance: 260 },
    { label: "Cost", angle: 240, distance: 170 },
    { label: "Logistics", angle: 270, distance: 230 },
    { label: "QA/QC", angle: 300, distance: 210 },
    { label: "Environment", angle: 330, distance: 290 },
  ];

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#05080C]">
      {/* Sticky container that stays on screen while user scrolls 400vh */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-start pt-[10vh]">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(211,163,66,0.05),transparent_70%)] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

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
        <div className="relative flex-1 w-full flex items-center justify-center pb-[5vh]">
          <div className="relative w-[600px] h-[600px] flex items-center justify-center transform scale-75 md:scale-100">
          
          {/* Phase 0: Problem Node */}
          <motion.div 
            style={{ scale: problemScale, opacity: problemOpacity }}
            className="absolute flex items-center justify-center w-48 h-48 rounded-full border border-red-500/50 bg-red-500/10 shadow-[0_0_50px_rgba(239,68,68,0.2)]"
          >
            <span className="text-red-400 font-sans font-bold text-center leading-tight">Water Quality<br/>Problem</span>
          </motion.div>

          {/* Phase 1 & 2: Scattered Nodes */}
          {scatterNodes.map((node, i) => {
            const rad = node.angle * (Math.PI / 180);
            
            // X and Y distance mapping from center (0) to outer edge
            const x = useTransform(scrollYProgress, [0.15, 0.3], [0, Math.cos(rad) * node.distance]);
            const y = useTransform(scrollYProgress, [0.15, 0.3], [0, Math.sin(rad) * node.distance]);

            // For phase 3, they get pulled back to center
            const finalX = useTransform(scrollYProgress, [0.7, 0.8], [x.get(), 0]);
            const finalY = useTransform(scrollYProgress, [0.7, 0.8], [y.get(), 0]);

            return (
              <motion.div
                key={i}
                style={{ 
                  x: useTransform(scrollYProgress, v => v > 0.7 ? finalX.get() : x.get()), 
                  y: useTransform(scrollYProgress, v => v > 0.7 ? finalY.get() : y.get()), 
                  opacity: nodesOpacity 
                }}
                className="absolute flex items-center justify-center px-4 py-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-fnx-silver mr-2"></div>
                <span className="text-fnx-silver text-sm font-sans">{node.label}</span>
              </motion.div>
            );
          })}

          {/* Phase 2: Connecting Lines (SVG overlay) */}
          <motion.svg 
            style={{ opacity: linesOpacity }}
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            {scatterNodes.map((node, i) => {
              // Connect every node to the center (representing FNX core)
              const rad = node.angle * (Math.PI / 180);
              const endX = 300 + Math.cos(rad) * node.distance; // 300 is center of 600x600 container
              const endY = 300 + Math.sin(rad) * node.distance;

              // Connect to next node to form a web
              const nextNode = scatterNodes[(i + 1) % scatterNodes.length];
              const nextRad = nextNode.angle * (Math.PI / 180);
              const nextX = 300 + Math.cos(nextRad) * nextNode.distance;
              const nextY = 300 + Math.sin(nextRad) * nextNode.distance;

              return (
                <g key={i}>
                  <line x1="300" y1="300" x2={endX} y2={endY} stroke="rgba(211,163,66,0.3)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1={endX} y1={endY} x2={nextX} y2={nextY} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                </g>
              );
            })}
            
            {/* Center Core Hub during connections */}
            <circle cx="300" cy="300" r="40" fill="rgba(211,163,66,0.1)" stroke="#D3A342" strokeWidth="2" />
            <text x="300" y="305" fill="#D3A342" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FNX</text>
          </motion.svg>

          {/* Phase 3: Final Solution Node */}
          <motion.div 
            style={{ scale: solutionScale, opacity: solutionOpacity }}
            className="absolute flex items-center justify-center w-64 h-64 rounded-3xl border border-fnx-gold-light bg-fnx-gold-dark/20 shadow-[0_0_80px_rgba(211,163,66,0.4)] backdrop-blur-md overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-pulse"></div>
            <div className="text-center relative z-10">
              <svg className="w-12 h-12 text-fnx-gold-light mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              <h3 className="text-white font-sans font-bold text-2xl uppercase tracking-widest">Integrated<br/>Solution</h3>
            </div>
          </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
