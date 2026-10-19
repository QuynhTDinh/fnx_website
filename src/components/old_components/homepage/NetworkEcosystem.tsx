// @ts-nocheck
"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';

const logoFNX = '/assets/logo-fnx-1.png';

// Tọa độ bán kính theo %: tính toán chuẩn để không bao giờ tràn màn hình laptop 13" hay mobile
const ORBIT_CENTER_Y = 54; // Vị trí tâm trục xoay theo chiều dọc (%)

const innerNodesData = [
  { id: 'fnx-rd', title: 'FNX-RD', desc: 'TT Nghiên cứu R&D-ĐMST', startAngle: 0, radiusX: 20, radiusY: 10, isInner: true, image: '/images/partners/logo-fnx-rd.png' },
  { id: 'fnx-sc', title: 'FNX-SC', desc: 'TT Chuỗi cung ứng', startAngle: 120, radiusX: 20, radiusY: 10, isInner: true, image: '/images/partners/logo-fnx-sc.png' },
  { id: 'fnx-m', title: 'FNX-M', desc: 'TT Sản xuất', startAngle: 240, radiusX: 20, radiusY: 10, isInner: true, image: '/images/partners/FNX_M.png' },
];

const outerNodesData = [
  { id: 'vasi', title: 'VASI', desc: 'Hiệp hội CNHT Việt Nam', startAngle: 0, radiusX: 38, radiusY: 20, isInner: false, image: '/images/partners/logo_vasis.png' },
  { id: 'xlbm', title: 'BAN XLBM', desc: 'Ban Xử lý bề mặt VASI', startAngle: 51.4, radiusX: 38, radiusY: 20, isInner: false, image: '/images/partners/ban-xlbm.png' },
  { id: 'chem', title: 'HÓA - KHSS', desc: 'Trường Hóa & Khoa học Sự sống', startAngle: 102.8, radiusX: 38, radiusY: 20, isInner: false, image: '/images/partners/SCLC.png' },
  { id: 'vast', title: 'VAST', desc: 'Viện Hàn Lâm Khoa học & CN', startAngle: 154.2, radiusX: 38, radiusY: 20, isInner: false, image: '/images/partners/logo-vast.jpg' },
  { id: 'cres', title: 'TNMT ĐHQGHN', desc: 'Viện Tài nguyên Môi trường', startAngle: 205.7, radiusX: 38, radiusY: 20, isInner: false, image: '/images/partners/logo-cres.png' },
  { id: 'hust', title: 'HUST', desc: 'Đại Học Bách Khoa Hà Nội', startAngle: 257.1, radiusX: 38, radiusY: 20, isInner: false, image: '/images/partners/logo-hust.png' },
  { id: 'vinuni', title: 'VIN UNI', desc: 'Trường Đại học VinUni', startAngle: 308.5, radiusX: 38, radiusY: 20, isInner: false, image: '/images/partners/logo-vinuni.png' },
];

const ConnectingLine = ({ node, rotation, reverse = false }) => {
  const lineRef = React.useRef(null);
  
  useAnimationFrame(() => {
    if (!lineRef.current) return;
    const r = rotation.get();
    const currentRot = reverse ? -r : r;
    const x2 = 50 + node.radiusX * Math.cos(node.startAngle * (Math.PI / 180) + currentRot);
    const y2 = ORBIT_CENTER_Y + node.radiusY * Math.sin(node.startAngle * (Math.PI / 180) + currentRot);
    
    lineRef.current.setAttribute('x2', `${x2}%`);
    lineRef.current.setAttribute('y2', `${y2}%`);
  });
  
  return (
    <line 
      ref={lineRef}
      x1="50%" 
      y1={`${ORBIT_CENTER_Y}%`} 
      stroke="rgba(255, 255, 255, 0.15)" 
      strokeWidth="1.2" 
      strokeDasharray="4 4"
    />
  );
};

