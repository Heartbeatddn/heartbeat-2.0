
import React from 'react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Growth', href: '#growth' },
  { label: 'Creative', href: '#creative' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Banana', href: '#banana' },
];

const GlassHeader: React.FC = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-[100]">
      <div className="glass-frosty px-12 py-6 rounded-[40px] flex items-center justify-between border-2 border-white/50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#1d1d1f] rounded-full border-2 border-white flex items-center justify-center shadow-lg">
             <span className="text-xl">🍌</span>
          </div>
          <span className="font-black text-3xl tracking-tighter text-[#1d1d1f]">HEARTBEAT</span>
        </div>
        
        <div className="hidden md:flex items-center gap-16">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-black uppercase tracking-[0.2em] text-[#1d1d1f]/60 hover:text-[#1d1d1f] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button className="soft-brutalist-btn px-10 py-4 !rounded-2xl text-sm font-black tracking-[0.2em] !shadow-md hover:!scale-105 active:!scale-95">
          LAUNCH
        </button>
      </div>
    </nav>
  );
};

export default GlassHeader;
