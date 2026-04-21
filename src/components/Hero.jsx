import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] media-card">
      {/* Raw Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-welder-working-with-a-welding-machine-22687-large.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay for Text Readability */}
      <div className="media-gradient"></div>

      {/* Content positioned like Anduril */}
      <div className="absolute bottom-12 left-12 right-12 z-10 flex flex-col items-start">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4"
        >
          Industrial OS
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-between items-end w-full"
        >
          <p className="text-xl md:text-2xl font-medium text-white/90 max-w-lg">
            Shaping Surfaces. Leading Futures.
          </p>
          <button className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:scale-105 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
