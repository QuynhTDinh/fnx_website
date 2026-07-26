'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Microscope, Search, GitMerge, Rocket, BarChart3, ChevronRight } from 'lucide-react';

export default function FnxRD() {
  const [activeCapability, setActiveCapability] = useState("research");
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = {
    research: {
      title: "Nghiên cứu Khoa học & Đổi mới sáng tạo",
      desc: "Làm chủ công nghệ lõi CN Hỗ trợ VN, kết nối mạng lưới chuyên gia học thuật (ĐHBK HN, Viện Hàn lâm, Viện TNMT...), tiếp nhận chuyển giao công nghệ.",
      solutions: ["Công nghệ lõi", "Chuyển giao công nghệ"]
    },
    consulting: {
      title: "Tư vấn & Triển khai Dự án",
      desc: "Đồng hành cùng Chủ đầu tư (tư vấn chuẩn bị, thiết kế, quản lý dự án, tổ chức triển khai, tối ưu sản xuất...).",
      solutions: ["Quản lý dự án", "Tối ưu sản xuất"]
    },
    digital_talent: {
      title: "Nhân lực số",
      desc: "Nơi nhận định, định hướng, nuôi dưỡng và phát triển cho nguồn nhân lực chất lượng cao với hệ sinh thái các sản phẩm số theo triết lý và tư duy cốt lõi của FNX",
      solutions: ["CO² platform", "CO²-PIM", "CO²-CSF", "CO²-CCS"]
    }
  };

  return (
    <div className="w-full bg-fnx-light-bg text-fnx-light-text min-h-screen font-sans selection:bg-fnx-sky selection:text-white">
      
      {/* 01. HERO SECTION */}
      <section className="relative pt-40 pb-32 px-4 md:px-8 border-b border-gray-200 overflow-hidden flex flex-col justify-center min-h-[70vh]">
        <div className="max-w-[1200px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <p className="text-fnx-sky uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-fnx-sky"></span>
              Đơn vị thành viên FNX Group
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-8 uppercase">
              FNX-RD
            </h1>
            
            <p className="text-xl md:text-3xl text-gray-600 font-sans font-bold leading-relaxed border-l-4 border-fnx-sky pl-6 md:pl-10">
              Chúng tôi nghiên cứu và phát triển, dẫn dắt đổi mới sáng tạo và chuyển hóa ý tưởng thành các giải pháp có giá trị cho ngành công nghiệp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02. CAPABILITY SECTION (The Network) */}
      <section className="py-32 px-4 md:px-8 border-b border-gray-200 relative bg-gray-50/50">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fnx-sky/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <h3 className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-16 flex items-center gap-4 animate-pulse">
            <span className="w-8 h-[1px] bg-gray-500"></span>
            Năng lực chuyên môn
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            {/* Planets / Nodes */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {Object.entries(capabilities).map(([key, cap]) => (
                <div 
                  key={key}
                  onMouseEnter={() => setActiveCapability(key)}
                  className={`group p-6 md:p-8 cursor-pointer transition-all duration-500 border-l-4 rounded-xl ${activeCapability === key ? 'bg-fnx-sky border-fnx-sky text-white shadow-md' : 'border-transparent hover:bg-white/60'}`}
                >
                  <h4 className={`text-2xl md:text-3xl transition-colors duration-300 font-bold ${activeCapability === key ? 'text-white' : 'text-gray-400 group-hover:text-fnx-sky'}`}>
                    {cap.title}
                  </h4>
                </div>
              ))}
            </div>
            
            {/* Description Details */}
            <div className="lg:col-span-7 bg-fnx-sky text-white p-8 md:p-12 border border-fnx-sky/20 shadow-lg flex flex-col justify-center min-h-[400px] rounded-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <motion.div
                key={activeCapability}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <h4 className="text-3xl text-white font-bold mb-6">
                  {capabilities[activeCapability as keyof typeof capabilities].title}
                </h4>
                <p className="text-lg text-gray-100 leading-relaxed mb-12">
                  {capabilities[activeCapability as keyof typeof capabilities].desc}
                </p>
                
                <div className="mt-8">
                  <span className="block text-xs uppercase tracking-widest text-white/70 font-bold mb-4 font-sans">Sản phẩm & Giải pháp</span>
                  <div className="flex flex-wrap gap-2 relative">
                    {capabilities[activeCapability as keyof typeof capabilities].solutions.map(sol => {
                      if (sol === 'CO² platform') {
                        return (
                          <div key={sol} className="relative z-20">
                            <button
                              onClick={() => {
                                setShowComingSoon(true);
                                setTimeout(() => setShowComingSoon(false), 4000);
                              }}
                              className="relative flex items-center gap-3 px-6 py-2.5 bg-[#080F12] text-white rounded-full font-sans font-bold text-sm tracking-wide shadow-2xl hover:scale-105 hover:bg-[#121A25] transition-all duration-300 border border-white/20 group cursor-pointer"
                            >
                              {/* Outer Glow on hover */}
                              <span className="absolute inset-0 rounded-full border border-white/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
                              
                              <span className="relative z-10">{sol}</span>
                              
                              {/* Modern Icon */}
                              <svg className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </button>
                            
                            {/* Coming soon popup */}
                            {showComingSoon && (
                              <motion.div 
                                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                                className="absolute bottom-full left-0 mb-4 w-72 bg-[#080F12]/95 backdrop-blur-xl text-white p-5 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 z-50 overflow-hidden"
                              >
                                {/* Glowing top border */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fnx-sky to-transparent opacity-70"></div>
                                
                                <div className="relative z-10 flex flex-col">
                                  <h5 className="font-bold text-base tracking-widest text-white mb-2 uppercase font-sans">Sắp Ra Mắt</h5>
                                  <p className="text-sm text-white/80 leading-relaxed font-sans">
                                    Nền tảng công nghệ đột phá đang trong giai đoạn hoàn thiện cuối cùng.
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        );
                      }
                      
                      return (
                        <span key={sol} className="text-sm text-fnx-sky bg-white/90 px-4 py-2 rounded-full font-sans font-bold shadow-sm">
                          {sol}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. SOLUTION SECTION (The Timeline) */}
      <section className="py-32 px-4 md:px-8 border-b border-gray-200 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gray-500"></span>
            Phương pháp Giải quyết
          </h3>
          
          <div className="relative">
            {/* Horizontal Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Vấn đề", desc: "Nhận diện rào cản kỹ thuật" },
                { step: "02", title: "Chẩn đoán", desc: "Đánh giá lõi công nghệ hiện tại" },
                { step: "03", title: "Khung giải pháp", desc: "Thiết lập phương pháp luận" },
                { step: "04", title: "Thực thi", desc: "Triển khai tích hợp vào hệ thống" },
                { step: "05", title: "Kết quả", desc: "Đo lường OEE và tối ưu hóa" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 p-6 md:p-8 hover:shadow-md transition-shadow relative group rounded-2xl"
                >
                  <div className="text-fnx-sky font-mono text-xl font-bold mb-4">{item.step}.</div>
                  <h4 className="text-xl text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. FRAMEWORK SECTION (The Methodology) */}
      <section className="py-32 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gray-500"></span>
            Khung Vận hành Công nghệ (FNX Tech Framework)
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            {[
              { icon: <Search className="w-6 h-6" />, label: "Khám phá" },
              { icon: <Microscope className="w-6 h-6" />, label: "Phân tích" },
              { icon: <GitMerge className="w-6 h-6" />, label: "Kết nối" },
              { icon: <Rocket className="w-6 h-6" />, label: "Triển khai" },
              { icon: <BarChart3 className="w-6 h-6" />, label: "Tối ưu" }
            ].map((node, i, arr) => (
              <React.Fragment key={node.label}>
                <div className="flex flex-col items-center gap-4 group">
                  <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 group-hover:bg-fnx-sky group-hover:text-white group-hover:border-fnx-sky transition-all duration-300 bg-white">
                    {node.icon}
                  </div>
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-600 group-hover:text-fnx-sky transition-colors">{node.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                )}
                {i < arr.length - 1 && (
                  <div className="block md:hidden h-8 w-[1px] bg-gray-300 my-2"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 05. EVIDENCE SECTION (The Metrics & Trust Grid) */}
      <section className="py-32 px-4 md:px-8 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gray-500"></span>
            Bảo chứng Thực tế
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24">
            {[
              { value: "48+", label: "Dự án Triển khai" },
              { value: "12", label: "Ngành Công nghiệp" },
              { value: "300+", label: "Chuyên gia Mạng lưới" },
              { value: "25", label: "Lĩnh vực Năng lực" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l border-gray-200 pl-6"
              >
                <div className="text-5xl md:text-7xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Tạm ẩn Mạng lưới Đơn vị Học thuật & Khách hàng
          <p className="text-xl text-gray-900 font-medium mb-8">Mạng lưới Đơn vị Học thuật & Khách hàng Ứng dụng Giải pháp</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden">
            {[
              { name: "Đại học Bách Khoa Hà Nội", logo: "/images/partners/logo-hust.png" },
              { name: "Viện Hàn lâm Khoa học và Công nghệ Việt Nam", logo: "/images/partners/logo-vast.jpg" },
              { name: "Viện Tài nguyên và Môi trường", logo: "/images/partners/logo-cres.png" },
              { name: "Trường Hóa học và Khoa học Sự sống", logo: "" },
              { name: "Khách hàng Hóa chất", logo: "" },
              { name: "Khách hàng Dầu khí", logo: "" },
              { name: "Khách hàng Công nghiệp Hỗ trợ", logo: "" },
              { name: "Nhà đầu tư Dự án", logo: "" },
            ].map((partner, i) => (
              <div key={i} className="bg-white aspect-[4/3] flex items-center justify-center p-6 hover:bg-gray-50 transition-colors group">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-16 opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 object-contain"
                  />
                ) : (
                  <span className="text-center font-bold text-sm md:text-base text-gray-400 uppercase tracking-widest transition-colors duration-500 hover:text-gray-900">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
          */}

        </div>
      </section>

      {/* Tạm ẩn 06. ECOSYSTEM SECTION (The Engine Reveal)
      <section className="py-32 px-4 md:px-8 border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
          <Cpu className="w-16 h-16 text-gray-400 mb-8" />
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-4">Động cơ Công nghệ (Technology Engine)</h2>
          <p className="text-xl text-gray-500 mb-12 uppercase tracking-[0.3em]">Được vận hành bởi</p>
          <div className="inline-block border border-gray-200 px-12 py-6 bg-white rounded-2xl shadow-sm">
             <h3 className="text-4xl tracking-widest text-fnx-sky">FNX-RD</h3>
          </div>
        </div>
      </section>
      */}

      {/* 07. CALL TO ACTION */}
      <section className="py-40 px-4 md:px-8 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-[0.03] invert"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-12">
            Có một bài toán kỹ thuật <br />
            chưa thể giải quyết?
          </h2>
          
          <button className="group bg-gray-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-fnx-sky transition-all duration-300 flex items-center gap-3 shadow-lg">
            Trò chuyện với Chuyên gia
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}