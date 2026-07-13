// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const corePlanets = [
  { name: "FNX-SC", posClass: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", tooltip: "Trung tâm Thương mại & Cung ứng" },
  { name: "FNX-RD", posClass: "bottom-1/4 -right-12 sm:-right-16 -translate-y-1/2", tooltip: "Trung tâm Nghiên cứu Phát triển" },
  { name: "FNX-M", posClass: "bottom-1/4 -left-12 sm:-left-16 -translate-y-1/2", tooltip: "Trung tâm Sản xuất" },
];

const moons = [
  { name: "HUMAN EXPERTISE", posClass: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
  { name: "TECH-DRIVEN", posClass: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
  { name: "SEAMLESS NETWORK", posClass: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
  { name: "SUSTAINABLE FUTURE", posClass: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
];

export default function Pillars() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full py-20 bg-fnx-dark overflow-hidden flex flex-col items-center justify-center min-h-[900px]">
      
      {/* Background Deep Space Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(211,163,66,0.05),transparent_70%)]"></div>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Header */}
      <div className="relative z-20 text-center mb-16 px-4">
        <h2 className="text-4xl md:text-6xl font-sans font-bold text-white tracking-widest mb-4">
          KIẾN TRÚC HỆ SINH THÁI
        </h2>
        <p className="text-fnx-silver max-w-2xl mx-auto">Tâm điểm kết nối toàn cầu. Mạng lưới vệ tinh tối ưu hóa chuỗi giá trị công nghiệp.</p>
      </div>

      {/* Galaxy Container */}
      <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px] flex items-center justify-center">
        
        {/* Main Planet Orbit (Dashed ring for Core Hubs) */}
        <div className="absolute inset-4 lg:inset-8 rounded-full border border-white/20 border-dashed animate-spin-slow">
          
          {corePlanets.map((planet) => (
            <div key={planet.name} className={`absolute ${planet.posClass} w-24 h-24 sm:w-32 sm:h-32`}>
              {/* Counter-rotate to keep planet text upright */}
              <div className="relative w-full h-full animate-spin-slow-reverse flex items-center justify-center">
                
                {/* Planet Body */}
                <div className="group relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0d1821] border border-fnx-silver/30 shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center backdrop-blur-md cursor-pointer hover:border-fnx-gold-light hover:shadow-[0_0_30px_rgba(211,163,66,0.3)] transition-all">
                  <span className="font-sans font-bold text-white text-[10px] sm:text-xs">{planet.name}</span>
                  
                  {/* Planet Tooltip */}
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 border border-white/10 px-3 py-1 rounded text-[10px] text-fnx-silver whitespace-nowrap pointer-events-none">
                    {planet.tooltip}
                  </div>
                </div>

                {/* Moon Orbit Ring */}
                <div className="absolute inset-[-10px] sm:inset-[-20px] rounded-full border border-white/5 animate-spin-fast">
                  {moons.map((moon) => (
                    <div key={moon.name} className={`absolute ${moon.posClass} w-2 h-2 sm:w-3 sm:h-3`}>
                       {/* Counter-rotate for moons to keep tooltip straight */}
                       <div className="relative w-full h-full animate-spin-slow-reverse">
                          <div className="group/moon relative w-full h-full rounded-full bg-fnx-gold-light shadow-[0_0_8px_rgba(211,163,66,0.8)] cursor-pointer hover:scale-150 transition-transform">
                             {/* Moon Tooltip */}
                            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover/moon:opacity-100 transition-opacity bg-black/90 border border-fnx-gold-dark px-2 py-1 rounded text-[8px] text-fnx-gold-light font-sans whitespace-nowrap pointer-events-none z-50">
                              {moon.name}
                            </div>
                          </div>
                       </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Outer Orbit (Strategic Affiliate) */}
        <div className="absolute inset-[-60px] sm:inset-[-80px] lg:inset-[-120px] rounded-full border border-fnx-gold-dark/40 border-dashed animate-[spin_80s_linear_infinite]">
          <div className="absolute top-1/2 -left-12 sm:-left-16 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32">
            <div className="relative w-full h-full animate-[spin_80s_linear_infinite_reverse] flex items-center justify-center">
              {/* Affiliate Body */}
              <div className="group relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-fnx-dark border-2 border-fnx-gold-light shadow-[0_0_30px_rgba(211,163,66,0.3)] flex flex-col items-center justify-center backdrop-blur-md cursor-pointer hover:scale-110 transition-transform">
                <span className="font-sans font-bold text-fnx-gold-light text-[8px] sm:text-[10px] mb-1">LIÊN KẾT</span>
                <span className="font-sans font-bold text-white text-xs sm:text-sm">BAN XLBM</span>
                
                {/* Affiliate Tooltip */}
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-fnx-gold-dark/90 border border-fnx-gold-light px-3 py-1 rounded text-[10px] text-white whitespace-nowrap pointer-events-none">
                  Trung tâm Kết nối (Xử lý Bề mặt)
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* The Sun (Center) */}
        <div className="absolute z-10 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-fnx-gold-dark to-white/20 shadow-[0_0_80px_rgba(211,163,66,0.4)] flex items-center justify-center p-1">
          <div className="w-full h-full rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-center p-2 shadow-inner">
            <span className="font-sans font-bold text-white text-sm sm:text-lg tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
              GLOBAL<br/>CLIENTS
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
