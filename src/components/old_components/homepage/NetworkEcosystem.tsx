// @ts-nocheck
"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';

const logoFNX = '/assets/logo-fnx-1.png';

const innerNodesData = [
  { id: 'fnx-rd', title: 'FNX RD', desc: 'TT Nghiên cứu R&D-ĐMST', startAngle: 0, radiusX: 28, radiusY: 14, size: 140, image: '/images/partners/logo-fnx-rd.png', isInner: true },
  { id: 'fnx-sc', title: 'FNX SC', desc: 'TT Chuỗi cung ứng', startAngle: 120, radiusX: 28, radiusY: 14, size: 140, image: '/images/partners/logo-fnx-sc.png', isInner: true },
  { id: 'fnx-m', title: 'FNX M', desc: 'TT Sản xuất', startAngle: 240, radiusX: 28, radiusY: 14, size: 140, image: '/images/partners/FNX_M.png', isInner: true },
];

const outerNodesData = [
  { id: 'vasi', title: 'VASI', desc: 'Hiệp hội CNHT Việt Nam', startAngle: 0, radiusX: 46, radiusY: 28, size: 150, image: '/images/partners/logo_vasis.png', isInner: false },
  { id: 'xlbm', title: 'BAN XLBM', desc: 'Ban Xử lý bề mặt VASI', startAngle: 51.4, radiusX: 46, radiusY: 28, size: 150, image: '/images/partners/ban-xlbm.png', isInner: false },
  { id: 'chem', title: 'HÓA - KHSS', desc: 'Trường Hóa & Khoa học Sự sống', startAngle: 102.8, radiusX: 46, radiusY: 28, size: 150, image: '/images/partners/SCLC.png', isInner: false },
  { id: 'vast', title: 'VAST', desc: 'Viện Hàn Lâm Khoa học & CN', startAngle: 154.2, radiusX: 46, radiusY: 28, size: 150, image: '/images/partners/logo-vast.jpg', isInner: false },
  { id: 'cres', title: 'TNMT ĐHQGHN', desc: 'Viện Tài nguyên Môi trường', startAngle: 205.7, radiusX: 46, radiusY: 28, size: 150, image: '/images/partners/logo-cres.png', isInner: false },
  { id: 'hust', title: 'HUST', desc: 'Đại Học Bách Khoa Hà Nội', startAngle: 257.1, radiusX: 46, radiusY: 28, size: 150, image: '/images/partners/logo-hust.png', isInner: false },
  { id: 'vinuni', title: 'VIN UNI', desc: 'Trường Đại học VinUni', startAngle: 308.5, radiusX: 46, radiusY: 28, size: 150, image: '/images/partners/logo-vinuni.png', isInner: false },
];

const ConnectingLine = ({ node, rotation, reverse = false }) => {
  const lineRef = React.useRef(null);
  
  useAnimationFrame(() => {
    if (!lineRef.current) return;
    const r = rotation.get();
    const currentRot = reverse ? -r : r;
    const x2 = 50 + node.radiusX * Math.cos(node.startAngle * (Math.PI / 180) + currentRot);
    const y2 = 50 + node.radiusY * Math.sin(node.startAngle * (Math.PI / 180) + currentRot);
    
    lineRef.current.setAttribute('x2', `${x2}%`);
    lineRef.current.setAttribute('y2', `${y2}%`);
  });
  
  return (
    <line 
      ref={lineRef}
      x1="50%" y1="50%" 
      stroke="rgba(255, 255, 255, 0.15)" 
      strokeWidth="1.5" 
      strokeDasharray="4 4"
    />
  );
};

