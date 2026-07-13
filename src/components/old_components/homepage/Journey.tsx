// @ts-nocheck
'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

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

export default function Journey() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [phase, setPhase] = useState(0);

  // Use explicit state triggers based on scroll position. 
  // This completely eliminates any Framer Motion interpolation crashes
  // and guarantees the elements are unmounted when not needed.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setPhase(0);       // Phase 0: Problem
    } else if (latest >= 0.25 && latest < 0.75) {
      setPhase(1);       // Phase 1: Scattered Nodes & Network
    } else {
      setPhase(2);       // Phase 2: Integrated Solution
    }
  });

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-surface-metal">
      {/* Sticky container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-start pt-[10vh]">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,154,61,0.05),transparent_70%)] pointer-events-none z-0"></div>
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        {/* --- TEXT CONTENT --- */}
        <div className="relative h-[20vh] w-full flex items-center justify-center z-20 px-4 pointer-events-none text-center">
          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.div 
                key="text0" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }} 
                transition={{ duration: 0.4 }}
                className="absolute"
              >
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Khách hàng nhìn thấy vấn đề</h2>
                <p className="text-gray-400 text-xl">Ví dụ: Xử lý nước thải vượt chuẩn.</p>
              </motion.div>
            )}
            
            {phase === 1 && (
              <motion.div 
                key="text1" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }} 
                transition={{ duration: 0.4 }}
                className="absolute"
              >
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">FNX nhìn thấy toàn bộ hệ thống</h2>
                <p className="text-gray-400 text-xl">Kết nối mọi yếu tố để tìm ra nguyên nhân gốc rễ.</p>
              </motion.div>
            )}

            {phase === 2 && (
              <motion.div 
                key="text2" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }} 
                transition={{ duration: 0.4 }}
                className="absolute"
              >
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Tạo ra một giải pháp duy nhất</h2>
                <p className="text-fnx-gold-dark text-xl font-bold tracking-wide mt-4">Đây chính là Solution Thinking.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- VISUALS --- */}
        <div className="relative flex-1 w-full flex items-center justify-center pb-[5vh] z-10">
          <div className="relative w-[600px] h-[600px] flex items-center justify-center transform scale-75 md:scale-100">
          
            {/* Phase 0: Problem Node */}
            <AnimatePresence>
              {phase === 0 && (
                <motion.div 
                  key="problem"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute flex items-center justify-center w-48 h-48 rounded-full border border-red-500/50 bg-red-500/10 shadow-[0_0_50px_rgba(239,68,68,0.2)] z-30"
                >
                  <span className="text-red-400 font-sans font-bold text-center leading-tight">Water Quality<br/>Problem</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Phase 1: Scattered Nodes & Lines */}
            <AnimatePresence>
              {phase === 1 && scatterNodes.map((node, i) => {
                const rad = node.angle * (Math.PI / 180);
                const targetX = Math.round(Math.cos(rad) * node.distance);
                const targetY = Math.round(Math.sin(rad) * node.distance);

                return (
                  <motion.div
                    key={`node-${i}`}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    animate={{ x: targetX, y: targetY, opacity: 1, scale: 1 }}
                    exit={{ x: 0, y: 0, opacity: 0, scale: 0, transition: { type: "spring", stiffness: 250, damping: 25 } }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.03 }}
                    className="absolute flex items-center justify-center px-4 py-2 rounded-sm border border-fnx-gold-dark/30 bg-[#1A1A1A]/80 backdrop-blur-md whitespace-nowrap z-30"
                  >
                    <div className="w-2 h-2 rounded-sm bg-fnx-gold mr-2 shadow-[0_0_5px_rgba(200,154,61,0.5)]"></div>
                    <span className="text-gray-200 text-sm font-sans font-medium tracking-wide">{node.label}</span>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Phase 1: SVG Lines */}
            <AnimatePresence>
              {phase === 1 && (
                <motion.svg 
                  key="lines"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute inset-0 w-full h-full pointer-events-none z-20"
                >
                  {scatterNodes.map((node, i) => {
                    const rad = node.angle * (Math.PI / 180);
                    const endX = Math.round(300 + Math.cos(rad) * node.distance);
                    const endY = Math.round(300 + Math.sin(rad) * node.distance);

                    const nextNode = scatterNodes[(i + 1) % scatterNodes.length];
                    const nextRad = nextNode.angle * (Math.PI / 180);
                    const nextX = Math.round(300 + Math.cos(nextRad) * nextNode.distance);
                    const nextY = Math.round(300 + Math.sin(nextRad) * nextNode.distance);

                    return (
                      <g key={i}>
                        <line x1="300" y1="300" x2={endX} y2={endY} stroke="rgba(200,154,61,0.6)" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1={endX} y1={endY} x2={nextX} y2={nextY} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      </g>
                    );
                  })}
                  <rect x="270" y="270" width="60" height="60" fill="rgba(200,154,61,0.05)" stroke="#C89A3D" strokeWidth="1" rx="4" />
                  <text x="300" y="305" fill="#C89A3D" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FNX</text>
                </motion.svg>
              )}
            </AnimatePresence>

            {/* Phase 2: Final Solution Node */}
            <AnimatePresence>
              {phase === 2 && (
                <motion.div 
                  key="solution"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                  className="absolute flex flex-col items-center justify-center w-64 h-64 rounded-md border border-fnx-gold-dark bg-[#111111] overflow-hidden z-40"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(200,154,61,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[pulse_2s_ease-in-out_infinite]"></div>
                  <div className="text-center relative z-10 p-6">
                    <svg className="w-12 h-12 text-fnx-gold-dark mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                    <h3 className="text-white font-heading font-bold text-2xl uppercase tracking-widest leading-tight">Giải pháp<br/>Tổng thể</h3>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
