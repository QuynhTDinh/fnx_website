import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Magnetic Node Component
const MagneticNode = ({ node, isActive, isDimmed, onHover, onLeave }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Pull towards mouse (max 20px)
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onLeave();
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        left: `${node.x}%`,
        top: `${node.y}%`,
        zIndex: isActive ? 50 : 10
      }}
      className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ${
        isDimmed ? 'opacity-20 scale-90' : 'opacity-100 scale-100'
      }`}
    >
      <div className={`relative px-6 py-3 rounded-full border backdrop-blur-md transition-all duration-300 ${
        isActive 
          ? 'bg-fnx-gold-dark/30 border-fnx-gold-light shadow-[0_0_30px_rgba(211,163,66,0.6)]' 
          : 'bg-white/5 border-white/20 hover:bg-white/10'
      }`}>
        <span className={`font-sans text-sm md:text-base font-semibold ${isActive ? 'text-fnx-gold-light' : 'text-white'}`}>
          {node.label}
        </span>
        
        {/* Detail Panel on Hover */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 p-4 bg-black/80 border border-fnx-gold-dark/50 rounded-lg pointer-events-none"
        >
          <p className="text-fnx-silver text-xs leading-relaxed">{node.desc}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function NetworkEcosystem() {
  const [activeNodeId, setActiveNodeId] = useState(null);

  const nodes = [
    { id: 'expert', label: 'Experts', desc: 'Mạng lưới chuyên gia kỹ thuật đầu ngành.', x: 20, y: 30 },
    { id: 'university', label: 'Universities', desc: 'Các viện nghiên cứu & trường đại học.', x: 15, y: 60 },
    { id: 'technology', label: 'Technology', desc: 'Giải pháp công nghệ lõi và bản quyền.', x: 35, y: 80 },
    { id: 'manufacturing', label: 'Manufacturing', desc: 'Hệ thống nhà máy sản xuất tiêu chuẩn.', x: 80, y: 25 },
    { id: 'partner', label: 'Partners', desc: 'Đối tác cung ứng vật tư & thiết bị.', x: 85, y: 55 },
    { id: 'customer', label: 'Customers', desc: 'Khách hàng trong chuỗi cung ứng toàn cầu.', x: 75, y: 85 },
  ];

  return (
    <section className="relative w-full h-screen bg-[#05080C] overflow-hidden flex items-center justify-center py-24">
      {/* Background overlay that darkens when a node is active */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-700 pointer-events-none z-0 ${
          activeNodeId ? 'opacity-80' : 'opacity-0'
        }`}
      />

      <div className="absolute inset-0 max-w-[1200px] mx-auto w-full h-full">
        
        {/* Title */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-20">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">Mạng lưới Vận hành</h2>
          <p className="text-fnx-silver text-lg uppercase tracking-widest">Connect & Connect Ecosystem</p>
        </div>

        {/* Central FNX Hub */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="relative w-40 h-40 flex items-center justify-center rounded-full border border-fnx-gold-dark/30 bg-black shadow-[0_0_50px_rgba(211,163,66,0.1)]">
            {/* Core Pulse */}
            <div className={`absolute inset-0 rounded-full bg-fnx-gold-dark/20 animate-ping transition-opacity duration-300 ${activeNodeId ? 'opacity-100' : 'opacity-0'}`}></div>
            <span className="font-tech text-4xl font-bold text-fnx-gold-light relative z-10">FNX</span>
          </div>
        </div>

        {/* Connecting Lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {nodes.map(node => {
            const isActive = activeNodeId === node.id;
            const isDimmed = activeNodeId && !isActive;
            
            return (
              <g key={`line-${node.id}`}>
                {/* Base Line */}
                <line 
                  x1={`${node.x}%`} y1={`${node.y}%`} 
                  x2="50%" y2="50%" 
                  stroke="rgba(255,255,255,0.1)" 
                  strokeWidth="2"
                  className={`transition-opacity duration-500 ${isDimmed ? 'opacity-10' : 'opacity-100'}`}
                />
                {/* Active Laser Line */}
                <line 
                  x1={`${node.x}%`} y1={`${node.y}%`} 
                  x2="50%" y2="50%" 
                  stroke="#D3A342" 
                  strokeWidth="4"
                  className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(211,163,66,0.8))',
                    strokeDasharray: '10 10',
                    animation: isActive ? 'dash 1s linear infinite' : 'none'
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map(node => (
          <MagneticNode
            key={node.id}
            node={node}
            isActive={activeNodeId === node.id}
            isDimmed={activeNodeId && activeNodeId !== node.id}
            onHover={setActiveNodeId}
            onLeave={() => setActiveNodeId(null)}
          />
        ))}

      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </section>
  );
}
