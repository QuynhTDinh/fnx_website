'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MapPin, Mail, Phone, Globe, ExternalLink } from 'lucide-react';
import { siteConfig, type ThemeKey } from '@/content/site';

interface SiteFooterProps {
  theme?: ThemeKey;
}

export default function SiteFooter({ theme: propTheme }: SiteFooterProps) {
  const pathname = usePathname();
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const currentTheme: ThemeKey = propTheme || (
    pathname.startsWith('/hubs/rd') ? 'rd' :
    pathname.startsWith('/hubs/sc') ? 'sc' :
    pathname.startsWith('/hubs/m') ? 'm' :
    'group'
  );

  const currentLogo = siteConfig.themeLogos[currentTheme] || siteConfig.themeLogos.group;
  const currentTagline = siteConfig.taglines[currentTheme] || siteConfig.taglines.group;

  return (
    <footer className="w-full bg-[#132949] text-white pt-14 md:pt-16 pb-8 border-t border-white/10 select-none">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* LƯỚI 5 KHỐI (Spec 01 - 5.1 & 5.3) */}
        {/* Desktop: 2 / 4 / 2 / 2 / 2 trên lưới 12 cột */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6 mb-12">
          
          {/* KHỐI 1: BRAND (2/12) */}
          <div className="md:col-span-12 lg:col-span-2">
            <Link href="/" className="inline-block mb-4" aria-label="FNX Group - Về trang chủ">
              <Image
                src={currentLogo.dark}
                alt={currentLogo.alt}
                width={200}
                height={75}
                className="h-11 md:h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* KHỐI 2: THÔNG TIN LIÊN HỆ (4/12) */}
          <div className="md:col-span-6 lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {siteConfig.company.fullName}
            </h4>

            <div className="space-y-2.5 text-sm text-fnx-silver">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/70 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.company.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/70 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.company.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/70 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.company.hotlineTel}`}
                  className="hover:text-white transition-colors font-medium text-white/90"
                >
                  {siteConfig.company.hotlineDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-white/70 flex-shrink-0" />
                <a
                  href={`https://${siteConfig.company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.company.website}
                </a>
              </div>
            </div>
          </div>

          {/* KHỐI 3: LIÊN KẾT NHANH (2/12) */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2.5 text-sm text-fnx-silver">
              {siteConfig.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KHỐI 4: PHÁP LÝ (2/12) */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Pháp lý
            </h4>
            <ul className="space-y-2.5 text-sm text-fnx-silver">
              {siteConfig.footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KHỐI 5: BẢN ĐỒ (2/12) */}
          <div className="md:col-span-6 lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Vị trí FNX
            </h4>
            <div className="w-full sm:w-[240px] h-[140px] rounded-lg overflow-hidden border border-white/10 shadow-sm relative bg-[#0C1927]">
              <iframe
                src={siteConfig.company.addressEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ văn phòng FNX"
                className="grayscale contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-opacity"
              />
            </div>
            <a
              href={siteConfig.company.addressMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-fnx-silver hover:text-white mt-2 transition-colors"
            >
              <span>Xem trên Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* THANH DƯỚI CÙNG (Spec 01 - 5.1) */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-fnx-silver/80 gap-3">
          <p>© {currentYear} FNX Group. Bản quyền được bảo hộ.</p>
          <p className="font-medium tracking-wide text-white/70">
            {currentTagline}
          </p>
        </div>

      </div>
    </footer>
  );
}
