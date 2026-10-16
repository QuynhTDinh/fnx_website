'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, MessageCircle, Mail, X, Send } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Đóng khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Đóng khi nhấn phím Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const hotline = siteConfig.company.hotlineDisplay;
  const hotlineTel = siteConfig.company.hotlineTel;
  const email = siteConfig.company.email;
  const zaloPhone = hotline.replace(/\s+/g, '');

  const CONTACT_BUTTONS = [
    {
      id: 'email',
      title: 'Liên hệ qua Email',
      subtitle: email,
      href: `mailto:${email}`,
      target: '_self',
      icon: Mail,
      iconBg: 'bg-teal-600 text-white shadow-teal-900/30',
      pillHoverBorder: 'group-hover:border-teal-400/60',
    },
    {
      id: 'zalo',
      title: 'Liên hệ qua Zalo',
      subtitle: 'Chat trực tuyến 24/7',
      href: `https://zalo.me/${zaloPhone}`,
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: MessageCircle,
      iconBg: 'bg-[#0068FF] text-white shadow-blue-900/30',
      pillHoverBorder: 'group-hover:border-blue-400/60',
    },
    {
      id: 'hotline',
      title: `Hotline: ${hotline}`,
      subtitle: 'Bấm gọi ngay (24/7)',
      href: `tel:${hotlineTel}`,
      target: '_self',
      icon: PhoneCall,
      iconBg: 'bg-emerald-600 text-white shadow-emerald-900/30',
      pillHoverBorder: 'group-hover:border-emerald-400/60',
    },
  ];

  return (
    <aside 
      ref={widgetRef} 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto"
      aria-label="Kênh liên hệ nhanh FNX Group"
    >
      {/* Danh sách các nút liên hệ bung lên khi click (Speed Dial) */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 mb-3">
            {/* 3 Nút chính: Hotline, Zalo, Email */}
            {CONTACT_BUTTONS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  initial={{ opacity: 0, y: 15, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.85 }}
                  transition={{ duration: 0.22, delay: (CONTACT_BUTTONS.length - 1 - index) * 0.05, ease: 'easeOut' }}
                  className="group flex items-center gap-3 cursor-pointer select-none"
                  aria-label={item.title}
                >
                  {/* Nhãn chữ (Pill Badge) */}
                  <div className={`bg-[#0A121D]/95 backdrop-blur-xl border border-white/15 ${item.pillHoverBorder} px-3.5 py-2 rounded-xl shadow-xl transition-all duration-200 text-right group-hover:scale-[1.02]`}>
                    <div className="text-xs font-bold text-white group-hover:text-fnx-gold-light transition-colors whitespace-nowrap font-sans">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-gray-400 font-mono tracking-wider">
                      {item.subtitle}
                    </div>
                  </div>

                  {/* Nút Icon tròn */}
                  <div className={`w-12 h-12 rounded-full ${item.iconBg} border border-white/20 shadow-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shrink-0`}>
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                </motion.a>
              );
            })}

            {/* Link tắt gửi bài toán dự án (Engage form) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, delay: 0.18 }}
              className="mr-1"
            >
              <Link
                href="/engage"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-fnx-gold-light/90 hover:text-fnx-gold-light bg-[#0A121D]/90 backdrop-blur-md border border-fnx-gold-light/30 px-3 py-1.5 rounded-lg shadow-md hover:border-fnx-gold-light transition-all"
              >
                <Send className="w-3 h-3" />
                <span>Hoặc gửi yêu cầu dự án (Brief) →</span>
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (Icon Only Trigger) */}
      <div className="relative group">
        {/* Hover Tooltip (Chỉ hiện khi rê chuột trên Desktop và menu đang đóng) */}
        {!isOpen && (
          <div className="hidden sm:group-hover:flex items-center absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#0A121D]/95 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-xl shadow-xl text-xs font-semibold text-white whitespace-nowrap pointer-events-none transition-all duration-200 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0">
            <span>Liên hệ với chúng tôi</span>
            <div className="w-1.5 h-1.5 bg-[#0A121D] border-r border-b border-white/15 rotate-[-45deg] absolute -right-1 top-1/2 -translate-y-1/2" />
          </div>
        )}

        {/* Nút Icon tròn chính */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Đóng bảng liên hệ" : "Liên hệ với chúng tôi"}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full ${
            isOpen ? 'bg-fnx-navy text-white' : 'bg-[#0A121D]/95 hover:bg-[#1A396C] text-white'
          } active:scale-95 backdrop-blur-xl border border-white/20 hover:border-fnx-gold-light/80 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(26,57,108,0.6)] cursor-pointer`}
        >
          {/* Pulsing Green Activity Dot (Trực tuyến) - chỉ hiện khi đóng */}
          {!isOpen && (
            <span className="absolute top-1 right-1 flex h-3.5 w-3.5 pointer-events-none">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#0A121D]" />
            </span>
          )}

          {/* Icon chuyển đổi mượt mà giữa PhoneCall và X */}
          {isOpen ? (
            <X className="w-6 h-6 text-white transition-transform duration-200 rotate-0" />
          ) : (
            <PhoneCall className="w-6 h-6 text-white group-hover:text-fnx-gold-light transition-colors duration-200 animate-[wiggle_3s_ease-in-out_infinite]" />
          )}
        </button>
      </div>
    </aside>
  );
}
