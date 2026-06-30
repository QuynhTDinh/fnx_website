import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Local Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-fnx-dark via-fnx-dark/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-fnx-dark via-transparent to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-full"
        >
          <div className="mb-10">
            <div className="overflow-hidden pb-2">
              <motion.h1 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[6rem] lg:text-[8rem] font-tech font-bold tracking-tighter text-white leading-none block whitespace-nowrap"
              >
                SHAPING SURFACE.
              </motion.h1>
            </div>
            <div className="overflow-hidden pt-2">
              <motion.h1 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[6rem] lg:text-[8rem] font-tech font-bold tracking-tighter text-fnx-gold-light leading-none block whitespace-nowrap"
              >
                SHAPING FUTURE.
              </motion.h1>
            </div>
          </div>
          
          <Link to="/hubs/sc">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-fnx-matrix overflow-hidden"
            >
              <div className="absolute inset-0 border border-fnx-gold-dark opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-fnx-gold-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative text-white font-sans tracking-widest font-bold text-sm md:text-base flex items-center">
                KẾT NỐI CHUỖI GIÁ TRỊ
                <svg className="ml-3 w-5 h-5 text-fnx-gold-light group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-fnx-silver text-xs font-sans tracking-widest mb-2 uppercase">Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-fnx-silver to-transparent"></div>
      </motion.div>
    </section>
  );
}
