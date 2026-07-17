'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Microscope, Search, GitMerge, Rocket, BarChart3, ChevronRight } from 'lucide-react';

export default function FnxRD() {
  const [activeCapability, setActiveCapability] = useState("technology");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = {
    technology: {
      title: "Công nghệ (Technology)",
      desc: "Làm chủ công nghệ lõi và tối ưu hóa giải pháp hóa học, vật liệu, tự động hóa.",
      framework: "Nghiên cứu -> Chuyển giao -> Tùy biến",
      solutions: ["Vật liệu bề mặt", "Phần mềm IoT"]
    },
    engineering: {
      title: "Triển khai (Engineering)",
      desc: "Đưa tri thức học thuật vào thực tiễn nhà máy với độ chính xác cao nhất.",
      framework: "Khảo sát -> Thiết kế -> Lắp đặt",
      solutions: ["Kính điện thông minh", "Sơn chống cháy"]
    },
    talent: {
      title: "Nhân sự (Talent)",
      desc: "Xây dựng đội ngũ kỹ sư chuyên môn cao, thấu hiểu bài toán công nghiệp.",
      framework: "Đánh giá -> Đào tạo -> Cung ứng",
      solutions: ["Kỹ sư Hóa chất", "Chuyên gia Dầu khí"]
    }
  };

  return (
    <div className="w-full bg-[#0A1128] text-white min-h-screen font-sans selection:bg-[#3454D1] selection:text-white">
      
      {/* 01. PROBLEM SECTION (Insight) */}
      <section className="relative pt-40 pb-32 px-4 md:px-8 border-b border-white/10 overflow-hidden flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-[1200px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[#8492A6] uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-16 md:mb-24 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#8492A6]"></span>
              Chúng tôi thấu hiểu thách thức của bạn
            </p>
            
            <div className="space-y-20 md:space-y-32 pl-4 md:pl-12 border-l border-white/10">
              <div className="group">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-500 mb-2 md:mb-4 transition-colors duration-500 group-hover:text-gray-400">
                  Sở hữu công nghệ tiên tiến là chưa đủ.
                </h2>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white transition-colors duration-500">
                  Năng lực làm chủ mới tạo ra lợi thế.
                </h2>
              </div>
              
              <div className="group">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-500 mb-2 md:mb-4 transition-colors duration-500 group-hover:text-gray-400">
                  Nhân sự đã được tuyển dụng.
                </h2>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white transition-colors duration-500">
                  Nhưng chuyên môn thực chiến lại vắng bóng.
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02. CAPABILITY SECTION (The Network) */}
      <section className="py-32 px-4 md:px-8 border-b border-white/10 relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3454D1]/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-[#8492A6] uppercase tracking-[0.3em] text-sm font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#8492A6]"></span>
            Hệ sinh thái Năng lực
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            {/* Planets / Nodes */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {Object.entries(capabilities).map(([key, cap]) => (
                <div 
                  key={key}
                  onMouseEnter={() => setActiveCapability(key)}
                  className={`p-6 md:p-8 cursor-pointer transition-all duration-500 border-l-4 ${activeCapability === key ? 'bg-white/5 border-[#3454D1]' : 'border-transparent hover:bg-white/5'}`}
                >
                  <h4 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${activeCapability === key ? 'text-white' : 'text-gray-500'}`}>
                    {cap.title}
                  </h4>
                </div>
              ))}
            </div>
            
            {/* Description Details */}
            <div className="lg:col-span-7 bg-[#111936] p-8 md:p-12 border border-white/5 flex flex-col justify-center min-h-[400px]">
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
                    <span className="block text-xs uppercase tracking-widest text-[#8492A6] font-bold mb-4">Framework</span>
                    <p className="text-sm text-white font-medium bg-white/5 p-4 border border-white/5">
                      {capabilities[activeCapability as keyof typeof capabilities].framework}
                    </p>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-[#8492A6] font-bold mb-4">Related Solutions</span>
                    <div className="flex flex-wrap gap-2">
                      {capabilities[activeCapability as keyof typeof capabilities].solutions.map(sol => (
                        <span key={sol} className="text-sm text-[#3454D1] bg-[#3454D1]/10 px-4 py-2 border border-[#3454D1]/20">
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
          <h3 className="text-[#8492A6] uppercase tracking-[0.3em] text-sm font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#8492A6]"></span>
            Phương pháp Giải quyết
          </h3>
          
          <div className="relative">
            {/* Horizontal Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2"></div>
            
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
                  className="bg-[#0A1128] border border-white/10 p-6 md:p-8 hover:bg-white/5 transition-colors relative group"
                >
                  <div className="text-[#3454D1] font-mono text-xl font-bold mb-4">{item.step}.</div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. FRAMEWORK SECTION (The Methodology) */}
      <section className="py-32 px-4 md:px-8 bg-[#0D1530] border-b border-white/10">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-[#8492A6] uppercase tracking-[0.3em] text-sm font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#8492A6]"></span>
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
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-[#8492A6] group-hover:bg-[#3454D1] group-hover:text-white group-hover:border-[#3454D1] transition-all duration-300">
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
          <h3 className="text-[#8492A6] uppercase tracking-[0.3em] text-sm font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#8492A6]"></span>
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
                className="border-l border-white/10 pl-6"
              >
                <div className="text-5xl md:text-7xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-[#8492A6] uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <p className="text-xl text-white font-medium mb-8">Mạng lưới Đơn vị Học thuật & Khách hàng Ứng dụng Giải pháp</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/5 border border-white/10">
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
              <div key={i} className="bg-[#0A1128] aspect-[4/3] flex items-center justify-center p-6 hover:bg-white/5 transition-colors group">
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
      <section className="py-32 px-4 md:px-8 border-b border-white/10 bg-[#060B19]">
        <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
          <Cpu className="w-16 h-16 text-gray-600 mb-8" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Động cơ Công nghệ (Technology Engine)</h2>
          <p className="text-xl text-[#8492A6] mb-12 uppercase tracking-[0.3em]">Được vận hành bởi</p>
          <div className="inline-block border border-white/20 px-12 py-6 bg-white/5">
             <h3 className="text-4xl font-black tracking-widest text-[#3454D1]">FNX-RD</h3>
          </div>
        </div>
      </section>

      {/* 07. CALL TO ACTION */}
      <section className="py-40 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
            Có một bài toán kỹ thuật <br />
            chưa thể giải quyết?
          </h2>
          
          <button className="group bg-white text-[#0A1128] px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#3454D1] hover:text-white transition-all duration-300 flex items-center gap-3">
            Trò chuyện với Chuyên gia
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}