
import React from 'react';

const SupportOverlay: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <div className="glass-frosty p-6 rounded-[40px] flex items-center gap-6 pr-10 transition-all hover:scale-110 active:scale-95 group border-2 border-white/40">
        <div className="w-16 h-16 bg-[#1d1d1f] rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#FF8C00] transition-all duration-300">
          <span className="text-3xl">🍌</span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/50 mb-1">Support</span>
          <a 
            href="tel:+918010802080" 
            className="text-2xl font-black text-black group-hover:text-[#FF8C00] transition-colors tracking-tighter"
          >
            +91 8010 802080
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportOverlay;
