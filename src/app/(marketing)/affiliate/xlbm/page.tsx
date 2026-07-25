'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BanXLBM() {
  const [activeMatrixTab, setActiveMatrixTab] = useState('FDI'); // 'FDI' or 'DN'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-fnx-light-bg text-fnx-light-text pt-32 pb-20 min-h-screen font-sans selection:bg-fnx-gold-light selection:text-black">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Hub Terminal (Hero) */}
        <div className="relative rounded-[2rem] bg-gray-50 p-12 md:p-24 overflow-hidden border border-gray-200 mb-24 group shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,154,61,0.05),transparent_50%)] group-hover:opacity-100 opacity-50 transition-opacity duration-1000"></div>
          <div className="relative z-10 max-w-5xl">
            <div 
              className="inline-flex items-center space-x-4 mb-8 border border-fnx-gold-dark/40 bg-fnx-gold-dark/10 px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-fnx-gold-light animate-pulse"></span>
              <span className="text-fnx-gold-light text-xs font-sans tracking-widest uppercase">Thành viên Hiệp hội VASI Việt Nam</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl text-gray-900 tracking-widest mb-4">BAN XLBM</h1>
            <h2 className="text-fnx-gold-light text-xl md:text-2xl tracking-widest mb-8 uppercase">BAN XỬ LÝ BỀ MẶT - VASI</h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed border-l-2 border-fnx-gold-dark pl-6">
              Đầu mối tiếp nhận, điều phối và thúc đẩy sự phát triển của liên minh công nghiệp xử lý bề mặt Việt Nam.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
              <button className="w-full sm:w-auto px-8 py-4 bg-fnx-gold-dark hover:bg-fnx-gold-light text-black font-sans font-bold tracking-widest text-sm uppercase transition-colors">
                Nhận Báo Giá / Tư Vấn (FDI)
              </button>
              <button className="w-full sm:w-auto px-8 py-4 border border-gray-300 hover:border-gray-500 text-gray-700 font-sans tracking-widest text-sm uppercase transition-colors bg-white">
                Đăng Ký Mạng Lưới
              </button>
            </div>
          </div>
        </div>

        {/* Tầm Nhìn & 3 Giá Trị */}
        <div className="mb-32">
          <div className="mb-16">
             <h3 className="text-3xl text-gray-900 tracking-widest mb-4 uppercase">Nâng Tầm Make In Vietnam</h3>
             <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed">Kết nối chuyên ngành sâu rộng, giảm phân mảnh và thúc đẩy sự bứt phá của ngành xử lý bề mặt nội địa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hiệu Quả - Minh Bạch",
                desc: "Quy hoạch nguồn lực cốt lõi, thống nhất biểu đơn giá cạnh tranh để tối ưu chi phí cho toàn bộ chuỗi cung ứng."
              },
              {
                title: "Công Nghệ Xanh",
                desc: "Cam kết tuân thủ nghiêm ngặt tiêu chuẩn môi trường, tối ưu hóa tài nguyên và phát triển bền vững đạt chuẩn ESG."
              },
              {
                title: "Gắn Kết Hành Động",
                desc: "Chia sẻ tri thức chuyên môn, luân chuyển đơn hàng linh hoạt vì lợi ích chung của liên minh công nghiệp phụ trợ."
              }
            ].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-fnx-gold-dark/30 hover:shadow-md transition-all"
              >
                <div className="text-fnx-gold-light font-sans font-bold text-sm mb-4">GIÁ TRỊ 0{i+1}</div>
                <h4 className="text-xl text-gray-900 mb-4">{val.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ma Trận Lợi Ích */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl text-gray-900 tracking-widest mb-4 uppercase">Ma Trận Lợi Ích Kép</h3>
            <p className="text-gray-500 mb-12">Lựa chọn vai trò của bạn trong Hệ sinh thái</p>

            {/* The Toggle Switch */}
            <div className="inline-flex bg-gray-100 border border-gray-200 rounded-full p-2 relative">
               <div 
                 className={`absolute top-2 bottom-2 w-[calc(50%-8px)] rounded-full transition-all duration-500 ease-out ${activeMatrixTab === 'FDI' ? 'left-2 bg-fnx-gold-dark/10 border border-fnx-gold-dark/30' : 'left-[calc(50%)] bg-white border border-gray-200 shadow-sm'}`}
               ></div>
               <button 
                 onClick={() => setActiveMatrixTab('FDI')}
                 className={`relative z-10 px-8 md:px-16 py-4 font-sans tracking-widest uppercase text-sm font-bold transition-colors ${activeMatrixTab === 'FDI' ? 'text-fnx-gold-dark' : 'text-gray-500 hover:text-gray-900'}`}
               >
                 Khách Hàng (FDI)
               </button>
               <button 
                 onClick={() => setActiveMatrixTab('DN')}
                 className={`relative z-10 px-8 md:px-16 py-4 font-sans tracking-widest uppercase text-sm font-bold transition-colors ${activeMatrixTab === 'DN' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
               >
                 Doanh Nghiệp Sản Xuất
               </button>
            </div>
          </div>

          {/* Grid of Benefit Cards */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {activeMatrixTab === 'FDI' ? (
                <motion.div 
                  key="fdi-cards"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-fnx-gold-dark/30 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-fnx-gold-dark/10 rounded-xl flex items-center justify-center mb-6 border border-fnx-gold-dark/20">
                      <svg className="w-6 h-6 text-fnx-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h4 className="text-xl text-gray-900 mb-4 uppercase">Giải Pháp Một Điểm Dừng</h4>
                    <p className="text-gray-600 text-sm">Tiếp cận dải công nghệ XLBM rộng nhất thông qua một đầu mối duy nhất, giảm chi phí tìm kiếm nhà cung cấp riêng lẻ.</p>
                  </div>
                  <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-fnx-gold-dark/30 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-fnx-gold-dark/10 rounded-xl flex items-center justify-center mb-6 border border-fnx-gold-dark/20">
                      <svg className="w-6 h-6 text-fnx-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <h4 className="text-xl text-gray-900 mb-4 uppercase">Chất Lượng Chuẩn OEM</h4>
                    <p className="text-gray-600 text-sm">Đảm bảo độ chính xác theo tiêu chí của các nhà máy Nhật - EU - Mỹ; hệ thống QC kiểm soát đa bước khắt khe.</p>
                  </div>
                  <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-fnx-gold-dark/30 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-fnx-gold-dark/10 rounded-xl flex items-center justify-center mb-6 border border-fnx-gold-dark/20">
                      <svg className="w-6 h-6 text-fnx-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h4 className="text-xl text-gray-900 mb-4 uppercase">Tối Ưu Chi Phí</h4>
                    <p className="text-gray-600 text-sm">Khối lượng đơn hàng lớn từ hệ sinh thái giúp tối ưu khấu hao máy móc, mang lại biểu giá tốt và ổn định nhất thị trường.</p>
                  </div>
                  <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-fnx-gold-dark/30 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-fnx-gold-dark/10 rounded-xl flex items-center justify-center mb-6 border border-fnx-gold-dark/20">
                      <svg className="w-6 h-6 text-fnx-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h4 className="text-xl text-gray-900 mb-4 uppercase">Chứng Nhận Xanh</h4>
                    <p className="text-gray-600 text-sm">Hệ thống xử lý nước thải và khí thải đạt chuẩn môi trường cao nhất, giúp đối tác FDI hoàn thiện chứng chỉ ESG toàn cầu.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="dn-cards"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-400 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 border border-gray-200">
                      <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <h4 className="text-xl text-gray-900 mb-4 uppercase">Đột Phá Đơn Hàng FDI</h4>
                    <p className="text-gray-600 text-sm">Được Ban XLBM điều phối, kết nối trực tiếp với chuỗi cung ứng của các tập đoàn khổng lồ mà một DN đơn lẻ khó tiếp cận.</p>
                  </div>
                  <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-400 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 border border-gray-200">
                      <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <h4 className="text-xl text-gray-900 mb-4 uppercase">Chống Cạnh Tranh Phá Giá</h4>
                    <p className="text-gray-600 text-sm">Tham gia vào quy hoạch giá sàn bảo vệ biên lợi nhuận, tránh tình trạng manh mún và đầu tư trùng lặp công nghệ.</p>
                  </div>
                  <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-400 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 border border-gray-200">
                      <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>
                    <h4 className="text-xl text-gray-900 mb-4 uppercase">Nâng Tầm Công Nghệ R&D</h4>
                    <p className="text-gray-600 text-sm">Được hỗ trợ cải tiến quy trình kỹ thuật, layout nhà xưởng và tiếp nhận chuyển giao công nghệ mới nhất từ lõi FNX R&D.</p>
                  </div>
                  <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-400 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 border border-gray-200">
                      <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <h4 className="text-xl text-gray-900 mb-4 uppercase">Số Hóa Vận Hành</h4>
                    <p className="text-gray-600 text-sm">Ứng dụng công nghệ quản trị tiến độ và tham gia các chương trình tham quan chéo để tối ưu chi phí quản lý.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 14 Mắt Xích Sinh Thái (Bento Grid in Light Mode) */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl text-gray-900 tracking-widest mb-4 uppercase">14 Mắt Xích Sinh Thái</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Quy tụ các nhà máy chế xuất bề mặt hàng đầu quốc gia, được tổ chức thành 5 Khối công nghệ chuyên biệt dưới sự điều phối của lõi R&D.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            
            {/* Bento 1: R&D & SC */}
            <div className="group relative col-span-1 md:col-span-2 h-[300px] rounded-2xl overflow-hidden border-2 border-fnx-gold-dark/40 shadow-sm bg-white hover:shadow-md transition-all">
               <img src="/images/ecosystem/vasi_rd_sc_bento.png" alt="R&D và SC" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-white/40 to-transparent"></div>
               
               <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <div>
                     <span className="inline-block px-3 py-1 bg-fnx-gold-dark/10 border border-fnx-gold-dark/30 text-fnx-gold-light text-xs font-sans tracking-widest uppercase rounded-full mb-2">Core Engine & Hub</span>
                     <h4 className="text-2xl text-gray-900 uppercase font-bold">Giải Pháp & Điều Phối</h4>
                  </div>
                  <div className="w-3 h-3 bg-fnx-gold-light rounded-full animate-pulse shadow-[0_0_10px_rgba(200,154,61,0.8)]"></div>
               </div>

               {/* Hidden List that slides up on hover */}
               <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white/95 backdrop-blur-md border-t border-fnx-gold-dark/20">
                  <div className="space-y-4">
                     <div>
                       <h5 className="text-fnx-gold-dark text-base font-bold mb-1">Công ty CP NCPT FNX (FNX-RD)</h5>
                       <p className="text-gray-600 text-xs">Nòng cốt R&D và tư vấn giải pháp toàn hệ sinh thái. Chuyên mạ bản mạch tinh vi (6G, IoT), xử lý nước thải, phủ PVD cao cấp.</p>
                     </div>
                     <div className="pt-2 border-t border-gray-200">
                       <h5 className="text-gray-900 text-base font-bold mb-1">FNX Supply Chain (FNX-SC)</h5>
                       <p className="text-gray-600 text-xs">Đầu mối đại diện để điều phối toàn bộ hoạt động chuỗi cung ứng hóa chất và vật liệu của Ban XLBM.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bento 2: Plating */}
            <div className="group relative col-span-1 md:col-span-2 h-[300px] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
               <img src="/images/ecosystem/vasi_plating_bento.png" alt="Mạ Chuyên Sâu" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-white/40 to-transparent"></div>
               
               <div className="absolute top-6 left-6">
                  <h4 className="text-2xl text-gray-900 uppercase font-bold">Mạ Kỹ Thuật</h4>
                  <p className="text-gray-500 text-sm mt-1">Chuyên Sâu & Phổ Thông</p>
               </div>

               {/* Hover List */}
               <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-white/95 backdrop-blur-md h-[80%] overflow-y-auto border-t border-gray-200">
                  <ul className="space-y-4">
                    <li className="border-b border-gray-200 pb-2"><strong className="text-gray-900 block text-sm">T&C Việt Nam</strong><span className="text-gray-500 text-xs">Chrome cứng, Kẽm hợp kim</span></li>
                    <li className="border-b border-gray-200 pb-2"><strong className="text-gray-900 block text-sm">Thiện Mỹ Vĩnh Phúc</strong><span className="text-gray-500 text-xs">Xi mạ trang trí nhựa ABS/PC</span></li>
                    <li className="border-b border-gray-200 pb-2"><strong className="text-gray-900 block text-sm">Thiên Việt Tech</strong><span className="text-gray-500 text-xs">Mạ kẽm điện phân tự động</span></li>
                    <li className="border-b border-gray-200 pb-2"><strong className="text-gray-900 block text-sm">KT & TM Khoa Anh</strong><span className="text-gray-500 text-xs">Mạ kẽm quay, Ni quay</span></li>
                    <li className="border-b border-gray-200 pb-2"><strong className="text-gray-900 block text-sm">Phước Hải VN</strong><span className="text-gray-500 text-xs">Mạ kẽm nhúng nóng gang thép</span></li>
                    <li><strong className="text-gray-900 block text-sm">Tân Thiên Lộc</strong><span className="text-gray-500 text-xs">Dịch vụ mạ kẽm cơ bản</span></li>
                  </ul>
               </div>
            </div>

            {/* Bento 3: Sơn */}
            <div className="group relative col-span-1 md:col-span-2 h-[300px] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
               <img src="/images/ecosystem/vasi_painting_bento.png" alt="Sơn" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-white/40 to-transparent"></div>
               
               <div className="absolute top-6 left-6">
                  <h4 className="text-2xl text-gray-900 uppercase font-bold">Sơn Điện Ly</h4>
               </div>

               <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-white/95 backdrop-blur-md h-full flex flex-col justify-end border-t border-gray-200">
                  <ul className="space-y-3">
                    <li className="border-b border-gray-200 pb-2"><strong className="text-gray-900 block text-sm">MSTS Seikou Tousou</strong><span className="text-gray-500 text-xs">Phủ màng điện ly E-coating (ED)</span></li>
                    <li><strong className="text-gray-900 block text-sm">Cơ khí P&P</strong><span className="text-gray-500 text-xs">Mạ kẽm, Thiếc, Phosphating</span></li>
                  </ul>
               </div>
            </div>

            {/* Bento 4: Anode */}
            <div className="group relative col-span-1 md:col-span-3 h-[300px] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
               <img src="/images/ecosystem/vasi_anode_bento.png" alt="Anode" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-white/40 to-transparent"></div>
               
               <div className="absolute top-6 left-6">
                  <h4 className="text-2xl text-gray-900 uppercase font-bold">Anodized</h4>
               </div>

               <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-white/95 backdrop-blur-md h-full flex flex-col justify-end border-t border-gray-200">
                  <ul className="space-y-3 w-full">
                    <li className="border-b border-gray-200 pb-2"><strong className="text-gray-900 block text-sm">Anotech Vĩnh Phúc</strong><span className="text-gray-500 text-xs">Anode cứng, màu, Chromate nhôm</span></li>
                    <li><strong className="text-gray-900 block text-sm">Việt Nguyên CNC</strong><span className="text-gray-500 text-xs">Gia công chính xác kim loại tấm</span></li>
                  </ul>
               </div>
            </div>

            {/* Bento 5: Xử lý nhiệt */}
            <div className="group relative col-span-1 md:col-span-3 h-[300px] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
               <img src="/images/ecosystem/vasi_heat_bento.png" alt="Xử lý Nhiệt" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-white/40 to-transparent"></div>
               
               <div className="absolute top-6 left-6">
                  <h4 className="text-2xl text-gray-900 uppercase font-bold">Xử Lý Nhiệt Kỹ Thuật Cao</h4>
               </div>

               <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-white/95 backdrop-blur-md h-[80%] flex flex-col justify-end border-t border-gray-200">
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    <li className="border-l-2 border-fnx-gold-dark/50 pl-3"><strong className="text-gray-900 block text-sm">Metal Heat VN</strong><span className="text-gray-500 text-xs">Thấm Carbon, Tôi cảm ứng</span></li>
                    <li className="border-l-2 border-fnx-gold-dark/50 pl-3"><strong className="text-gray-900 block text-sm">FujiTech VN</strong><span className="text-gray-500 text-xs">Lò chân không, tôi dầu</span></li>
                    <li className="border-l-2 border-fnx-gold-dark/50 pl-3"><strong className="text-gray-900 block text-sm">KD Heat Tech (Nhật)</strong><span className="text-gray-500 text-xs">Nhiệt luyện tôi cao tần</span></li>
                  </ul>
               </div>
            </div>

          </div>
        </div>

        {/* VASI Contact Footer (Ecosystem Sync Style) */}
        <div className="bg-white border border-gray-200 rounded-2xl p-12 relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
          <div className="absolute right-0 top-0 w-64 h-64 bg-fnx-gold-dark/5 rounded-full blur-3xl group-hover:bg-fnx-gold-dark/10 transition-colors duration-1000"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-xs font-sans tracking-widest text-gray-500 uppercase mb-4">Trực thuộc Hiệp hội</span>
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-2 font-bold uppercase">Ban Xử Lý Bề Mặt - VASI</h3>
              <p className="text-gray-600">Hiệp hội Doanh nghiệp Công nghiệp Hỗ trợ Việt Nam</p>
              
              <div className="mt-8 space-y-3">
                <p className="text-gray-800"><span className="text-gray-500 mr-2">Người đại diện:</span> <strong className="text-lg">Ông Nguyễn Trí Kiên</strong> - Trưởng Ban XLBM</p>
                <p className="text-gray-800"><span className="text-gray-500 mr-2">Hotline:</span> <strong className="text-lg font-mono tracking-wider text-fnx-gold-dark">0912.212.627</strong></p>
                <p className="text-gray-800"><span className="text-gray-500 mr-2">Email:</span> <strong>xlbm.vasi@gmail.com</strong></p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="flex flex-col items-end">
                <span className="text-gray-500 text-xs mb-1 uppercase font-sans">Đầu Mối Tiếp Nhận Phối Hợp</span>
                <span className="text-fnx-gold-dark font-sans text-sm font-bold uppercase tracking-wider animate-pulse">BAN XLBM VASI_</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}