import React from 'react';

const clients = [
  "SAMSUNG", "LG", "HYUNDAI", "HONDA", "TOYOTA", "VINFAST", "FOXCONN", "PEGATRON", "BOSCH"
];

export default function GlobalClients() {
  return (
    <div className="w-full bg-fnx-dark py-8 border-y border-white/5 overflow-hidden flex items-center relative z-20">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/4 mb-4 md:mb-0 min-w-[200px]">
          <p className="text-fnx-silver font-sans tracking-widest text-xs uppercase border-l-2 border-fnx-gold-dark pl-3">
            Trusted by<br/>Global Partners
          </p>
        </div>
        <div className="md:w-3/4 relative overflow-hidden flex items-center h-12 w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)]">
           {/* Marquee effect */}
           <div className="flex animate-marquee whitespace-nowrap items-center w-max">
              {[...clients, ...clients, ...clients].map((client, i) => (
                <span key={i} className="text-white/30 font-sans font-bold text-xl md:text-2xl mx-8 md:mx-12 hover:text-white/80 transition-colors cursor-default">
                  {client}
                </span>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
