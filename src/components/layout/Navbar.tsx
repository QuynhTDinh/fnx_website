'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glassmorphism border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Left Side: Logo & Core Hubs */}
          <div className="flex items-center space-x-8 lg:space-x-12">
            <Link href="/">
              <Image src="/assets/logo-fnx-1.png" alt="FNX Group" width={120} height={48} className="h-10 md:h-12 w-auto object-contain" priority />
            </Link>
            
            <div className="hidden md:flex space-x-3 text-lg font-sans font-bold text-fnx-silver items-center">
              <Link href="/hubs/sc" className="px-4 py-2 border border-white/10 hover:border-white/30 hover:bg-white/5 rounded-md hover:text-white transition-all">
                FNX-SC
              </Link>
              <Link href="/hubs/rd" className="px-4 py-2 border border-white/10 hover:border-white/30 hover:bg-white/5 rounded-md hover:text-white transition-all">
                FNX-RD
              </Link>
              <Link href="/hubs/m" className="px-4 py-2 border border-white/10 hover:border-white/30 hover:bg-white/5 rounded-md hover:text-white transition-all">
                FNX-M
              </Link>
            </div>
          </div>
          
          {/* Right Side: Affiliate, Projects, Engage */}
          <div className="hidden md:flex space-x-4 items-center">
             <Link href="/affiliate/xlbm" target="_blank" rel="noopener noreferrer" className="text-lg px-5 py-2.5 font-sans font-bold hover:text-white transition-all border border-fnx-gold-light/20 hover:border-fnx-gold-light/50 bg-fnx-gold-light/5 text-fnx-gold-light rounded-md">
               BAN XLBM
             </Link>

             <Link href="/logs" className="text-lg px-5 py-2.5 border border-white/10 hover:border-white/30 rounded-md text-fnx-silver font-sans font-bold hover:text-white hover:bg-white/5 transition-all">
               DỰ ÁN
             </Link>

             <Link href="/engage" className="px-8 py-2.5 border border-white text-white text-lg font-sans font-extrabold hover:bg-white hover:text-black transition-colors duration-300 ml-2 rounded-md">
               LIÊN HỆ
             </Link>
          </div>

          {/* Right Side: Hamburger Button for mobile */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-fnx-silver hover:text-white focus:outline-none z-50 relative"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-40 bg-[#080F12]/98 backdrop-blur-lg md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col h-full justify-center items-center space-y-6 text-xl font-sans font-bold">
          <Link href="/hubs/sc" onClick={() => setIsOpen(false)} className="px-6 py-3 border border-white/10 hover:border-white/30 rounded-md text-fnx-silver hover:text-white transition-all w-48 text-center">
            FNX-SC
          </Link>
          <Link href="/hubs/rd" onClick={() => setIsOpen(false)} className="px-6 py-3 border border-white/10 hover:border-white/30 rounded-md text-fnx-silver hover:text-white transition-all w-48 text-center">
            FNX-RD
          </Link>
          <Link href="/hubs/m" onClick={() => setIsOpen(false)} className="px-6 py-3 border border-white/10 hover:border-white/30 rounded-md text-fnx-silver hover:text-white transition-all w-48 text-center">
            FNX-M
          </Link>
          <Link href="/affiliate/xlbm" onClick={() => setIsOpen(false)} className="px-6 py-3 border border-fnx-gold-light/20 hover:border-fnx-gold-light/50 text-fnx-gold-light bg-fnx-gold-light/5 rounded-md w-48 text-center">
            BAN XLBM
          </Link>
          <Link href="/logs" onClick={() => setIsOpen(false)} className="px-6 py-3 border border-white/10 hover:border-white/30 rounded-md text-fnx-silver hover:text-white transition-all w-48 text-center">
            DỰ ÁN
          </Link>
          <Link href="/engage" onClick={() => setIsOpen(false)} className="px-6 py-3 border border-white bg-white text-black hover:bg-transparent hover:text-white transition-colors duration-300 rounded-md w-48 text-center">
            LIÊN HỆ
          </Link>
        </div>
      </div>
    </>
  );
}
