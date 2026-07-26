'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  ArrowRight, 
  Cpu, 
  GitMerge, 
  Users, 
  BookOpen, 
  Microscope, 
  Rocket, 
  Building2, 
  Globe, 
  Handshake, 
  Network 
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [phoenixGlow, setPhoenixGlow] = React.useState(false);
  
  const triggerPhoenixGlow = () => {
    setPhoenixGlow(true);
    setTimeout(() => setPhoenixGlow(false), 1200);
  };
  
  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="w-full bg-[#F8FAFC] text-gray-900 min-h-screen font-sans overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Banner Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/banner/Hero.jpg" 
            alt="FNX Industrial Banner" 
            className="w-full h-full object-cover"
          />
          {/* Overlay to align with light mode but still highlight text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
        </div>

        <div className="max-w-[1200px] mx-auto w-full px-6 md:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <span className="text-xs uppercase text-fnx-gold-light font-bold tracking-[0.25em] mb-4 block">
              ABOUT FNX
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.2] font-tech text-white flex flex-col">
              <span>Shaping surface</span>
              <span className="pl-12 sm:pl-20 text-gray-300/90">Shaping future</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: VÌ SAO FNX RA ĐỜI? */}
      <section className="relative w-full py-20 bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="flex flex-col justify-center"
            >
              <span className="text-6xl md:text-7xl font-sans font-bold text-gray-150 mb-2 leading-none block">
                01
              </span>
              <h2 className="text-3xl md:text-4xl text-fnx-navy font-bold tracking-tight mb-6 font-sans uppercase">
                VÌ SAO FNX RA ĐỜI?
              </h2>
              <div className="space-y-4 text-gray-600 font-sans leading-relaxed text-base md:text-lg">
                <p>
                  Ngành Hóa chất, Dầu khí và Công nghiệp hỗ trợ Việt Nam đang đứng trước nhiều cơ hội phát triển. Tuy nhiên, khoảng cách giữa nghiên cứu, sản xuất, đầu tư và thị trường vẫn còn là một thách thức lớn.
                </p>
                <p className="font-semibold text-gray-800">
                  Chúng tôi tin rằng sự phát triển bền vững chỉ có thể đạt được khi tri thức, công nghệ và năng lực thực thi được kết nối thành một hệ sinh thái thống nhất.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] w-full"
              style={{
                maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%)'
              }}
            >
              <img 
                src="/images/banner/banner section 2.png" 
                alt="Vì sao FNX ra đời" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: FNX LÀM GÌ? */}
      <section className="relative w-full py-20 bg-[#F8FAFC] border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Title */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-4"
            >
              <span className="text-6xl md:text-7xl font-sans font-bold text-gray-200 mb-2 leading-none block">
                02
              </span>
              <h2 className="text-3xl md:text-4xl text-fnx-navy font-bold tracking-tight mb-2 font-sans uppercase">
                FNX LÀM GÌ?
              </h2>
              <p className="text-gray-500 font-sans text-sm md:text-base">
                Chúng tôi kiến tạo một hệ sinh thái để các giải pháp có thể tạo ra giá trị lâu dài.
              </p>
            </motion.div>

            {/* Cards */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Card 1: BUILD */}
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-fnx-navy/20 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="p-4 bg-fnx-navy/5 rounded-2xl mb-5 group-hover:bg-fnx-navy/10 transition-colors">
                  <Cpu className="w-8 h-8 text-fnx-navy" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-wider uppercase font-sans">
                  BUILD
                </h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  Phát triển giải pháp và công nghệ nhằm giải quyết các bài toán của ngành công nghiệp.
                </p>
              </motion.div>

              {/* Card 2: CONNECT */}
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-fnx-navy/20 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="p-4 bg-fnx-teal/5 rounded-2xl mb-5 group-hover:bg-fnx-teal/10 transition-colors">
                  <GitMerge className="w-8 h-8 text-fnx-teal" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-wider uppercase font-sans">
                  CONNECT
                </h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  Kết nối chuyên gia, viện nghiên cứu, doanh nghiệp và đối tác để tạo nên hệ sinh thái hợp tác.
                </p>
              </motion.div>

              {/* Card 3: ENABLE */}
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-fnx-navy/20 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="p-4 bg-fnx-gold-dark/5 rounded-2xl mb-5 group-hover:bg-fnx-gold-dark/10 transition-colors">
                  <Users className="w-8 h-8 text-fnx-gold-dark" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-wider uppercase font-sans">
                  ENABLE
                </h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  Đồng hành cùng doanh nghiệp trong quá trình triển khai, chuyển giao và nâng cao năng lực.
                </p>
              </motion.div>
            </motion.div>
            
          </div>

          {/* Quote Block */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white p-6 md:p-8 rounded-2xl border-l-4 border-fnx-gold-light shadow-md border border-gray-200/60"
          >
            <p className="text-fnx-navy font-sans font-bold text-lg md:text-2xl leading-relaxed">
              FNX không chỉ cung cấp giải pháp, mà kiến tạo một hệ sinh thái để các giải pháp có thể tạo ra giá trị lâu dài.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: CONNECT & CONNECT */}
      <section className="relative w-full py-20 bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-5"
            >
              <span className="text-6xl md:text-7xl font-sans font-bold text-gray-150 mb-2 leading-none block">
                03
              </span>
              <h2 className="text-3xl md:text-4xl text-fnx-navy font-bold tracking-tight mb-2 font-sans uppercase">
                CONNECT & CONNECT
              </h2>
              <span className="text-xs uppercase text-fnx-teal font-bold tracking-widest mb-6 block">
                Kết nối để tạo ra nhiều giá trị hơn
              </span>
              <p className="text-gray-600 font-sans leading-relaxed text-base md:text-lg">
                Chúng tôi tin rằng những giá trị bền vững được tạo ra khi các nguồn lực không hoạt động riêng lẻ, mà được kết nối để cùng giải quyết những bài toán lớn của ngành công nghiệp.
              </p>
            </motion.div>

            {/* Right Connection Diagram */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 p-4 relative overflow-hidden"
            >
              {/* Connector lines SVG */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Top-to-bottom lines */}
                  <line x1="12.5%" y1="25%" x2="12.5%" y2="75%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="37.5%" y1="25%" x2="37.5%" y2="75%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="62.5%" y1="25%" x2="62.5%" y2="75%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="87.5%" y1="25%" x2="87.5%" y2="75%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Horizontal lines */}
                  <line x1="12.5%" y1="25%" x2="87.5%" y2="25%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="12.5%" y1="75%" x2="87.5%" y2="75%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />

                  {/* Highlighted active connecting paths */}
                  <path d="M 12.5% 25% L 12.5% 75%" stroke="url(#teal-grad)" strokeWidth="2" className="animate-[dash_3s_linear_infinite]" />
                  <path d="M 37.5% 25% L 37.5% 75%" stroke="url(#navy-grad)" strokeWidth="2" className="animate-[dash_3s_linear_infinite_1.5s]" />
                  <path d="M 62.5% 25% L 62.5% 75%" stroke="url(#gold-grad)" strokeWidth="2" className="animate-[dash_3s_linear_infinite_0.8s]" />
                  <path d="M 87.5% 25% L 87.5% 75%" stroke="url(#teal-grad)" strokeWidth="2" className="animate-[dash_3s_linear_infinite_2.2s]" />

                  <defs>
                    <linearGradient id="teal-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0D9488" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0D9488" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="navy-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#153C8A" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#153C8A" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#C89A3D" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#C89A3D" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Grid of Nodes */}
              <div className="relative z-10 grid grid-rows-2 gap-16 md:gap-24">
                
                {/* Top Row: Academic & Tech */}
                <div className="grid grid-cols-4 gap-2 text-center">
                  
                  {/* Tri thức */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:border-fnx-teal transition-all duration-300 group">
                      <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-fnx-teal group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-gray-700 mt-2 font-sans tracking-wider uppercase">Tri thức</span>
                  </div>

                  {/* Công nghệ */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:border-fnx-navy transition-all duration-300 group">
                      <Cpu className="w-5 h-5 md:w-6 md:h-6 text-fnx-navy group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-gray-700 mt-2 font-sans tracking-wider uppercase">Công nghệ</span>
                  </div>

                  {/* Nghiên cứu */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:border-fnx-gold-dark transition-all duration-300 group">
                      <Microscope className="w-5 h-5 md:w-6 md:h-6 text-fnx-gold-dark group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-gray-700 mt-2 font-sans tracking-wider uppercase">Nghiên cứu</span>
                  </div>

                  {/* Ứng dụng */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:border-fnx-teal transition-all duration-300 group">
                      <Rocket className="w-5 h-5 md:w-6 md:h-6 text-fnx-teal group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-gray-700 mt-2 font-sans tracking-wider uppercase">Ứng dụng</span>
                  </div>

                </div>

                {/* Bottom Row: Market & Industry */}
                <div className="grid grid-cols-4 gap-2 text-center">
                  
                  {/* Doanh nghiệp */}
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] md:text-xs font-bold text-gray-700 mb-2 font-sans tracking-wider uppercase order-last md:order-first">Doanh nghiệp</span>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:border-fnx-teal transition-all duration-300 group">
                      <Building2 className="w-5 h-5 md:w-6 md:h-6 text-fnx-teal group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Thị trường */}
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] md:text-xs font-bold text-gray-700 mb-2 font-sans tracking-wider uppercase order-last md:order-first">Thị trường</span>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:border-fnx-navy transition-all duration-300 group">
                      <Globe className="w-5 h-5 md:w-6 md:h-6 text-fnx-navy group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Đối tác */}
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] md:text-xs font-bold text-gray-700 mb-2 font-sans tracking-wider uppercase order-last md:order-first">Đối tác</span>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:border-fnx-gold-dark transition-all duration-300 group">
                      <Handshake className="w-5 h-5 md:w-6 md:h-6 text-fnx-gold-dark group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Hệ sinh thái */}
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] md:text-xs font-bold text-gray-700 mb-2 font-sans tracking-wider uppercase order-last md:order-first">Hệ sinh thái</span>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:border-fnx-teal transition-all duration-300 group">
                      <Network className="w-5 h-5 md:w-6 md:h-6 text-fnx-teal group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5: CÂU CHUYỆN VỀ FNX */}
      <section className="relative w-full py-20 bg-[#F8FAFC] border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Phoenix Graphic/Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex items-center justify-center relative cursor-pointer"
            >
              <motion.img 
                src="/images/banner/banner section 5.png" 
                alt="Inspired by the Phoenix" 
                className="w-full h-auto max-w-[450px] object-contain mix-blend-multiply transition-all duration-500"
                onClick={triggerPhoenixGlow}
                animate={phoenixGlow ? {
                  scale: [1, 1.08, 1],
                  filter: [
                    'drop-shadow(0 0 0px rgba(200, 154, 61, 0))',
                    'drop-shadow(0 0 35px rgba(200, 154, 61, 0.9))',
                    'drop-shadow(0 0 0px rgba(200, 154, 61, 0))'
                  ]
                } : {
                  scale: 1,
                  filter: 'drop-shadow(0 0 0px rgba(200, 154, 61, 0))'
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <span className="text-6xl md:text-7xl font-sans font-bold text-gray-150 mb-2 leading-none block">
                04
              </span>
              <h2 className="text-3xl md:text-4xl text-fnx-navy font-bold tracking-tight mb-2 font-sans uppercase">
                CÂU CHUYỆN VỀ FNX
              </h2>
              <span className="text-xs uppercase text-fnx-gold-dark font-bold tracking-widest mb-6 block">
                Inspired by the Phoenix
              </span>
              
              <div className="space-y-4 text-gray-600 font-sans leading-relaxed text-base mb-6">
                <p>
                  Tên gọi <strong>FNX</strong> được lấy cảm hứng từ <strong>Phoenix</strong> (Phượng Hoàng) – biểu tượng của sự tái sinh, đổi mới và khát vọng không ngừng vươn lên.
                </p>
                <p>
                  Đó cũng là tinh thần mà FNX theo đuổi trong hành trình đồng hành cùng doanh nghiệp Việt Nam làm chủ công nghệ và kiến tạo những giá trị bền vững.
                </p>
              </div>

              {/* Characters breakdown grid */}
              <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-200 py-6 mb-6 font-sans">
                {/* F */}
                <div>
                  <h4 className="text-3xl font-extrabold text-fnx-gold-dark mb-2">F</h4>
                  <ul className="text-xs space-y-1 text-gray-500 font-medium">
                    <li>• Future</li>
                    <li>• Finish</li>
                    <li>• Fire</li>
                    <li>• Fabrication</li>
                  </ul>
                </div>
                {/* N */}
                <div className="border-l border-r border-gray-200 px-4">
                  <h4 className="text-3xl font-extrabold text-fnx-gold-dark mb-2">N</h4>
                  <ul className="text-xs space-y-1 text-gray-500 font-medium">
                    <li>• New</li>
                    <li>• Network</li>
                    <li>• Newborn</li>
                    <li>• Nation</li>
                  </ul>
                </div>
                {/* X */}
                <div className="pl-2">
                  <h4 className="text-3xl font-extrabold text-fnx-gold-dark mb-2">X</h4>
                  <ul className="text-xs space-y-1 text-gray-500 font-medium">
                    <li>• Excellence</li>
                    <li>• Xtra Value</li>
                    <li>• Xponential</li>
                    <li>• Xpot</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-gray-500 font-sans leading-relaxed italic">
                Mỗi chữ cái đại diện cho một giá trị, nhưng khi kết hợp lại, FNX mang ý nghĩa của một tổ chức luôn đổi mới, kết nối và không ngừng kiến tạo nhằm góp phần nâng cao năng lực của ngành công nghiệp Việt Nam.
              </p>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* SECTION 6: TẦM NHÌN */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        {/* Subtle background graphic using section 6 banner */}
        <div className="absolute inset-0 z-0 opacity-[0.35]">
          <img 
            src="/images/banner/section 6.png" 
            alt="FNX Vision Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 w-full">
            
            {/* Title & Vision content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-3xl"
            >
              <span className="text-6xl md:text-7xl font-sans font-bold text-gray-150 mb-2 leading-none block">
                05
              </span>
              <h2 className="text-3xl md:text-4xl text-fnx-navy font-bold tracking-tight mb-2 font-sans uppercase">
                KHÁT VỌNG
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold font-tech tracking-wide text-gray-800 mb-6 uppercase">
                Make in Vietnam. Made in Vietnam.
              </h3>
              
              <div className="space-y-4 text-gray-600 font-sans leading-relaxed text-base md:text-lg">
                <p>
                  Chúng tôi tin rằng tương lai của ngành công nghiệp Việt Nam sẽ được xây dựng từ năng lực làm chủ công nghệ, kết nối hệ sinh thái và cùng nhau nâng cao tiêu chuẩn của toàn ngành.
                </p>
                <p>
                  Đó cũng là cách FNX hiện thực hóa khát vọng Make in Vietnam – Made in Vietnam, góp phần đưa doanh nghiệp Việt Nam tham gia sâu hơn vào chuỗi giá trị công nghiệp toàn cầu.
                </p>
              </div>
            </motion.div>

            {/* CTA action right side */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex justify-end items-center self-end w-full lg:w-auto whitespace-nowrap"
            >
              <Link 
                href="/" 
                className="inline-flex items-center gap-3 px-8 py-4 border border-fnx-navy/40 hover:border-fnx-navy bg-transparent hover:bg-fnx-navy/5 text-fnx-navy rounded-full font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-sm"
              >
                <span>KHÁM PHÁ CÁC GIẢI PHÁP CỦA FNX</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
