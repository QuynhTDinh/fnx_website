import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BanXLBM() {
  const [activeMatrixTab, setActiveMatrixTab] = useState('FDI'); // 'FDI' or 'DN'
  const [hoveredValue, setHoveredValue] = useState(1);

  return (
    <div className="w-full min-h-screen bg-fnx-matrix text-white pt-20">
      
      {/* 1. Hero Section (Minimal) */}
      <section className="relative w-full px-4 md:px-8 py-24 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(211,163,66,0.15),transparent_50%)]"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-4 mb-8 border border-fnx-gold-dark/40 bg-fnx-gold-dark/10 px-4 py-2 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-fnx-gold-light animate-pulse"></span>
            <span className="text-fnx-gold-light text-xs font-sans tracking-widest uppercase">Đối Tác Chiến Lược VASI</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-widest uppercase mb-8"
          >
            BAN XỬ LÝ BỀ MẶT
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-fnx-gold-dark hover:bg-fnx-gold-light text-black font-sans font-bold tracking-widest text-sm uppercase transition-colors">
              Nhận Báo Giá / Tư Vấn (FDI)
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-white/50 text-white font-sans tracking-widest text-sm uppercase transition-colors">
              Đăng Ký Mạng Lưới
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Tầm Nhìn & 3 Giá Trị (Hover-Expand Grid) */}
      <section className="relative w-full px-4 md:px-8 py-24 bg-[#0A1017] border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-widest uppercase text-white mb-6">Nâng Tầm Make In Vietnam</h2>
             <p className="text-fnx-silver text-xl max-w-3xl mx-auto">Kết nối chuyên ngành sâu rộng, giảm phân mảnh và thúc đẩy sự bứt phá của ngành xử lý bề mặt nội địa.</p>
          </div>

          {/* Expandable Accordion Layout */}
          <div className="flex flex-col md:flex-row h-auto md:h-[400px] gap-4 w-full">
            {/* Value 1 */}
            <div 
              onMouseEnter={() => setHoveredValue(1)}
              className={`relative cursor-pointer transition-all duration-500 ease-out border border-white/10 rounded-2xl overflow-hidden bg-fnx-matrix flex flex-col justify-end p-8 ${hoveredValue === 1 ? 'md:w-[50%]' : 'md:w-[25%]'}`}
            >
              <div className={`absolute top-8 left-8 text-5xl font-tech font-bold transition-colors duration-500 ${hoveredValue === 1 ? 'text-fnx-gold-light' : 'text-white/20'}`}>01</div>
              <h3 className="text-2xl font-bold text-white mb-4 z-10 relative">Hiệu Quả - Minh Bạch</h3>
              <div className={`overflow-hidden transition-all duration-500 ${hoveredValue === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-0 md:opacity-0 max-h-40 opacity-100'}`}>
                <p className="text-fnx-silver mt-2">Quy hoạch nguồn lực cốt lõi, thống nhất biểu đơn giá cạnh tranh để tối ưu chi phí cho toàn bộ chuỗi cung ứng.</p>
              </div>
            </div>

            {/* Value 2 */}
            <div 
              onMouseEnter={() => setHoveredValue(2)}
              className={`relative cursor-pointer transition-all duration-500 ease-out border border-white/10 rounded-2xl overflow-hidden bg-fnx-matrix flex flex-col justify-end p-8 ${hoveredValue === 2 ? 'md:w-[50%]' : 'md:w-[25%]'}`}
            >
              <div className={`absolute top-8 left-8 text-5xl font-tech font-bold transition-colors duration-500 ${hoveredValue === 2 ? 'text-fnx-gold-light' : 'text-white/20'}`}>02</div>
              <h3 className="text-2xl font-bold text-white mb-4 z-10 relative">Công Nghệ Xanh</h3>
              <div className={`overflow-hidden transition-all duration-500 ${hoveredValue === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-0 md:opacity-0 max-h-40 opacity-100'}`}>
                <p className="text-fnx-silver mt-2">Cam kết tuân thủ nghiêm ngặt tiêu chuẩn môi trường, tối ưu hóa tài nguyên và phát triển bền vững đạt chuẩn ESG.</p>
              </div>
            </div>

            {/* Value 3 */}
            <div 
              onMouseEnter={() => setHoveredValue(3)}
              className={`relative cursor-pointer transition-all duration-500 ease-out border border-white/10 rounded-2xl overflow-hidden bg-fnx-matrix flex flex-col justify-end p-8 ${hoveredValue === 3 ? 'md:w-[50%]' : 'md:w-[25%]'}`}
            >
              <div className={`absolute top-8 left-8 text-5xl font-tech font-bold transition-colors duration-500 ${hoveredValue === 3 ? 'text-fnx-gold-light' : 'text-white/20'}`}>03</div>
              <h3 className="text-2xl font-bold text-white mb-4 z-10 relative">Gắn Kết Hành Động</h3>
              <div className={`overflow-hidden transition-all duration-500 ${hoveredValue === 3 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-0 md:opacity-0 max-h-40 opacity-100'}`}>
                <p className="text-fnx-silver mt-2">Chia sẻ tri thức chuyên môn, luân chuyển đơn hàng linh hoạt vì lợi ích chung của liên minh công nghiệp phụ trợ.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ma Trận Lợi Ích (Interactive Toggle) */}
      <section className="relative w-full px-4 md:px-8 py-32 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-widest uppercase text-white mb-4">Ma Trận Lợi Ích Kép</h2>
            <p className="text-fnx-silver mb-12">Lựa chọn vai trò của bạn trong Hệ sinh thái</p>

            {/* The Toggle Switch */}
            <div className="inline-flex bg-[#0A1017] border border-white/10 rounded-full p-2 relative">
               <div 
                 className={`absolute top-2 bottom-2 w-1/2 rounded-full transition-all duration-500 ease-out ${activeMatrixTab === 'FDI' ? 'left-2 bg-fnx-gold-dark/20 border border-fnx-gold-dark' : 'left-[calc(50%-8px)] bg-white/10 border border-white/20'}`}
               ></div>
               <button 
                 onClick={() => setActiveMatrixTab('FDI')}
                 className={`relative z-10 px-8 md:px-16 py-4 font-sans tracking-widest uppercase text-sm font-bold transition-colors ${activeMatrixTab === 'FDI' ? 'text-fnx-gold-light' : 'text-fnx-silver hover:text-white'}`}
               >
                 Khách Hàng (FDI)
               </button>
               <button 
                 onClick={() => setActiveMatrixTab('DN')}
                 className={`relative z-10 px-8 md:px-16 py-4 font-sans tracking-widest uppercase text-sm font-bold transition-colors ${activeMatrixTab === 'DN' ? 'text-white' : 'text-fnx-silver hover:text-white'}`}
               >
                 Doanh Nghiệp Sản Xuất
               </button>
            </div>
          </div>

          {/* Grid of 4 Benefit Cards (Flipping content based on activeTab) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative min-h-[400px]">
             <AnimatePresence mode="wait">
                {activeMatrixTab === 'FDI' ? (
                  <motion.div 
                    key="fdi-cards"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {/* FDI Card 1 */}
                    <div className="group bg-[#0A1017] border border-fnx-gold-dark/20 rounded-2xl p-8 hover:bg-fnx-gold-dark/5 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-fnx-gold-dark/20 rounded-xl flex items-center justify-center mb-6 border border-fnx-gold-dark/30">
                        <svg className="w-6 h-6 text-fnx-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 uppercase">Giải Pháp Một Điểm Dừng</h3>
                      <p className="text-fnx-silver text-sm opacity-60 group-hover:opacity-100 transition-opacity">Tiếp cận dải công nghệ XLBM rộng nhất thông qua một đầu mối duy nhất, giảm chi phí tìm kiếm nhà cung cấp riêng lẻ.</p>
                    </div>
                    {/* FDI Card 2 */}
                    <div className="group bg-[#0A1017] border border-fnx-gold-dark/20 rounded-2xl p-8 hover:bg-fnx-gold-dark/5 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-fnx-gold-dark/20 rounded-xl flex items-center justify-center mb-6 border border-fnx-gold-dark/30">
                        <svg className="w-6 h-6 text-fnx-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 uppercase">Chất Lượng Chuẩn OEM</h3>
                      <p className="text-fnx-silver text-sm opacity-60 group-hover:opacity-100 transition-opacity">Đảm bảo độ chính xác theo tiêu chí của các nhà máy Nhật - EU - Mỹ; hệ thống QC kiểm soát đa bước khắt khe.</p>
                    </div>
                    {/* FDI Card 3 */}
                    <div className="group bg-[#0A1017] border border-fnx-gold-dark/20 rounded-2xl p-8 hover:bg-fnx-gold-dark/5 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-fnx-gold-dark/20 rounded-xl flex items-center justify-center mb-6 border border-fnx-gold-dark/30">
                        <svg className="w-6 h-6 text-fnx-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 uppercase">Tối Ưu Chi Phí</h3>
                      <p className="text-fnx-silver text-sm opacity-60 group-hover:opacity-100 transition-opacity">Khối lượng đơn hàng lớn từ hệ sinh thái giúp tối ưu khấu hao máy móc, mang lại biểu giá tốt và ổn định nhất thị trường.</p>
                    </div>
                    {/* FDI Card 4 */}
                    <div className="group bg-[#0A1017] border border-fnx-gold-dark/20 rounded-2xl p-8 hover:bg-fnx-gold-dark/5 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-fnx-gold-dark/20 rounded-xl flex items-center justify-center mb-6 border border-fnx-gold-dark/30">
                        <svg className="w-6 h-6 text-fnx-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 uppercase">Chứng Nhận Xanh</h3>
                      <p className="text-fnx-silver text-sm opacity-60 group-hover:opacity-100 transition-opacity">Hệ thống xử lý nước thải và khí thải đạt chuẩn môi trường cao nhất, giúp đối tác FDI hoàn thiện chứng chỉ ESG toàn cầu.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="dn-cards"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {/* DN Card 1 */}
                    <div className="group bg-[#0A1017] border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/20">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 uppercase">Đột Phá Đơn Hàng FDI</h3>
                      <p className="text-fnx-silver text-sm opacity-60 group-hover:opacity-100 transition-opacity">Được Ban XLBM điều phối, kết nối trực tiếp với chuỗi cung ứng của các tập đoàn khổng lồ mà một DN đơn lẻ khó tiếp cận.</p>
                    </div>
                    {/* DN Card 2 */}
                    <div className="group bg-[#0A1017] border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/20">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 uppercase">Chống Cạnh Tranh Phá Giá</h3>
                      <p className="text-fnx-silver text-sm opacity-60 group-hover:opacity-100 transition-opacity">Tham gia vào quy hoạch giá sàn bảo vệ biên lợi nhuận, tránh tình trạng manh mún và đầu tư trùng lặp công nghệ.</p>
                    </div>
                    {/* DN Card 3 */}
                    <div className="group bg-[#0A1017] border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/20">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 uppercase">Nâng Tầm Công Nghệ R&D</h3>
                      <p className="text-fnx-silver text-sm opacity-60 group-hover:opacity-100 transition-opacity">Được hỗ trợ cải tiến quy trình kỹ thuật, layout nhà xưởng và tiếp nhận chuyển giao công nghệ mới nhất từ lõi FNX R&D.</p>
                    </div>
                    {/* DN Card 4 */}
                    <div className="group bg-[#0A1017] border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/20">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 uppercase">Số Hóa Vận Hành</h3>
                      <p className="text-fnx-silver text-sm opacity-60 group-hover:opacity-100 transition-opacity">Ứng dụng công nghệ quản trị tiến độ và tham gia các chương trình tham quan chéo để tối ưu chi phí quản lý.</p>
                    </div>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. Bản Đồ Năng Lực (Interactive Bento Grid) */}
      <section className="relative w-full px-4 md:px-8 py-32 bg-[#05080C] border-b border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-widest uppercase text-white mb-4">14 Mắt Xích Sinh Thái</h2>
            <p className="text-fnx-silver max-w-2xl mx-auto">Quy tụ các nhà máy chế xuất bề mặt hàng đầu quốc gia, được tổ chức thành 5 Khối công nghệ chuyên biệt dưới sự điều phối của lõi R&D.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">
            
            {/* Bento 1: R&D & SC (The Brain - Highlighted Col-Span-2) */}
            <div className="group relative col-span-1 md:col-span-2 row-span-2 rounded-2xl overflow-hidden border-2 border-fnx-gold-dark/60 shadow-[0_0_30px_rgba(211,163,66,0.15)] bg-[#0A1017]">
               <img src="/images/ecosystem/vasi_rd_sc_bento.png" alt="R&D và SC" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#05080C] via-[#05080C]/80 to-transparent"></div>
               
               <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <div>
                     <span className="inline-block px-3 py-1 bg-fnx-gold-dark/20 border border-fnx-gold-dark text-fnx-gold-light text-xs font-sans tracking-widest uppercase rounded-full mb-2">Core Engine & Hub</span>
                     <h3 className="text-3xl font-sans font-bold text-white uppercase">Giải Pháp & Điều Phối</h3>
                  </div>
                  <div className="w-3 h-3 bg-fnx-gold-light rounded-full animate-pulse shadow-[0_0_10px_rgba(211,163,66,0.8)]"></div>
               </div>

               {/* Hidden List that slides up on hover */}
               <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-black/60 backdrop-blur-md border-t border-fnx-gold-dark/30">
                  <div className="space-y-4">
                     <div>
                       <h4 className="text-fnx-gold-light font-bold text-lg mb-1">Công ty CP NCPT FNX (FNX-RD)</h4>
                       <p className="text-fnx-silver text-sm">Nòng cốt R&D và tư vấn giải pháp toàn hệ sinh thái. Chuyên mạ bản mạch tinh vi (6G, IoT), xử lý nước thải, phủ PVD cao cấp.</p>
                     </div>
                     <div className="pt-4 border-t border-white/10">
                       <h4 className="text-white font-bold text-lg mb-1">FNX Supply Chain (FNX-SC)</h4>
                       <p className="text-fnx-silver text-sm">Đầu mối đại diện để điều phối toàn bộ hoạt động chuỗi cung ứng hóa chất và vật liệu của Ban XLBM.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bento 2: Mạ */}
            <div className="group relative col-span-1 md:col-span-1 row-span-2 rounded-2xl overflow-hidden border border-white/10 bg-[#0A1017]">
               <img src="/images/ecosystem/vasi_plating_bento.png" alt="Mạ Chuyên Sâu" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#05080C] via-black/40 to-transparent"></div>
               
               <div className="absolute top-6 left-6">
                  <h3 className="text-2xl font-sans font-bold text-white uppercase">Mạ Kỹ Thuật</h3>
                  <p className="text-fnx-silver text-sm mt-1">Chuyên Sâu & Phổ Thông</p>
               </div>

               {/* Hover List */}
               <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-black/80 backdrop-blur-md h-[80%] overflow-y-auto custom-scrollbar">
                  <ul className="space-y-4">
                    <li className="border-b border-white/10 pb-2"><strong className="text-white block text-sm">T&C Việt Nam</strong><span className="text-fnx-silver text-xs">Chrome cứng, Kẽm hợp kim</span></li>
                    <li className="border-b border-white/10 pb-2"><strong className="text-white block text-sm">Thiện Mỹ Vĩnh Phúc</strong><span className="text-fnx-silver text-xs">Xi mạ trang trí nhựa ABS/PC</span></li>
                    <li className="border-b border-white/10 pb-2"><strong className="text-white block text-sm">Thiên Việt Tech</strong><span className="text-fnx-silver text-xs">Mạ kẽm điện phân tự động</span></li>
                    <li className="border-b border-white/10 pb-2"><strong className="text-white block text-sm">KT & TM Khoa Anh</strong><span className="text-fnx-silver text-xs">Mạ kẽm quay, Ni quay</span></li>
                    <li className="border-b border-white/10 pb-2"><strong className="text-white block text-sm">Phước Hải VN</strong><span className="text-fnx-silver text-xs">Mạ kẽm nhúng nóng gang thép</span></li>
                    <li><strong className="text-white block text-sm">Tân Thiên Lộc</strong><span className="text-fnx-silver text-xs">Dịch vụ mạ kẽm cơ bản</span></li>
                  </ul>
               </div>
            </div>

            {/* Bento 3: Sơn */}
            <div className="group relative col-span-1 rounded-2xl overflow-hidden border border-white/10 bg-[#0A1017]">
               <img src="/images/ecosystem/vasi_painting_bento.png" alt="Sơn" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#05080C] via-black/40 to-transparent"></div>
               
               <div className="absolute top-6 left-6">
                  <h3 className="text-xl font-sans font-bold text-white uppercase">Sơn Điện Ly</h3>
               </div>

               <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-black/80 backdrop-blur-md h-full flex flex-col justify-end">
                  <ul className="space-y-3">
                    <li className="border-b border-white/10 pb-2"><strong className="text-white block text-sm">MSTS Seikou Tousou</strong><span className="text-fnx-silver text-xs">Phủ màng điện ly E-coating (ED)</span></li>
                    <li><strong className="text-white block text-sm">Cơ khí P&P</strong><span className="text-fnx-silver text-xs">Mạ kẽm, Thiếc, Phosphating</span></li>
                  </ul>
               </div>
            </div>

            {/* Bento 4: Anode (Stacked under Sơn) */}
            <div className="group relative col-span-1 rounded-2xl overflow-hidden border border-white/10 bg-[#0A1017]">
               <img src="/images/ecosystem/vasi_anode_bento.png" alt="Anode" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#05080C] via-black/40 to-transparent"></div>
               
               <div className="absolute top-6 left-6">
                  <h3 className="text-xl font-sans font-bold text-white uppercase">Anodized</h3>
               </div>

               <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-black/80 backdrop-blur-md h-full flex flex-col justify-end">
                  <ul className="space-y-3">
                    <li className="border-b border-white/10 pb-2"><strong className="text-white block text-sm">Anotech Vĩnh Phúc</strong><span className="text-fnx-silver text-xs">Anode cứng, màu, Chromate nhôm</span></li>
                    <li><strong className="text-white block text-sm">Việt Nguyên CNC</strong><span className="text-fnx-silver text-xs">Gia công chính xác kim loại tấm</span></li>
                  </ul>
               </div>
            </div>

            {/* Bento 5: Xử lý nhiệt */}
            <div className="group relative col-span-1 md:col-span-2 rounded-2xl overflow-hidden border border-white/10 bg-[#0A1017]">
               <img src="/images/ecosystem/vasi_heat_bento.png" alt="Xử lý Nhiệt" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#05080C] via-[#05080C]/80 to-transparent"></div>
               
               <div className="absolute top-6 left-6">
                  <h3 className="text-2xl font-sans font-bold text-white uppercase">Xử Lý Nhiệt Kỹ Thuật Cao</h3>
               </div>

               <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-black/80 backdrop-blur-md h-[80%] flex flex-col justify-end">
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <li className="border-l-2 border-fnx-gold-dark/50 pl-3"><strong className="text-white block text-sm">Metal Heat VN</strong><span className="text-fnx-silver text-xs">Thấm Carbon, Tôi cảm ứng</span></li>
                    <li className="border-l-2 border-fnx-gold-dark/50 pl-3"><strong className="text-white block text-sm">FujiTech VN</strong><span className="text-fnx-silver text-xs">Lò chân không, tôi dầu</span></li>
                    <li className="border-l-2 border-fnx-gold-dark/50 pl-3"><strong className="text-white block text-sm">KD Heat Tech (Nhật)</strong><span className="text-fnx-silver text-xs">Nhiệt luyện tôi cao tần</span></li>
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. VASI Contact Footer */}
      <section className="relative w-full bg-[#030508] py-16 border-t-4 border-fnx-gold-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 border border-white/20 rounded-full text-xs font-sans tracking-widest text-fnx-silver uppercase mb-4">Trực thuộc Hiệp hội</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ban Xử Lý Bề Mặt - VASI</h3>
            <p className="text-fnx-silver">Hiệp hội Doanh nghiệp Công nghiệp Hỗ trợ Việt Nam</p>
          </div>
          
          <div className="bg-[#0A1017] border border-white/10 rounded-xl p-8 mt-12 inline-block w-full max-w-lg text-left">
            <h4 className="text-fnx-gold-light font-sans tracking-widest uppercase text-sm mb-4 border-b border-white/10 pb-2">Đầu Mối Tiếp Nhận Phối Hợp</h4>
            <div className="space-y-3">
              <p className="text-white"><span className="text-fnx-silver mr-2">Người đại diện:</span> <strong className="text-lg">Ông Nguyễn Trí Kiên</strong> - Trưởng Ban XLBM</p>
              <p className="text-white"><span className="text-fnx-silver mr-2">Hotline:</span> <strong className="text-lg font-mono tracking-wider text-fnx-gold-light">0912.212.627</strong></p>
              <p className="text-white"><span className="text-fnx-silver mr-2">Email:</span> <strong>xlbm.vasi@gmail.com</strong></p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}