const OrbitNode = ({ node, rotation, isHovered, activeNodeId, onHover, onLeave, reverse = false }) => {
  // Inner orbit quay ngược chiều kim đồng hồ, Outer quay thuận chiều (hoặc tùy thuộc `reverse`)
  const currentRotation = useTransform(rotation, r => reverse ? -r : r);

  // Tính toán vị trí X, Y (hình elip)
  const x = useTransform(currentRotation, r => 50 + node.radiusX * Math.cos(node.startAngle * (Math.PI / 180) + r));
  const y = useTransform(currentRotation, r => 50 + node.radiusY * Math.sin(node.startAngle * (Math.PI / 180) + r));

  const leftPerc = useTransform(x, val => `${val}%`);
  const topPerc = useTransform(y, val => `${val}%`);
  
  const isActive = activeNodeId === node.id;
  const isDimmed = isHovered && !isActive;

  return (
    <motion.div
      className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ${isDimmed ? 'opacity-20 scale-90' : 'opacity-100 scale-100'}`}
      style={{ left: leftPerc, top: topPerc, zIndex: isActive ? 50 : 10 }}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={onLeave}
    >
      <div 
        className={`relative flex items-center justify-center p-2 md:p-3 shadow-lg transition-all duration-300 border bg-white ${node.isInner ? 'rounded-full' : 'rounded-2xl'} ${isActive ? 'scale-110 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.6)]' : 'border-white/20 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]'}`} 
        style={{ width: node.size, height: node.size }}
      >
        {node.image ? (
          <img src={node.image} alt={node.title} className={`object-contain drop-shadow-sm ${node.isInner ? 'w-full h-full scale-125 md:scale-150' : (node.id === 'xlbm' ? 'w-full h-full scale-[1.7] rounded-lg' : 'w-[85%] h-[85%] rounded-lg')}`} />
        ) : (
          <span 
            className="text-center font-bold text-[#1a2332] uppercase break-words px-1"
            style={{ 
              fontFamily: 'var(--font-tech), Orbitron, sans-serif',
              fontSize: node.size > 90 ? '0.75rem' : '0.7rem',
              lineHeight: '1.2'
            }}
          >
            {node.title}
          </span>
        )}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 p-3 bg-[#080C16]/95 backdrop-blur-md border border-cyan-800 rounded-lg pointer-events-none shadow-2xl flex flex-col items-center text-center"
      >
        <span className="text-cyan-400 font-bold text-xs tracking-wide mb-1" style={{ fontFamily: 'var(--font-tech), Orbitron, sans-serif' }}>{node.title}</span>
        <p className="text-cyan-50 text-[10px] leading-relaxed font-medium">{node.desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default function NetworkEcosystem() {
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Custom rotation value
  const rotation = useMotionValue(0);

  // Animation frame to incrementally spin the orbit unless hovered
  useAnimationFrame((time, delta) => {
    if (!isHovered) {
      // 0.0002 radian per ms for a smooth, slow rotation
      rotation.set(rotation.get() + delta * 0.0002);
    }
  });

  return (
    <section className="relative w-full h-[120vh] min-h-[800px] bg-[#0E1629] overflow-hidden flex flex-col items-center py-24">
      {/* Background overlay that darkens when a node is active */}
      <div 
        className={`absolute inset-0 bg-[#060913]/85 transition-opacity duration-700 pointer-events-none z-0 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="absolute inset-0 max-w-[1400px] mx-auto w-full h-full pointer-events-none">
        
        {/* Title */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-20 w-full max-w-2xl px-4 pointer-events-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-wide">Mạng lưới Vận hành</h2>
          <p className="text-cyan-500/80 font-bold text-lg uppercase tracking-[0.2em] mb-4">Connect & Connect Ecosystem</p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            FNX đóng vai trò là hạt nhân trung tâm, thu hút và điều phối sức mạnh của các tổ chức, viện nghiên cứu, trường đại học và hiệp hội vào một quỹ đạo giá trị duy nhất.
          </p>
        </div>

        {/* Connecting Lines for Inner Orbit */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {innerNodesData.map(node => (
            <ConnectingLine key={`line-${node.id}`} node={node} rotation={rotation} reverse={false} />
          ))}
        </svg>

        {/* Central FNX Hub */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto">
          <div className="relative flex items-center justify-center">
            {/* Core Pulse */}
            <div className={`absolute inset-0 rounded-full bg-fnx-gold-dark/30 animate-ping transition-opacity duration-500 scale-[2] ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            <img src={logoFNX} alt="FNX Group Logo" className="h-10 md:h-16 w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          </div>
        </div>

        {/* Orbit Lines for Visual Polish */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[56%] h-[28%] border border-white/10 rounded-[50%] pointer-events-none z-0 hidden md:block"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] h-[56%] border border-white/10 rounded-[50%] pointer-events-none z-0 hidden md:block"></div>

        {/* Inner Orbit Nodes */}
        <div className="absolute inset-0 pointer-events-auto">
          {innerNodesData.map(node => (
            <OrbitNode
              key={node.id}
              node={node}
              rotation={rotation}
              isHovered={isHovered}
              activeNodeId={activeNodeId}
              onHover={(id) => { setActiveNodeId(id); setIsHovered(true); }}
              onLeave={() => { setActiveNodeId(null); setIsHovered(false); }}
              reverse={false}
            />
          ))}
        </div>

        {/* Outer Orbit Nodes */}
        <div className="absolute inset-0 pointer-events-auto">
          {outerNodesData.map(node => (
            <OrbitNode
              key={node.id}
              node={node}
              rotation={rotation}
              isHovered={isHovered}
              activeNodeId={activeNodeId}
              onHover={(id) => { setActiveNodeId(id); setIsHovered(true); }}
              onLeave={() => { setActiveNodeId(null); setIsHovered(false); }}
              reverse={true} // Vòng ngoài quay ngược chiều
            />
          ))}
        </div>

      </div>
    </section>
  );
}
