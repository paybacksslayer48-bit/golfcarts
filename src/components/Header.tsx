import React from 'react';
import { motion } from 'motion/react';
import { Mail, ShieldCheck, Phone, Bell, Star, Truck, Award, Compass } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenConsultation: () => void;
  onOpenOrders: () => void;
  onAdminActivate?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenConsultation,
  onOpenOrders,
  onAdminActivate,
}) => {
  return (
    <header className="relative w-full bg-white border-b border-zinc-200/90 text-zinc-900 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
      {/* Carbon fiber style textured background block */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 10px)'
      }} />

      {/* Subtle top brand hairline */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-zinc-850 via-zinc-950 to-zinc-750" />

      {/* Calibration metrics on corner */}
      <div className="absolute top-2.5 left-8 right-8 h-1 flex justify-between pointer-events-none text-[10px] font-mono text-zinc-400 select-none tracking-widest uppercase font-bold">
        <span>[ PEBBLE_BEACH_CUSTOM_STOCK ]</span>
        <span>NODE_STATUS: ONLINE</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          
          {/* Main Golf Cart Luxury Logo Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex-shrink-0"
          >
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-zinc-50 p-1.5 flex items-center justify-center shadow-[0_15px_45px_rgba(0,0,0,0.09)] border border-zinc-200/90 ring-4 ring-zinc-50 hover:scale-105 transition-all duration-350">
              <div className="w-full h-full rounded-full border-2 border-zinc-900 bg-white flex flex-col items-center justify-center overflow-hidden p-1.5">
                <svg className="w-20 h-20 text-zinc-950" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Wheels */}
                  <circle cx="34" cy="72" r="9" stroke="currentColor" strokeWidth="3" fill="none" />
                  <circle cx="34" cy="72" r="3" fill="currentColor" />
                  <circle cx="66" cy="72" r="9" stroke="currentColor" strokeWidth="3" fill="none" />
                  <circle cx="66" cy="72" r="3" fill="currentColor" />

                  {/* Chassis body */}
                  <path d="M 14,58 C 14,62 18,62 22,62 L 78,62 C 82,62 86,58 86,52 L 82,46 C 80,44 76,44 74,44 L 66,44 L 62,50 L 26,50 L 22,42 C 20,38 16,38 14,40 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none" />

                  {/* Canopy roof */}
                  <path d="M 30,22 L 64,22 C 68,22 72,24 72,26 L 70,30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

                  {/* Pillars */}
                  <line x1="34" y1="22" x2="34" y2="50" stroke="currentColor" strokeWidth="2" />
                  <line x1="62" y1="22" x2="66" y2="50" stroke="currentColor" strokeWidth="2" />
                  
                  {/* Windshield pillar */}
                  <line x1="30" y1="22" x2="22" y2="42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 1" />

                  {/* Steering wheel */}
                  <circle cx="38" cy="40" r="4.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                  <line x1="38" y1="40" x2="33" y2="45" stroke="currentColor" strokeWidth="1.5" />

                  {/* Golf Bags in back */}
                  <rect x="72" y="34" width="10" height="22" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" />
                  <path d="M 75,34 L 74,28 M 79,34 L 80,26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            {/* Active Status Beacon */}
            <span className="absolute bottom-3 right-3 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-950 opacity-30"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-zinc-950 border-2 border-white"></span>
            </span>
          </motion.div>

          {/* Core Profile Details */}
          <div className="flex-grow text-center md:text-left space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-zinc-950 font-sans">
                  GOLF<span className="font-light text-zinc-450">CARTS</span>
                </h1>
                <ShieldCheck 
                  onClick={() => {
                    console.log("Single click on shield. Double click to trigger admin room.");
                  }}
                  onDoubleClick={onAdminActivate}
                  className="w-7 h-7 text-zinc-950 fill-zinc-950/5 stroke-[2] cursor-pointer hover:scale-110 active:scale-95 transition-transform" 
                  title="Double-click to open Hidden Admin Panel" 
                />
              </div>
            </div>

            {/* Signature Bios - Bold and Elegant */}
            <div className="space-y-4">
              <p className="text-sm font-mono font-black text-zinc-650 uppercase tracking-widest leading-relaxed">
                Premium Customized Electric Vehicles & Bespoke Resort Builds | Palm Beach, Florida
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs font-mono tracking-widest">
                <span className="px-4 py-2 border border-zinc-950 bg-zinc-950 text-white font-black rounded-lg shadow-sm">
                  LIFTED OFF-ROAD
                </span>
                <span className="px-4 py-2 border border-zinc-200 bg-zinc-50 text-zinc-800 font-extrabold rounded-lg">
                  72V LIFEPO4 LITHIUM
                </span>
                <span className="px-4 py-2 border border-zinc-200 bg-zinc-50 text-zinc-800 font-extrabold rounded-lg">
                  STREET-LEGAL CRUISERS
                </span>
              </div>

              {/* Verified high-contrast contact links */}
              <div className="pt-3 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-sm text-zinc-700 font-mono font-bold">
                <a 
                  href="mailto:builds@procart-custom.com" 
                  className="flex items-center gap-2.5 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all bg-white border border-zinc-200 px-4 py-2.5 rounded-xl shadow-sm cursor-pointer"
                >
                  <Mail className="w-4.5 h-4.5" />
                  <span>builds@procart-custom.com</span>
                </a>
                <a 
                  href="https://wa.me/15615550291" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2.5 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all bg-white border border-zinc-200 px-4 py-2.5 rounded-xl shadow-sm cursor-pointer"
                >
                  <Phone className="w-4.5 h-4.5 fill-current/10" />
                  <span>WhatsApp: +1 (561) 555-0291</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Action Navigation / System Deck */}
          <div className="flex flex-row md:flex-col gap-3.5 w-full md:w-auto justify-center md:justify-end items-stretch">
            <button
              onClick={onOpenConsultation}
              className="flex-1 md:flex-initial flex items-center justify-center gap-2.5 px-6 py-4.5 border border-zinc-300 hover:border-zinc-950 rounded-xl text-xs font-mono uppercase tracking-widest bg-zinc-50 hover:bg-zinc-950 hover:text-white transition-all cursor-pointer font-black text-zinc-900 hover:shadow-lg shadow-sm"
            >
              <Compass className="w-4.5 h-4.5" />
              <span>Detailing Services</span>
            </button>

            <button
              onClick={onOpenOrders}
              className="flex-1 md:flex-initial flex items-center justify-center gap-2.5 px-6 py-4.5 border border-zinc-300 hover:border-zinc-950 rounded-xl text-xs font-mono uppercase tracking-widest bg-zinc-50 hover:bg-zinc-950 hover:text-white transition-all cursor-pointer font-black text-zinc-900 hover:shadow-lg shadow-sm"
            >
              <Bell className="w-4.5 h-4.5" />
              <span>Track Orders</span>
            </button>
          </div>
        </div>

        {/* Premium Trust Deck Bento (The requested advantages/reputation cards overhaul) */}
        <div className="mt-10 pt-10 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 hover:shadow-md transition-all duration-300 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-250 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-zinc-950" />
            </div>
            <div className="space-y-1">
              <span className="block font-mono text-xs text-zinc-400 font-extrabold uppercase tracking-widest">
                500+ DELIVERED BUILDS
              </span>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                Handcrafted premium resort vehicles, offroad utility lifters, and vintage street cruisers.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 hover:shadow-md transition-all duration-300 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-250 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-zinc-950 fill-zinc-950" />
            </div>
            <div className="space-y-1">
              <span className="block font-mono text-xs text-zinc-400 font-extrabold uppercase tracking-widest">
                5.0 / 5.0 RATING INDEX
              </span>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                Flawless feedback record across premium country clubs, golf communities, and luxury lifestyle forums.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 hover:shadow-md transition-all duration-300 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-250 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-zinc-950" />
            </div>
            <div className="space-y-1">
              <span className="block font-mono text-xs text-zinc-400 font-extrabold uppercase tracking-widest">
                SECURE USA DISPATCH
              </span>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                Expert wrapping, fast insured freight dispatch on heavy steel-reinforced base crates.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 hover:shadow-md transition-all duration-300 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-250 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-zinc-950" />
            </div>
            <div className="space-y-1">
              <span className="block font-mono text-xs text-zinc-400 font-extrabold uppercase tracking-widest">
                UNCOMPROMISED DESIGN
              </span>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                We construct only premium-grade electric vehicles, customized with certified high-capacity drivetrains.
              </p>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
