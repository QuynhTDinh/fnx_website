import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoFNX from '../assets/logo-fnx.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glassmorphism py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Left Side: Logo & Core Hubs */}
        <div className="flex items-center space-x-12">
          <Link to="/">
            <img src={logoFNX} alt="FNX Group" className="h-8 md:h-10 w-auto object-contain" />
          </Link>
          
          <div className="hidden md:flex space-x-8 text-sm font-sans font-semibold text-fnx-silver items-center">
            <Link to="/hubs/sc" className="hover:text-white transition-colors relative group">
              FNX-SC
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/hubs/rd" className="hover:text-white transition-colors relative group">
              FNX-RD
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/hubs/m" className="hover:text-white transition-colors relative group">
              FNX-M
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </div>
        
        {/* Right Side: Affiliate, Projects, Engage */}
        <div className="hidden md:flex space-x-6 items-center">
           <Link to="/affiliate/xlbm" className="text-sm font-sans font-semibold hover:text-white transition-colors relative group text-white">
             BAN XLBM
             <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-fnx-gold-light transition-all group-hover:w-full"></span>
           </Link>

           <div className="w-[1px] h-4 bg-fnx-silver/30 mx-2"></div>

           <Link to="/logs" className="text-fnx-silver text-[10px] font-sans font-bold tracking-widest hover:text-white transition-colors mt-[2px]">
             DỰ ÁN
           </Link>
           <Link to="/engage" className="px-6 py-2 border border-fnx-silver/30 text-white text-sm font-sans font-bold tracking-wide hover:border-fnx-gold-light hover:text-fnx-gold-light transition-colors duration-300 ml-2">
             LIÊN HỆ
           </Link>
        </div>
      </div>
    </nav>
  );
}
