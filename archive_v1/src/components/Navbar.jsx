import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoFNX from '../assets/logo-fnx-1.png';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glassmorphism border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Left Side: Logo & Core Hubs */}
        <div className="flex items-center space-x-8 lg:space-x-12">
          <Link to="/">
            <img src={logoFNX} alt="FNX Group" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
          
          <div className="hidden md:flex space-x-3 text-lg font-sans font-bold text-fnx-silver items-center">
            <Link to="/hubs/sc" className="px-4 py-2 border border-white/10 hover:border-white/30 hover:bg-white/5 rounded-md hover:text-white transition-all">
              FNX-SC
            </Link>
            <Link to="/hubs/rd" className="px-4 py-2 border border-white/10 hover:border-white/30 hover:bg-white/5 rounded-md hover:text-white transition-all">
              FNX-RD
            </Link>
            <Link to="/hubs/m" className="px-4 py-2 border border-white/10 hover:border-white/30 hover:bg-white/5 rounded-md hover:text-white transition-all">
              FNX-M
            </Link>
          </div>
        </div>
        
        {/* Right Side: Affiliate, Projects, Engage */}
        <div className="hidden md:flex space-x-4 items-center">
           <Link to="/affiliate/xlbm" target="_blank" rel="noopener noreferrer" className="text-lg px-5 py-2.5 font-sans font-bold hover:text-white transition-all border border-fnx-gold-light/20 hover:border-fnx-gold-light/50 bg-fnx-gold-light/5 text-fnx-gold-light rounded-md">
             BAN XLBM
           </Link>

           <Link to="/logs" className="text-lg px-5 py-2.5 border border-white/10 hover:border-white/30 rounded-md text-fnx-silver font-sans font-bold hover:text-white hover:bg-white/5 transition-all">
             DỰ ÁN
           </Link>

           <Link to="/engage" className="px-8 py-2.5 border border-white text-white text-lg font-sans font-extrabold hover:bg-white hover:text-black transition-colors duration-300 ml-2 rounded-md">
             LIÊN HỆ
           </Link>
        </div>
      </div>
    </nav>
  );
}
