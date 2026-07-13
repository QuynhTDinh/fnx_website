// @ts-nocheck
'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';
const logoFNX = '/assets/logo-fnx-1.png';

const nodesData = [
  { id: 'expert', title: 'Experts', desc: 'Mạng lưới chuyên gia kỹ thuật đầu ngành.', image: '/images/ecosystem/fnx_ban_vasi.jpg', startAngle: 0, radiusX: 38, radiusY: 16, size: 120 },
  { id: 'university', title: 'Universities', desc: 'Các viện nghiên cứu & trường đại học.', image: '/images/ecosystem/fnx_research_dev.jpg', startAngle: 60, radiusX: 45, radiusY: 24, size: 90 },
  { id: 'technology', title: 'Technology', desc: 'Giải pháp công nghệ lõi và bản quyền.', image: '/images/ecosystem/fnx_supply_chain.jpg', startAngle: 120, radiusX: 40, radiusY: 28, size: 110 },
  { id: 'manufacturing', title: 'Manufacturing', desc: 'Hệ thống nhà máy sản xuất tiêu chuẩn.', image: '/images/ecosystem/fnx_manufacturing.jpg', startAngle: 180, radiusX: 38, radiusY: 16, size: 130 },
  { id: 'partner', title: 'Partners', desc: 'Đối tác cung ứng vật tư & thiết bị.', image: '/images/ecosystem/fnx_core_group.jpg', startAngle: 240, radiusX: 45, radiusY: 24, size: 96 },
  { id: 'customer', title: 'Customers', desc: 'Khách hàng trong chuỗi cung ứng toàn cầu.', image: '/images/ecosystem/vasi_rd.png', startAngle: 300, radiusX: 40, radiusY: 28, size: 110 },
];

const OrbitNode = ({ node, rotation, isHovered, activeNodeId, onHover, onLeave }) => {
  // Tính toán vị trí X, Y (hình elip)
  const x = useTransform(rotation, r => 50 + node.radiusX * Math.cos(node.startAngle * (Math.PI / 180) + r));
  const y = useTransform(rotation, r => 50 + node.radiusY * Math.sin(node.startAngle * (Math.PI / 180) + r));

  const leftPerc = useTransform(x, val => `${val}%`);
  const topPerc = useTransform(y, val => `${val}%`);
  
  const isActive = activeNodeId === node.id;
  const isDimmed = isHovered && !isActive;

  return (
    <motion.div
      className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ${isDimmed ? 'opacity-30 scale-95' : 'opacity-100 scale-100'}`}
      style={{ left: leftPerc, top: topPerc, zIndex: isActive ? 50 : 10 }}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={onLeave}
    >
      <div 
        className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-white/5 bg-[#0B1120] ${isActive ? 'scale-110 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]' : 'hover:border-white/20'}`} 
        style={{ width: node.size, height: node.size }}
      >
        <img src={node.image} alt={node.title} className={`w-full h-full object-cover transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 p-4 bg-[#080C16]/95 backdrop-blur-md border border-cyan-800 rounded-lg pointer-events-none shadow-2xl flex flex-col items-center text-center"
      >
        <span className="text-cyan-400 font-bold text-sm tracking-wide mb-1">{node.title}</span>
        <p className="text-cyan-50 text-xs leading-relaxed font-medium">{node.desc}</p>
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
    <section className="relative w-full h-[120vh] min-h-[800px] bg-surface-blueprint overflow-hidden flex flex-col items-center py-24">
      {/* Background overlay that darkens when a node is active */}
      <div 
        className={`absolute inset-0 bg-[#05080F]/80 transition-opacity duration-700 pointer-events-none z-0 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="absolute inset-0 max-w-[1400px] mx-auto w-full h-full pointer-events-none">
        
        {/* Title */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-20 w-full max-w-2xl px-4 pointer-events-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-wide">Mạng lưới Vận hành</h2>
          <p className="text-cyan-500/80 font-bold text-lg uppercase tracking-[0.2em] mb-4">Connect & Connect Ecosystem</p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            FNX đóng vai trò là hạt nhân trung tâm, thu hút và điều phối sức mạnh của các chuyên gia, trường đại học, nhà máy và đối tác toàn cầu vào một quỹ đạo giá trị duy nhất.
          </p>
        </div>

        {/* Central FNX Hub */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto">
          <div className="relative flex items-center justify-center">
            {/* Core Pulse */}
            <div className={`absolute inset-0 rounded-full bg-fnx-gold-dark/20 animate-ping transition-opacity duration-500 scale-[2] ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            <img src={logoFNX} alt="FNX Group Logo" className="h-10 md:h-16 w-auto object-contain relative z-10" />
          </div>
        </div>

        {/* Orbit Nodes */}
        <div className="absolute inset-0 pointer-events-auto">
          {nodesData.map(node => (
            <OrbitNode
              key={node.id}
              node={node}
              rotation={rotation}
              isHovered={isHovered}
              activeNodeId={activeNodeId}
              onHover={(id) => { setActiveNodeId(id); setIsHovered(true); }}
              onLeave={() => { setActiveNodeId(null); setIsHovered(false); }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
