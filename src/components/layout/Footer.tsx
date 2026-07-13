import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-fnx-matrix pt-20 pb-12 px-8 border-t border-white/5 relative z-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <Image src="/assets/logo-fnx.png" alt="FNX Group" width={100} height={32} className="h-8 w-auto mb-6 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            </Link>
            <p className="text-fnx-silver text-sm leading-relaxed max-w-xs">
              Kiến Tạo Bề Mặt. Kiến Tạo Tương Lai.<br/>
              Khởi nguồn từ Việt Nam.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Hệ Sinh Thái</h4>
            <ul className="space-y-4 text-fnx-silver text-sm">
              <li><Link href="/affiliate/xlbm" className="hover:text-fnx-gold-light transition-colors">Đối Tác Chiến Lược VASI</Link></li>
              <li><Link href="/hubs/sc" className="hover:text-fnx-gold-light transition-colors">Chuỗi Cung Ứng</Link></li>
              <li><Link href="/hubs/rd" className="hover:text-fnx-gold-light transition-colors">Nghiên Cứu & Phát Triển</Link></li>
              <li><Link href="/hubs/m" className="hover:text-fnx-gold-light transition-colors">Trung Tâm Sản Xuất</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Tập Đoàn</h4>
            <ul className="space-y-4 text-fnx-silver text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">Về Chúng Tôi</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Tuyển Dụng</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">Tin Tức</Link></li>
              <li><Link href="/engage" className="hover:text-white transition-colors">Liên Hệ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Pháp Lý</h4>
            <ul className="space-y-4 text-fnx-silver text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Chính Sách Bảo Mật</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Điều Khoản Dịch Vụ</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Bảo Mật Hệ Thống</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-fnx-silver/50">
          <p>© 2026 Tập đoàn FNX. Bản quyền đã được bảo hộ.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
