import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const bentoItems = {
  group: {
    id: "group",
    title: "FNX GROUP",
    subtitle: "COMMAND CENTER",
    desc: "Tổng hành dinh điều phối toàn bộ chuỗi giá trị và thiết lập tiêu chuẩn cho hệ sinh thái công nghiệp.",
    bgImage: "/images/ecosystem/fnx_core_group.jpg",
    link: "/"
  },
  rd: {
    id: "rd",
    title: "FNX-RD",
    subtitle: "NGHIÊN CỨU & PHÁT TRIỂN",
    desc: "Nghiên cứu công nghệ lõi và thiết kế giải pháp.",
    bgImage: "/images/ecosystem/fnx_research_dev.jpg",
    link: "/hubs/rd"
  },
  sc: {
    id: "sc",
    title: "FNX-SC",
    subtitle: "CHUỖI CUNG ỨNG",
    desc: "Chuẩn hóa cung ứng vật tư và thương mại hóa chất.",
    bgImage: "/images/ecosystem/fnx_supply_chain.jpg",
    link: "/hubs/sc"
  },
  m: {
    id: "m",
    title: "FNX-M",
    subtitle: "TRUNG TÂM SẢN XUẤT",
    desc: "Triển khai sản xuất hàng loạt với độ chính xác cao.",
    bgImage: "/images/ecosystem/fnx_manufacturing.jpg",
    link: "/hubs/m"
  },
  vasi: {
    id: "vasi",
    title: "BAN XLBM",
    subtitle: "ĐỐI TÁC CHIẾN LƯỢC ĐỘC LẬP",
    desc: "Năng lực mạ bọc kỹ thuật, chrome cứng, sơn tĩnh điện và anode hóa tiêu chuẩn cao.",
    bgImage: "/images/ecosystem/fnx_ban_vasi.jpg",
    link: "/affiliate/xlbm",
    isAffiliate: true
  }
};

const BentoCard = ({ item, className, delay = 0 }) => (
  <Link to={item.link} className={`block relative rounded-2xl overflow-hidden group cursor-pointer border ${item.isAffiliate ? 'border-fnx-gold-dark/40 border-dashed' : 'border-black/10 hover:border-black/30'} transition-colors duration-500 ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className="w-full h-full bg-white/80"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={item.bgImage} 
          alt={item.title} 
          className="w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/20 group-hover:bg-white/40 transition-colors duration-500"></div>
      </div>
      
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-20">
        <div className="flex flex-col transform group-hover:-translate-y-2 transition-transform duration-300 ease-out">
          <h3 className={`text-3xl md:text-4xl font-heading font-bold ${item.isAffiliate ? 'text-fnx-gold-dark' : 'text-fnx-navy'} tracking-widest`}>
            {item.title}
          </h3>
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
            <div className="overflow-hidden">
              <div className="mt-4 text-fnx-gold-dark text-xs font-sans font-bold tracking-widest mb-2 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {item.subtitle}
              </div>
              <p className="text-gray-700 font-medium text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
);

export default function Ecosystem() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-smoke-200 border-t border-black/5">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-fnx-navy tracking-tight uppercase">Chuỗi Giá Trị <span className="text-fnx-gold-dark">Thống Nhất</span></h2>
        <p className="text-gray-500 font-bold mt-4 text-lg font-sans">Business Ecosystem</p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left: Command Center */}
          <div className="md:col-span-2">
            <BentoCard item={bentoItems.group} className="h-[400px] md:h-full min-h-[600px]" delay={0} />
          </div>

          {/* Right: Value Chain Sequence */}
          <div className="md:col-span-1 flex flex-col gap-6 relative">
            
            {/* The Vertical Light Flow */}
            <div className="absolute left-[-15px] top-10 bottom-10 w-[2px] bg-fnx-navy/10 hidden md:block">
              <motion.div 
                className="absolute top-0 w-full h-32 bg-gradient-to-b from-transparent via-fnx-gold-dark to-transparent"
                initial={{ top: '-10%', opacity: 0 }}
                animate={{ 
                  top: isInView ? ['-10%', '110%'] : '-10%',
                  opacity: isInView ? [0, 1, 1, 0] : 0
                }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
                style={{ filter: 'drop-shadow(0 0 10px rgba(200,154,61,0.5))' }}
              />
            </div>

            <BentoCard item={bentoItems.rd} className="h-[250px]" delay={0.2} />
            <div className="hidden md:flex absolute left-[-23px] top-[125px] w-4 h-4 rounded-full border-2 border-fnx-gold-dark bg-white z-10 items-center justify-center">
               <div className="w-1.5 h-1.5 bg-fnx-gold-dark rounded-full"></div>
            </div>

            <BentoCard item={bentoItems.sc} className="h-[250px]" delay={0.4} />
            <div className="hidden md:flex absolute left-[-23px] top-[395px] w-4 h-4 rounded-full border-2 border-fnx-gold-dark bg-white z-10 items-center justify-center">
               <div className="w-1.5 h-1.5 bg-fnx-gold-dark rounded-full"></div>
            </div>

            <BentoCard item={bentoItems.m} className="h-[250px]" delay={0.6} />
            <div className="hidden md:flex absolute left-[-23px] top-[665px] w-4 h-4 rounded-full border-2 border-fnx-gold-dark bg-white z-10 items-center justify-center">
               <div className="w-1.5 h-1.5 bg-fnx-gold-dark rounded-full"></div>
            </div>

          </div>
        </div>

        {/* Bottom: Independent Affiliate */}
        <div className="mt-6">
          <BentoCard item={bentoItems.vasi} className="h-[300px]" delay={0.8} />
        </div>

      </div>
    </section>
  );
}
