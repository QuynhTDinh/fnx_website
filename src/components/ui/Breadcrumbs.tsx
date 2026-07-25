'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const routeNames: Record<string, string> = {
  'about': 'Về Chúng Tôi',
  'careers': 'Tuyển Dụng',
  'news': 'Tin Tức',
  'engage': 'Liên Hệ',
  'privacy': 'Chính Sách Bảo Mật',
  'terms': 'Điều Khoản Dịch Vụ',
  'security': 'Bảo Mật',
  'logs': 'Dự Án',
  'hubs': 'Hệ Sinh Thái',
  'sc': 'FNX-SC',
  'rd': 'FNX-RD',
  'm': 'FNX-M',
  'affiliate': 'Đối Tác',
  'xlbm': 'Ban XLBM'
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  const paths = pathname.split('/').filter(p => p);

  return (
    <div className="w-full bg-fnx-matrix/80 backdrop-blur-md border-b border-white/5 py-3 pt-24 px-4 md:px-8 z-40 relative">
      <div className="max-w-[1600px] mx-auto flex items-center text-sm">
        <Link href="/" className="text-fnx-silver hover:text-white transition-colors flex items-center">
          <Home className="w-4 h-4 mr-1" />
          <span className="hidden sm:inline">Trang Chủ</span>
        </Link>
        
        {paths.map((path, index) => {
          const href = '/' + paths.slice(0, index + 1).join('/');
          const isLast = index === paths.length - 1;
          const name = routeNames[path] || path;

          return (
            <React.Fragment key={path}>
              <ChevronRight className="w-4 h-4 text-gray-600 mx-2" />
              {isLast ? (
                <span className="text-fnx-gold-light font-medium tracking-wide">{name}</span>
              ) : (
                <Link href={href} className="text-fnx-silver hover:text-white transition-colors tracking-wide">
                  {name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
