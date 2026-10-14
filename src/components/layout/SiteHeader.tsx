'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, Search, Menu, X, Phone, Mail } from 'lucide-react';
import { siteConfig, type ThemeKey } from '@/content/site';
import { SearchModal } from './SearchModal';

interface SiteHeaderProps {
  theme?: ThemeKey;
  transparentOnTop?: boolean;
}

export default function SiteHeader({
  theme: propTheme,
  transparentOnTop = true,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Tự động xác định theme theo URL nếu không truyền qua prop
  const currentTheme: ThemeKey = propTheme || (
    pathname.startsWith('/hubs/rd') ? 'rd' :
    pathname.startsWith('/hubs/sc') ? 'sc' :
    pathname.startsWith('/hubs/m') ? 'm' :
    'group'
  );

  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileEcosystemOpen, setMobileEcosystemOpen] = useState(true);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const megaTimerRef = useRef<NodeJS.Timeout | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaPanelRef = useRef<HTMLDivElement>(null);

  // Link liên hệ tự động mang ?unit=rd hoặc ?unit=sc khi ở trang hub tương ứng
  const contactHref = 
    pathname.startsWith('/hubs/rd') ? '/engage?unit=rd' :
    pathname.startsWith('/hubs/sc') ? '/engage?unit=sc' :
    '/engage';

  // Lắng nghe scroll để đổi trạng thái sticky
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll(); // Check ngay khi mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Khóa cuộn trang khi mobile menu mở
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Click ngoài dropdown hoặc mega menu để đóng
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setDropdownOpen(false);
      }
      const clickedInsideMega =
        (megaRef.current && megaRef.current.contains(target)) ||
        (megaPanelRef.current && megaPanelRef.current.contains(target));
      if (!clickedInsideMega) {
        setMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Phím Esc đóng dropdown, mega menu & mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setMegaOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Hover dropdown Hệ sinh thái với độ trễ đóng 150ms (Spec 01 - 4.2)
  const handleDropdownMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setDropdownOpen(true);
    setMegaOpen(false);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const handleDropdownToggle = () => {
    const next = !dropdownOpen;
    setDropdownOpen(next);
    if (next) setMegaOpen(false);
  };

  // Hover mega menu Sản phẩm với độ trễ đóng 150ms (Spec 06)
  const handleMegaMouseEnter = () => {
    if (megaTimerRef.current) {
      clearTimeout(megaTimerRef.current);
      megaTimerRef.current = null;
    }
    setMegaOpen(true);
    setDropdownOpen(false);
  };

  const handleMegaMouseLeave = () => {
    megaTimerRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 150);
  };

  const handleMegaToggle = () => {
    const next = !megaOpen;
    setMegaOpen(next);
    if (next) setDropdownOpen(false);
  };

  // Xử lý link sản phẩm cùng trang (cuộn mượt không reload) hoặc khác trang
  const handleProductLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMegaOpen(false);
    setMobileMenuOpen(false);

    const [targetPath, hash] = href.split('#');
    const isSamePage = pathname === targetPath;

    if (isSamePage) {
      if (hash) {
        e.preventDefault();
        window.location.hash = hash;
        window.dispatchEvent(new Event('hashchange'));

        const scrollToTarget = () => {
          const el = document.getElementById(hash);
          if (el) {
            const yOffset = -90;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        };
        setTimeout(scrollToTarget, 50);
        setTimeout(scrollToTarget, 200);
      }
    } else {
      e.preventDefault();
      router.push(href);
    }
  };

  // Trạng thái header: Nền trong suốt khi ở đỉnh (nếu transparentOnTop bật), ngược lại luôn nền navy-700 (#132949)
  const isHeaderTransparent = transparentOnTop && !scrolled;
  const isEcosystemActive = pathname.startsWith('/hubs');

  const currentLogo = siteConfig.themeLogos[currentTheme] || siteConfig.themeLogos.group;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 select-none ${
          isHeaderTransparent
            ? 'bg-transparent py-2 md:py-3'
            : 'bg-[#132949] py-1.5 md:py-2 shadow-md border-b border-white/10'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
          
          {/* TRÁI: Logo + Dropdown Hệ sinh thái */}
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Logo theo theme */}
            <Link href="/" className="flex items-center py-1" aria-label="FNX Group - Về trang chủ">
              <Image
                src={currentLogo.dark}
                alt={currentLogo.alt}
                width={200}
                height={75}
                priority
                className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-200 hover:opacity-90"
              />
            </Link>

            {/* Dropdown "Hệ sinh thái" (Desktop >= 1024px) */}
            <div
              ref={dropdownRef}
              className="relative hidden lg:block"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                aria-controls="ecosystem-dropdown-panel"
                className={`flex items-center gap-1.5 text-[15px] xl:text-base font-medium transition-colors py-2 ${
                  isEcosystemActive
                    ? 'text-white border-b-2 border-[var(--theme-primary)]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <span>Hệ sinh thái</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180 text-white' : 'text-white/60'
                  }`}
                />
              </button>

              {/* Dropdown Panel: nền trắng, bo 8px, shadow-soft, rộng 240px */}
              {dropdownOpen && (
                <div
                  id="ecosystem-dropdown-panel"
                  className="absolute left-0 top-full pt-2 z-50 w-64 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-1.5 overflow-hidden">
                    {siteConfig.navigation.ecosystemDropdown.map((item) => {
                      const isItemActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className={`flex items-center h-12 px-5 text-[15px] font-medium transition-colors ${
                            isItemActive
                              ? 'bg-[var(--theme-bg-tint)] text-[var(--theme-primary)] font-semibold'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-[var(--theme-primary)]'
                          }`}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* PHẢI (Desktop): Nút Sản phẩm ▾ + 3 menu items + Icon Tìm kiếm */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6" aria-label="Menu chính">
              {/* Nút "Sản phẩm ▾" mở Mega Menu 4 cột */}
              <div
                ref={megaRef}
                className="relative"
                onMouseEnter={handleMegaMouseEnter}
                onMouseLeave={handleMegaMouseLeave}
              >
                <button
                  type="button"
                  onClick={handleMegaToggle}
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  aria-controls="products-mega-menu"
                  className={`flex items-center gap-1.5 text-[15px] xl:text-base font-medium transition-colors py-2 ${
                    megaOpen ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>Sản phẩm</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      megaOpen ? 'rotate-180 text-white' : 'text-white/60'
                    }`}
                  />
                </button>
              </div>

              {siteConfig.navigation.mainMenu.map((item) => {
                const isContact = item.href === '/engage';
                const finalHref = isContact ? contactHref : item.href;
                const isActive = pathname === item.href || (isContact && pathname.startsWith('/engage'));

                return (
                  <Link
                    key={item.href}
                    href={finalHref}
                    className={`relative text-[15px] xl:text-base font-medium transition-colors py-1 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.title}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--theme-primary)] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Icon tìm kiếm */}
            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              aria-label="Mở tìm kiếm"
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* PHẢI (Mobile & Tablet): Icon Tìm kiếm + Nút Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              aria-label="Mở tìm kiếm"
              className="p-2 text-white/80 hover:text-white rounded"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Mở menu điều hướng"
              aria-expanded={mobileMenuOpen}
              className="p-2 text-white/80 hover:text-white rounded"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>

        {/* MEGA MENU SẢN PHẨM 4 CỘT (Desktop >= 1024px) */}
        {megaOpen && (
          <div
            id="products-mega-menu"
            ref={megaPanelRef}
            onMouseEnter={handleMegaMouseEnter}
            onMouseLeave={handleMegaMouseLeave}
            className="absolute top-full left-0 right-0 z-50 pt-2 px-4 md:px-8 lg:px-12 animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="max-w-[1200px] mx-auto bg-white rounded-lg shadow-2xl border border-gray-100 p-8">
              <div className="grid grid-cols-4 gap-7">
                {siteConfig.navProducts.map((col) => (
                  <div key={col.num} className="flex flex-col min-w-0">
                    {/* Tiêu đề Cột: 14px/700, ALL CAPS, số 01-04, link tới anchor đầu */}
                    <Link
                      href={col.href}
                      onClick={(e) => handleProductLinkClick(e, col.href)}
                      className="flex items-baseline gap-2 text-sm font-bold tracking-[0.04em] uppercase text-[var(--theme-primary)] pb-2.5 mb-2 border-b border-[#E3E8EF] hover:opacity-80 transition-opacity"
                    >
                      <span className="font-mono text-xs">{col.num}</span>
                      <span className="truncate">{col.title}</span>
                    </Link>

                    {/* Danh sách mục con */}
                    <div className="flex flex-col">
                      {col.items.map((it) => (
                        <Link
                          key={it.name}
                          href={it.href}
                          onClick={(e) => handleProductLinkClick(e, it.href)}
                          className="flex items-center min-h-[38px] py-1.5 text-base text-[#0C1927] hover:text-[var(--theme-primary)] transition-colors leading-snug"
                        >
                          {it.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE FULLSCREEN DRAWER (Spec 01 - 4.4) */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#132949] flex flex-col justify-between p-6 animate-in slide-in-from-right duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar trong Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src={currentLogo.dark}
                alt={currentLogo.alt}
                width={160}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Đóng menu"
              className="p-2 text-white/80 hover:text-white rounded"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Danh sách menu chính */}
          <div className="flex-1 overflow-y-auto py-6 space-y-2">
            
            {/* Mục Hệ sinh thái trong Mobile (dạng collapsible) */}
            <div className="border-b border-white/5 pb-2">
              <button
                type="button"
                onClick={() => setMobileEcosystemOpen(!mobileEcosystemOpen)}
                className="w-full flex items-center justify-between text-base font-semibold text-white py-3"
              >
                <span>Hệ sinh thái</span>
                <ChevronDown
                  className={`w-5 h-5 text-white/60 transition-transform ${
                    mobileEcosystemOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileEcosystemOpen && (
                <div className="pl-4 space-y-1 pb-2">
                  {siteConfig.navigation.ecosystemDropdown.map((sub) => {
                    const isSubActive = pathname === sub.href;
                    return (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2.5 text-sm font-medium ${
                          isSubActive
                            ? 'text-white font-bold pl-2 border-l-2 border-[var(--theme-primary)]'
                            : 'text-white/70 hover:text-white'
                        }`}
                      >
                        {sub.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mục Sản phẩm trong Mobile (dạng collapsible phân cấp 4 nhóm) */}
            <div className="border-b border-white/5 pb-2">
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between text-base font-semibold text-white py-3"
              >
                <span>Sản phẩm</span>
                <ChevronDown
                  className={`w-5 h-5 text-white/60 transition-transform ${
                    mobileProductsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileProductsOpen && (
                <div className="pl-3 space-y-4 pb-3 pt-1">
                  {siteConfig.navProducts.map((col) => (
                    <div key={col.num} className="space-y-1">
                      <Link
                        href={col.href}
                        onClick={(e) => handleProductLinkClick(e, col.href)}
                        className="block text-xs font-bold tracking-wider uppercase text-[#EEB583] pt-1 pb-1"
                      >
                        {col.num} · {col.title}
                      </Link>
                      <div className="pl-2 space-y-0.5 border-l border-white/10">
                        {col.items.map((it) => (
                          <Link
                            key={it.name}
                            href={it.href}
                            onClick={(e) => handleProductLinkClick(e, it.href)}
                            className="block py-1.5 text-sm text-white/80 hover:text-white"
                          >
                            {it.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 4 Mục menu chính */}
            {siteConfig.navigation.mainMenu.map((item) => {
              const isContact = item.href === '/engage';
              const finalHref = isContact ? contactHref : item.href;
              const isActive = pathname === item.href || (isContact && pathname.startsWith('/engage'));

              return (
                <Link
                  key={item.href}
                  href={finalHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-base font-medium border-b border-white/5 ${
                    isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Dưới cùng Panel: Hotline & Email */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href={`tel:${siteConfig.company.hotlineTel}`}
              className="flex items-center gap-3 text-sm text-white/90 hover:text-white"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">{siteConfig.company.hotlineDisplay}</span>
            </a>

            <a
              href={`mailto:${siteConfig.company.email}`}
              className="flex items-center gap-3 text-sm text-white/90 hover:text-white"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span>{siteConfig.company.email}</span>
            </a>
          </div>

        </div>
      )}

      {/* SEARCH MODAL */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
}