const OrbitNode = ({ node, rotation, isHovered, activeNodeId, onHover, onLeave, reverse = false }) => {
  const currentRotation = useTransform(rotation, r => reverse ? -r : r);

  // Tính toán vị trí X, Y (hình elip tỉ lệ vàng)
  const x = useTransform(currentRotation, r => 50 + node.radiusX * Math.cos(node.startAngle * (Math.PI / 180) + r));
  const y = useTransform(currentRotation, r => ORBIT_CENTER_Y + node.radiusY * Math.sin(node.startAngle * (Math.PI / 180) + r));

  const leftPerc = useTransform(x, val => `${val}%`);
  const topPerc = useTransform(y, val => `${val}%`);
  
  const isActive = activeNodeId === node.id;
  const isDimmed = isHovered && !isActive;

  return (
    <motion.div
      className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
        isDimmed ? 'opacity-25 scale-90' : 'opacity-100 scale-100'
      }`}
      style={{ left: leftPerc, top: topPerc, zIndex: isActive ? 50 : 10 }}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={onLeave}
      onClick={() => onHover(isActive ? null : node.id)}
    >
      {/* Node Container: kích thước linh hoạt responsive theo màn hình (không dùng fixed px to đùng) */}
      <div 
        className={`relative flex items-center justify-center p-1.5 sm:p-2 shadow-md transition-all duration-300 border bg-white ${
          node.isInner 
            ? 'w-13 h-13 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full' 
            : 'w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-xl sm:rounded-2xl'
        } ${
          isActive 
            ? 'scale-115 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.7)]' 
            : 'border-white/30 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]'
        }`}
      >
        {node.image ? (
          <img 
            src={node.image} 
            alt={node.title} 
            className={`object-contain ${
              node.isInner 
                ? 'w-full h-full scale-110 sm:scale-125' 
                : (node.id === 'xlbm' ? 'w-full h-full scale-[1.4] rounded-md sm:rounded-lg' : 'w-[85%] h-[85%] rounded-md sm:rounded-lg')
            }`} 
          />
        ) : (
          <span 
            className="text-center font-bold text-[#1a2332] uppercase break-words px-1 text-[10px] sm:text-xs"
            style={{ 
              fontFamily: 'var(--font-tech), Orbitron, sans-serif',
              lineHeight: '1.2'
            }}
          >
            {node.title}
          </span>
        )}
      </div>

      {/* Tooltip khi click/hover */}
      <motion.div 
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-40 sm:w-48 p-2 sm:p-2.5 bg-[#080C16]/95 backdrop-blur-md border border-cyan-700/80 rounded-lg pointer-events-none shadow-2xl flex flex-col items-center text-center z-50 origin-top"
      >
        <span className="text-cyan-400 font-bold text-[11px] sm:text-xs tracking-wide mb-0.5" style={{ fontFamily: 'var(--font-tech), Orbitron, sans-serif' }}>
          {node.title}
        </span>
        <p className="text-cyan-50 text-[10px] leading-relaxed font-medium">
          {node.desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function NetworkEcosystem() {
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotation = useMotionValue(0);

  // Vận tốc xoay nhẹ nhàng êm ái
  useAnimationFrame((time, delta) => {
    if (!isHovered) {
      rotation.set(rotation.get() + delta * 0.0002);
    }
  });

  return (
    <section 
      id="ecosystem" 
      className="relative w-full h-[620px] sm:h-[680px] lg:h-[88vh] lg:min-h-[620px] lg:max-h-[760px] bg-[#0E1629] overflow-hidden flex flex-col items-center"
    >
      {/* Background overlay làm mờ khi focus node */}
      <div 
        className={`absolute inset-0 bg-[#060913]/85 transition-opacity duration-700 pointer-events-none z-0 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative w-full h-full max-w-[1400px] mx-auto pointer-events-none">
        {/* Header Section: tinh gọn khoảng cách, nhường 80% chiều cao cho sơ đồ xoay */}
        <div className="absolute top-6 sm:top-8 lg:top-10 left-1/2 -translate-x-1/2 text-center z-20 w-full max-w-4xl px-4 pointer-events-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight uppercase"
          >
            HỆ SINH THÁI CÔNG NGHIỆP
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-cyan-400 font-bold tracking-[0.2em] uppercase mb-2 text-xs sm:text-sm md:text-base"
          >
            CONNECT & CONNECT ECOSYSTEM
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-400 mx-auto text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl px-2 line-clamp-2 sm:line-clamp-none"
          >
            Dành cho các doanh nghiệp trong ngành Hóa chất - Dầu khí và Công nghiệp hỗ trợ, 
            FNX kết nối tri thức, công nghệ và chuỗi cung ứng thành giải pháp thực tiễn.
          </motion.p>
        </div>
        
        {/* Orbit container wrapper: giữ nguyên 100% tọa độ tự nhiên, không hack scale CSS */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Đường nối tia tới các node vòng trong */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {innerNodesData.map(node => (
              <ConnectingLine key={`line-${node.id}`} node={node} rotation={rotation} reverse={false} />
            ))}
          </svg>

          {/* Central FNX Hub */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto cursor-pointer"
            style={{ top: `${ORBIT_CENTER_Y}%` }}
          >
            <div className="relative flex items-center justify-center">
              <div className={`absolute inset-0 rounded-full bg-fnx-gold-dark/30 animate-ping transition-opacity duration-500 scale-[1.8] ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              <img 
                src={logoFNX} 
                alt="FNX Group Logo" 
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.35)] hover:scale-105 transition-transform" 
              />
            </div>
          </div>

          {/* Đường elip vòng trong (40% x 20%) */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[20%] border border-white/10 rounded-[50%] pointer-events-none z-0"
            style={{ top: `${ORBIT_CENTER_Y}%` }}
          />

          {/* Đường elip vòng ngoài (76% x 40%) */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[76%] h-[40%] border border-white/10 rounded-[50%] pointer-events-none z-0"
            style={{ top: `${ORBIT_CENTER_Y}%` }}
          />

          {/* Inner Orbit Nodes */}
          <div className="absolute inset-0 pointer-events-auto">
            {innerNodesData.map(node => (
              <OrbitNode
                key={node.id}
                node={node}
                rotation={rotation}
                isHovered={isHovered}
                activeNodeId={activeNodeId}
                onHover={(id) => { setActiveNodeId(id); setIsHovered(Boolean(id)); }}
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
                onHover={(id) => { setActiveNodeId(id); setIsHovered(Boolean(id)); }}
                onLeave={() => { setActiveNodeId(null); setIsHovered(false); }}
                reverse={true}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
