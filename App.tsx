
import React from 'react';
import HeartbeatScene from './components/HeartbeatScene';
import GlassHeader from './components/GlassHeader';
import SupportOverlay from './components/SupportOverlay';
import { Sparkles, TrendingUp, Zap, Target, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative w-full selection:bg-black selection:text-[#FCE029]">
      <GlassHeader />
      <SupportOverlay />

      {/* Hero Section - AI Minion Focus */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden bg-[#FCE029]">
        {/* Peeking Minion Left - Using Bob waving */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-80 z-20 pointer-events-none hidden lg:block animate-peek-left">
           <img 
             src="https://www.freeiconspng.com/thumbs/minions-png/minions-png-free-pictures-4.png" 
             className="w-full h-full object-contain filter drop-shadow-2xl" 
             alt="Peeking Minion" 
           />
        </div>

        <div className="absolute inset-0 z-0 opacity-80">
          <HeartbeatScene />
        </div>
        
        <div className="relative z-10 max-w-7xl text-center space-y-8 animate-breathe">
          <div className="overflow-hidden">
             <span className="inline-block px-8 py-3 bg-black text-white text-xs font-black uppercase tracking-[0.6em] rounded-full shadow-lg">
               Banananana Growth Agency
             </span>
          </div>
          <h1 className="text-[7rem] md:text-[14rem] font-black tracking-tighter leading-[0.75] text-[#1d1d1f] uppercase drop-shadow-2xl">
            BIG<br/>
            <span className="text-white drop-shadow-[8px_8px_0px_#1d1d1f]">HEARTBEAT</span>
          </h1>
          <p className="text-2xl md:text-4xl text-black font-black max-w-3xl mx-auto pt-6 leading-tight">
            The zesty marketing engine <br/> 
            <span className="bg-white/50 backdrop-blur-sm px-8 py-3 rounded-[30px] inline-block mt-4 border-2 border-black/10">Belly-laugh growth, serious results.</span>
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center pt-12">
            <button className="soft-brutalist-btn text-3xl group">
              LET'S SCALE <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-transform ml-2" />
            </button>
            <button className="glass-frosty px-16 py-10 rounded-[40px] font-black text-3xl text-black border-4 border-black/10 hover:bg-white transition-all hover:scale-105 active:scale-95">
              THE MANIFESTO
            </button>
          </div>
        </div>
      </section>

      {/* Growth Strategy - Peeking Right */}
      <section className="py-48 px-6 md:px-24 relative z-10 bg-white border-y-[12px] border-black overflow-hidden">
        {/* Peeking Minion Right - Using Hanging Minions */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-96 z-20 pointer-events-none hidden lg:block animate-peek-right">
           <img 
             src="https://www.pngarts.com/files/11/Hanging-Minions-PNG-Image-Background.png" 
             className="w-full h-full object-contain filter drop-shadow-2xl scale-x-[-1]" 
             alt="Peeking Minion" 
           />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-1/2 space-y-12">
            <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter text-black leading-[0.8]">
              DECIDE <br/>
              <span className="text-[#FCE029] drop-shadow-[4px_4px_0px_#1d1d1f]">FAST-ER.</span>
            </h2>
            <div className="soft-brutalist-card p-12 bg-[#FCE029]/15">
              <p className="text-3xl md:text-5xl text-black font-black leading-tight">
                Our designs act as biological triggers. We combine the joy of a Minion with the precision of an iPhone.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 gap-12 pt-12">
            <FeatureCard 
              title="BANANA SCALE" 
              desc="Aggressive scaling strategies that dominate digital shelf space with relentless frequency."
            />
            <FeatureCard 
              title="MINION SPEED" 
              desc="Deployments at a rhythm that keeps competition flat-footed and users begging for more."
            />
          </div>
        </div>
      </section>

      {/* Services Section - Playful Cards */}
      <section id="growth" className="py-48 px-6 md:px-24 relative z-10 bg-[#FCE029] overflow-hidden">
        {/* Peeking Minion Left 2 - Using Dave/HQ Image */}
        <div className="absolute bottom-0 left-0 w-64 h-80 z-20 pointer-events-none hidden lg:block animate-peek-left">
           <img 
             src="https://freepngimg.com/save/111086-minions-hq-image-free/600x650" 
             className="w-full h-full object-contain filter drop-shadow-2xl" 
             alt="Peeking Minion" 
           />
        </div>

        <div className="text-center mb-32">
          <h2 className="text-8xl md:text-[12rem] font-black tracking-tighter text-black leading-none uppercase">
            BANANA STACK
          </h2>
          <div className="w-48 h-6 bg-black mx-auto mt-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-8xl mx-auto">
          <LargeServiceCard 
            title="ALGO CRUSH"
            desc="Dominating feeds with the loudest organic voice in the market."
            icon={<Target className="w-14 h-14 text-white" />}
            color="bg-black"
          />
          <LargeServiceCard 
            title="ZESTY DESIGN"
            desc="Interfaces that feel alive, tactile, and dangerously addictive."
            icon={<Sparkles className="w-14 h-14 text-white" />}
            color="bg-[#FF8C00]"
          />
          <LargeServiceCard 
            title="VIRAL ADS"
            desc="Creative assets built to be shared, screenshotted, and obsessed over."
            icon={<Zap className="w-14 h-14 text-white" />}
            color="bg-slate-800"
          />
          <LargeServiceCard 
            title="AI MASCOT"
            desc="Character-driven marketing that builds human-grade brand loyalty."
            icon={<TrendingUp className="w-14 h-14 text-white" />}
            color="bg-slate-600"
          />
        </div>
      </section>

      {/* Final CTA - The Big Yellow Button */}
      <section className="py-64 px-6 flex items-center justify-center bg-white border-t-[12px] border-black">
        <div className="soft-brutalist-card bg-[#FCE029] p-24 md:p-48 max-w-7xl w-full text-center space-y-16 group">
          <h2 className="text-8xl md:text-[14rem] font-black tracking-tighter text-black leading-[0.7] uppercase group-hover:scale-105 transition-transform duration-500">
            JOIN THE<br/><span className="text-white drop-shadow-[10px_10px_0px_#1d1d1f]">PULSE</span>
          </h2>
          <p className="text-3xl md:text-5xl text-black font-black uppercase tracking-tight">
            Stop being boring. Start being viral.
          </p>
          <div className="pt-12">
            <button className="soft-brutalist-btn text-5xl rounded-[50px] group-hover:bg-[#FF8C00] transition-colors">
              HIRE THE MINIONS
            </button>
          </div>
        </div>
      </section>

      <footer className="py-24 px-6 border-t-[12px] border-black bg-[#FCE029] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex items-center gap-4">
             <div className="w-16 h-16 bg-black rounded-full border-4 border-white animate-bounce shadow-xl flex items-center justify-center">
               <span className="text-3xl">🍌</span>
             </div>
             <span className="font-black text-6xl uppercase tracking-tighter">Heartbeat</span>
          </div>
          <div className="flex gap-16 text-xl font-black uppercase tracking-[0.3em] text-black/40">
            <a href="#" className="hover:text-black transition-colors">Strategy</a>
            <a href="#" className="hover:text-black transition-colors">Banananana</a>
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
          </div>
          <div className="text-right">
             <p className="text-black font-black uppercase text-xl leading-tight">
               &copy; 2024 HEARTBEAT. <br/> 
               <span className="text-white drop-shadow-[2px_2px_0px_#000]">BA-NA-NA-NA.</span>
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{ title: string, desc: string }> = ({ title, desc }) => (
  <div className="soft-brutalist-card bg-[#FCE029] p-12 group hover:bg-black hover:text-white transition-all duration-500">
    <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">{title}</h3>
    <p className="text-2xl font-bold leading-tight group-hover:text-white/80">{desc}</p>
  </div>
);

const LargeServiceCard: React.FC<{ title: string, desc: string, icon: React.ReactNode, color: string }> = ({ title, desc, icon, color }) => (
  <div className="soft-brutalist-card p-14 group">
    <div className={`mb-12 p-8 ${color} rounded-[40px] w-fit shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
      {icon}
    </div>
    <h3 className="text-4xl font-black mb-6 tracking-tighter uppercase">{title}</h3>
    <p className="text-2xl text-slate-500 font-bold leading-tight group-hover:text-black">{desc}</p>
  </div>
);

export default App;
