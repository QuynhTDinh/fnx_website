'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Microscope, GitMerge, Rocket, BarChart3, ChevronRight, Box } from 'lucide-react';

export default function FnxSC() {
  const [activeCapability, setActiveCapability] = useState("network");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = {
    network: {
      title: "Mạng lưới Cung ứng (Supply Network)",
      desc: "Điều phối mạng lưới cung ứng vật tư ME, hóa chất và vật liệu trực tiếp đến dự án, loại bỏ chi phí trung gian.",
      framework: "Tổng hợp nhu cầu -> Tìm kiếm nguồn cung -> Khai thác trực tiếp",
      solutions: ["Vật tư Xây dựng Cơ bản", "Hóa chất Chuyên dụng"]
    },
    sourcing: {
      title: "Cung ứng Kỹ thuật (Technical Sourcing)",
      desc: "Tìm kiếm và đánh giá các nguồn nguyên vật liệu đặc thù, đáp ứng các tiêu chuẩn kỹ thuật khắt khe nhất.",
      framework: "Đánh giá thông số -> Kiểm định mẫu -> Ký kết chiến lược",
      solutions: ["Hóa chất Dầu khí", "Vật tư Công nghiệp Hỗ trợ"]
    },
    surface: {
      title: "Giải pháp Bề mặt (Surface Solutions)",
      desc: "Điểm chạm duy nhất cho toàn bộ năng lực xử lý bề mặt, thay vì phải làm việc với hàng tá nhà cung cấp phân tán.",
      framework: "Điều phối trung tâm -> Đảm bảo chất lượng -> Giao hàng",
      solutions: ["Sơn & Mạ", "Ban Xử lý Bề mặt VASI"]
    },
    commercial: {
      title: "Đại diện Thương mại (Commercial Rep)",
      desc: "Đại diện chiến lược giúp các sản phẩm công nghệ thâm nhập sâu vào mạng lưới công nghiệp toàn cầu.",
      framework: "Nghiên cứu thị trường -> Phân phối trực tiếp -> Hậu mãi",
      solutions: ["Sản phẩm In-house", "Thiết bị Đối tác"]
    }
  };

  return (
    <div className="w-full bg-[#0F172A] text-white min-h-screen font-sans selection:bg-[#0EA5E9] selection:text-white">
      
      {/* 01. PROBLEM SECTION (Insight) */}
      <section className="relative pt-40 pb-32 px-4 md:px-8 border-b border-white/10 overflow-hidden flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-[1200px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[#94A3B8] uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-16 md:mb-24 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#94A3B8]"></span>
              Chúng tôi thấu hiểu thách thức của bạn
            </p>
            
            <div className="space-y-20 md:space-y-32 pl-4 md:pl-12 border-l border-white/10">
              <div className="group">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-500 mb-2 md:mb-4 transition-colors duration-500 group-hover:text-gray-400">
                  Đã tìm được nhà cung cấp.
                </h2>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white transition-colors duration-500">
                  Nhưng thiếu sự điều phối đồng bộ.
                </h2>
              </div>
              
              <div className="group">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-500 mb-2 md:mb-4 transition-colors duration-500 group-hover:text-gray-400">
                  Giá vật tư đã được tối ưu.
                </h2>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white transition-colors duration-500">
                  Nhưng chi phí ẩn trong vận hành lại tăng cao.
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02. CAPABILITY SECTION (The Network) */}
      <section className="py-32 px-4 md:px-8 border-b border-white/10 relative">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#0EA5E9]/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <h3 className="text-[#94A3B8] uppercase tracking-[0.3em] text-sm font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#94A3B8]"></span>
            Hệ sinh thái Năng lực
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            {/* Planets / Nodes */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {Object.entries(capabilities).map(([key, cap]) => (
                <div 
                  key={key}
                  onMouseEnter={() => setActiveCapability(key)}
                  className={`p-6 md:p-8 cursor-pointer transition-all duration-500 border-l-4 ${activeCapability === key ? 'bg-white/5 border-[#0EA5E9]' : 'border-transparent hover:bg-white/5'}`}
                >
                  <h4 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${activeCapability === key ? 'text-white' : 'text-gray-500'}`}>
                    {cap.title}
                  </h4>
                </div>
              ))}
            </div>
            
            {/* Description Details */}
            <div className="lg:col-span-7 bg-[#1E293B] p-8 md:p-12 border border-white/5 flex flex-col justify-center min-h-[400px] rounded-2xl">
              <motion.div
                key={activeCapability}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-3xl font-bold text-white mb-6">
                  {capabilities[activeCapability as keyof typeof capabilities].title}
                </h4>
                <p className="text-lg text-gray-300 leading-relaxed mb-12">
                  {capabilities[activeCapability as keyof typeof capabilities].desc}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-[#94A3B8] font-bold mb-4">Framework</span>
                    <p className="text-sm text-white font-medium bg-white/5 p-4 border border-white/5 rounded-xl">
                      {capabilities[activeCapability as keyof typeof capabilities].framework}
                    </p>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-[#94A3B8] font-bold mb-4">Related Solutions</span>
                    <div className="flex flex-wrap gap-2">
                      {capabilities[activeCapability as keyof typeof capabilities].solutions.map(sol => (
                        <span key={sol} className="text-sm text-[#0EA5E9] bg-[#0EA5E9]/10 px-4 py-2 border border-[#0EA5E9]/20 rounded-full">
                          {sol}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. SOLUTION SECTION (The Timeline) */}
      <section className="py-32 px-4 md:px-8 border-b border-white/10 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-[#94A3B8] uppercase tracking-[0.3em] text-sm font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#94A3B8]"></span>
            Phương pháp Giải quyết
          </h3>
          
          <div className="relative">
            {/* Horizontal Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Vấn đề", desc: "Phát hiện điểm đứt gãy chuỗi cung ứng" },
                { step: "02", title: "Chẩn đoán", desc: "Phân tích chi phí ẩn và năng lực đối tác" },
                { step: "03", title: "Khung giải pháp", desc: "Thiết kế mạng lưới điều phối trung tâm" },
                { step: "04", title: "Thực thi", desc: "Triển khai cung ứng và giám sát chất lượng" },
                { step: "05", title: "Kết quả", desc: "Tối ưu hóa tổng chi phí và thời gian" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#0F172A] border border-white/10 p-6 md:p-8 hover:bg-white/5 transition-colors relative group rounded-2xl"
                >
                  <div className="text-[#0EA5E9] font-mono text-xl font-bold mb-4">{item.step}.</div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. FRAMEWORK SECTION (The Methodology) */}
      <section className="py-32 px-4 md:px-8 bg-[#1E293B] border-b border-white/10">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-[#94A3B8] uppercase tracking-[0.3em] text-sm font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#94A3B8]"></span>
            Khung Vận hành Mạng lưới (FNX Supply Framework)
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
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-[#94A3B8] group-hover:bg-[#0EA5E9] group-hover:text-white group-hover:border-[#0EA5E9] transition-all duration-300">
                    {node.icon}
                  </div>
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-300 group-hover:text-white transition-colors">{node.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                )}
                {i < arr.length - 1 && (
                  <div className="block md:hidden h-8 w-[1px] bg-white/20 my-2"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 05. EVIDENCE SECTION (The Metrics & Trust Grid) */}
      <section className="py-32 px-4 md:px-8 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-[#94A3B8] uppercase tracking-[0.3em] text-sm font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#94A3B8]"></span>
            Bảo chứng Thực tế
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24">
            {[
              { value: "150+", label: "Nhà cung cấp" },
              { value: "30+", label: "Hãng Quốc tế" },
              { value: "99%", label: "Tỷ lệ đáp ứng" },
              { value: "05", label: "Trung tâm Kho bãi" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l border-white/10 pl-6"
              >
                <div className="text-5xl md:text-7xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-[#94A3B8] uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <p className="text-xl text-white font-medium mb-8">Mạng lưới Đối tác & Khách hàng Chiến lược</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { name: "Viettel", logo: "/images/partners/viettel-seeklogo.png" },
              { name: "Gelex", logo: "/images/partners/Logo_GELEX_Group.png" },
              { name: "Hitachi Energy", logo: "/images/partners/Hitachi-Energy-Logo-Vector.svg-.png" },
              { name: "Đạm Cà Mau", logo: "/images/partners/PVCFC.png" },
              { name: "Viglacera", logo: "/images/partners/logo-viglacera.jpg" },
              { name: "VASI", logo: "/images/partners/logo_vasis.png" },
              { name: "Khách hàng FDI", logo: "" },
              { name: "Nhà máy Hóa chất", logo: "" },
            ].map((partner, i) => (
              <div key={i} className="bg-[#0F172A] aspect-[4/3] flex items-center justify-center p-6 hover:bg-white/5 transition-colors group">
                {partner.logo ? (
                   <img 
                   src={partner.logo} 
                   alt={partner.name} 
                   className="max-h-16 opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 object-contain"
                 />
                ) : (
                  <span className="text-center font-bold text-sm md:text-base text-gray-500 uppercase tracking-widest transition-colors duration-500 hover:text-white">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 06. ECOSYSTEM SECTION (The Engine Reveal) */}
      <section className="py-32 px-4 md:px-8 border-b border-white/10 bg-[#0B1120]">
        <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
          <Box className="w-16 h-16 text-gray-600 mb-8" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Động cơ Mạng lưới (Supply Network)</h2>
          <p className="text-xl text-[#94A3B8] mb-12 uppercase tracking-[0.3em]">Được vận hành bởi</p>
          <div className="inline-block border border-white/20 px-12 py-6 bg-white/5 rounded-2xl">
             <h3 className="text-4xl font-black tracking-widest text-[#0EA5E9]">FNX-SC</h3>
          </div>
        </div>
      </section>

      {/* 07. CALL TO ACTION */}
      <section className="py-40 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
            Bạn đang mất bao nhiêu chi phí ẩn <br />
            trong chuỗi cung ứng?
          </h2>
          
          <button className="group bg-white text-[#0F172A] px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#0EA5E9] hover:text-white transition-all duration-300 flex items-center gap-3">
            Trò chuyện với Chuyên gia
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}