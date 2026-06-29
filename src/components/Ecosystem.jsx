import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const bentoItems = [
  {
    id: "group",
    title: "FNX GROUP",
    subtitle: "LÕI HỆ SINH THÁI",
    desc: "Định hình tiêu chuẩn công nghiệp bề mặt và điều phối toàn bộ chuỗi giá trị. Tâm điểm kết nối các nguồn lực chiến lược.",
    pos: "md:col-span-2 md:row-span-2 min-h-[350px] md:min-h-[400px]",
    bg: "bg-fnx-matrix",
    border: "border-fnx-silver/20",
    titleColor: "text-white",
    hoverBorder: "hover:border-white/50",
    link: "/",
    bgImage: "/images/ecosystem/fnx_core_group.jpg"
  },
  {
    id: "sc",
    title: "FNX-SC",
    subtitle: "CHUỖI CUNG ỨNG",
    desc: "Thương mại hóa chất, bảo trì hệ thống và cung ứng vật tư xây dựng cơ bản.",
    pos: "md:col-span-1 md:row-span-1 min-h-[250px]",
    bg: "bg-[#0C141C]",
    border: "border-white/5",
    titleColor: "text-white",
    hoverBorder: "hover:border-white/30",
    link: "/hubs/sc",
    bgImage: "/images/ecosystem/fnx_supply_chain.jpg"
  },
  {
    id: "rd",
    title: "FNX-RD",
    subtitle: "NGHIÊN CỨU & PHÁT TRIỂN",
    desc: "Nghiên cứu công nghệ lõi, làm chủ điện tử ứng dụng và chuyển giao giải pháp.",
    pos: "md:col-span-1 md:row-span-1 min-h-[250px]",
    bg: "bg-[#111A24]",
    border: "border-white/5",
    titleColor: "text-white",
    hoverBorder: "hover:border-white/30",
    link: "/hubs/rd",
    bgImage: "/images/ecosystem/fnx_research_dev.jpg"
  },
  {
    id: "vasi",
    title: "BAN XLBM",
    subtitle: "ĐỐI TÁC CHIẾN LƯỢC",
    desc: "Năng lực mạ bọc kỹ thuật, chrome cứng, sơn tĩnh điện và anode hóa tiêu chuẩn cao.",
    pos: "md:col-span-2 md:row-span-1 min-h-[250px]",
    bg: "bg-[#0A1017]",
    border: "border-fnx-gold-dark/40 border-dashed",
    titleColor: "text-fnx-gold-light",
    hoverBorder: "hover:border-fnx-gold-light",
    isAffiliate: true,
    link: "/affiliate/xlbm",
    bgImage: "/images/ecosystem/fnx_ban_vasi.jpg"
  },
  {
    id: "m",
    title: "FNX-M",
    subtitle: "TRUNG TÂM SẢN XUẤT",
    desc: "Vận hành dây chuyền gia công bề mặt và quản lý chất lượng sản lượng nghiêm ngặt.",
    pos: "md:col-span-1 md:row-span-1 min-h-[250px]",
    bg: "bg-[#090F16]",
    border: "border-white/5",
    titleColor: "text-white",
    hoverBorder: "hover:border-white/30",
    link: "/hubs/m",
    bgImage: "/images/ecosystem/fnx_manufacturing.jpg"
  }
];

export default function Ecosystem() {
  return (
    <section className="relative w-full py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-widest uppercase">HỆ SINH THÁI TÍCH HỢP</h2>
        <p className="text-fnx-silver mt-4 text-sm font-sans tracking-widest uppercase">Ecosystem Architecture</p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-6 auto-rows-fr">
          
          {bentoItems.map((item, idx) => (
            <Link key={item.id} to={item.link} className={`${item.pos}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer border ${item.border} ${item.bg} ${item.hoverBorder} transition-all duration-500`}
              >
                
                {/* Background Image with Dark Overlay */}
                {item.bgImage && (
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.bgImage} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                  </div>
                )}

                {/* Background ambient glow on hover (Fallback if no image or extra effect) */}
                {!item.bgImage && (
                  <>
                    {item.isAffiliate ? (
                      <div className="absolute inset-0 bg-fnx-gold-dark/0 group-hover:bg-fnx-gold-dark/10 transition-colors duration-500"></div>
                    ) : (
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500"></div>
                    )}
                  </>
                )}

                {/* Subtle tech grid pattern for FNX GROUP */}
                {item.id === 'group' && !item.bgImage && (
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                )}

                {/* Content Container (Bottom Aligned) */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end z-20">
                  <div className="flex flex-col transform group-hover:-translate-y-2 transition-transform duration-300 ease-out">
                    
                    <h3 className={`text-3xl md:text-4xl lg:text-5xl font-sans font-bold ${item.titleColor} tracking-widest`}>
                      {item.title}
                    </h3>
                    
                    {/* Expandable content area (Grid 0fr to 1fr trick) */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                      <div className="overflow-hidden">
                        <div className="mt-4 text-fnx-gold-light text-xs font-sans tracking-widest mb-2 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {item.subtitle}
                        </div>
                        <p className="text-fnx-silver text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Interaction Indicator (Arrow top right) */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <svg className={`w-6 h-6 ${item.isAffiliate ? 'text-fnx-gold-light' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

              </motion.div>
            </Link>
          ))}
          
        </div>
      </div>
    </section>
  );
}
