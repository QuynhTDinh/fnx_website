'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const routeNames: Record<string, string> = {
  'about': 'Về chúng tôi',
  'careers': 'Tuyển dụng',
  'news': 'Tin tức',
  'engage': 'Liên hệ',
  'privacy': 'Chính sách bảo mật',
  'terms': 'Điều khoản dịch vụ',
  'security': 'Bảo mật',
  'logs': 'Dự án',
  'hubs': 'Hệ sinh thái',
  'sc': 'FNX-SC',
  'rd': 'FNX-RD',
  'm': 'FNX-M',
  'affiliate': 'Đối tác',
  'xlbm': 'Ban XLBM'
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Không hiển thị breadcrumbs ngoài layout trên Home, và trên RD/SC (vì RD/SC tự tích hợp breadcrumb trong hero theo Spec 01 - 4.6)
  if (pathname === '/' || pathname === '/hubs/rd' || pathname === '/hubs/sc') {
    return null;
  }

  const paths = pathname.split('/').filter(Boolean);
  if (paths.length === 0) return null;

  // JSON-LD BreadcrumbList
  const breadcrumbListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://fnx.vn',
      },
      ...paths.map((path, index) => {
        const itemUrl = 'https://fnx.vn/' + paths.slice(0, index + 1).join('/');
        return {
          '@type': 'ListItem',
          position: index + 2,
          name: routeNames[path] || path,
          item: itemUrl,
        };
      }),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd) }}
      />
      <div className="w-full bg-[#0C1927]/90 border-b border-white/5 py-3 pt-24 px-4 md:px-8 z-30 relative select-none">
        <div className="max-w-[1200px] mx-auto flex items-center text-xs md:text-sm">
          <Link href="/" className="text-fnx-silver hover:text-white transition-colors flex items-center">
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Trang chủ</span>
          </Link>
          
          {paths.map((path, index) => {
            const href = '/' + paths.slice(0, index + 1).join('/');
            const isLast = index === paths.length - 1;
            const name = routeNames[path] || path;

            return (
              <React.Fragment key={path}>
                <ChevronRight className="w-3.5 h-3.5 text-white/30 mx-2 flex-shrink-0" />
                {isLast ? (
                  <span className="text-white font-medium">{name}</span>
                ) : (
                  <Link href={href} className="text-fnx-silver hover:text-white transition-colors">
                    {name}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
