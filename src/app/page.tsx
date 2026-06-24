"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, LayoutGrid, Calendar, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="mx-auto my-8 w-full max-w-[412px] h-[892px] bg-gradient-to-b from-[#0a2540] via-[#005c9e] to-[#003366] rounded-[40px] shadow-2xl overflow-hidden border-8 border-slate-900 flex flex-col relative select-none font-sans text-white">
      
      {/* Universal Simulated Status Bar */}
      <div className="w-full px-6 pt-3 pb-2 flex justify-between items-center text-xs font-semibold bg-white text-slate-900 z-20">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <span>📶</span> <span>🛜</span> <span>🔋</span>
        </div>
      </div>

      {/* Scrollable Viewport Body Content */}
      <div className="flex-1 overflow-y-auto pb-6 custom-scrollbar">
        
        {/* 1. Brand Hero Panel Section */}
        <div className="relative w-full h-[240px] bg-slate-800 flex flex-col items-center justify-center px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80')]" />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-950/80 to-[#0a2540]" />

          <div className="relative z-10 space-y-3 w-full max-w-xs">
            <div className="inline-block bg-[#005c9e] border border-sky-400 text-white font-black italic tracking-wider px-6 py-1.5 rounded-full text-sm shadow-md">
              Carrier
            </div>
            <p className="text-[11px] font-serif uppercase tracking-widest text-sky-200">The Air Authority Center</p>
            
            {/* Landing Page Hero Segment Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link href="/login" className="bg-[#005c9e] hover:bg-sky-600 text-white font-sans text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-lg border border-sky-400 text-center shadow-md transition-all">
                Consult
              </Link>
              <Link href="/work" className="bg-white hover:bg-slate-100 text-[#0a2540] font-sans text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-lg text-center shadow-md transition-all">
                Gallery
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Philosophy Branding Row */}
        <div className="px-6 py-8 text-center flex flex-col items-center space-y-3">
          <div className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg border border-sky-200">
            <Home size={22} className="text-[#0a2540]" />
          </div>
          <h2 className="text-base font-serif tracking-wide font-bold">The Marc Signature</h2>
          <p className="text-[11px] text-slate-200 max-w-sm mx-auto leading-relaxed font-sans opacity-90">
            Where binary precision meets artistic intuition. We believe every corner should tell a story of intentionality, balance, and quiet luxury.
          </p>
        </div>

        {/* 3. Showcase Image Carousel Section */}
        <div className="px-4 pb-6 space-y-2">
          <span className="text-[9px] font-bold uppercase tracking-widest text-sky-300 block">Curated Works</span>
          <h3 className="text-sm font-serif font-bold tracking-wide">Visual</h3>
          
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80" 
              alt="Showroom Portfolio Work View" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-md p-1 rounded-lg border border-white/10">
              <button type="button" className="p-1 hover:bg-white/20 text-white rounded"><ChevronLeft size={14} /></button>
              <button type="button" className="p-1 hover:bg-white/20 text-white rounded"><ChevronRight size={14} /></button>
            </div>
          </div>
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-sky-200 pt-1">Service Excellence</p>
        </div>

        {/* 4. Modular Four-Card Framework Grid */}
        <div className="grid grid-cols-2 gap-3 px-4 pb-6 text-slate-800">
          <div className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-md border border-sky-100">
            <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 border mb-2">
              <Home size={16} />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-700">Residential</span>
          </div>

          <div className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-md border border-sky-100">
            <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 border mb-2">
              <LayoutGrid size={16} />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-700">Commercial</span>
          </div>

          <div className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-md border border-sky-100">
            <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 border mb-2">
              <Calendar size={16} />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-700">Book</span>
          </div>

          <div className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-md border border-sky-100">
            <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 border mb-2">
              <MessageSquare size={16} />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-700">Inquire</span>
          </div>
        </div>

        {/* 5. Direct Action Call-to-Action Anchor Button (Rerouted directly to Login Page) */}
        <div className="px-4 pb-4">
          <Link href="/login" className="block w-full bg-[#161b33] hover:bg-[#20274a] border border-white/10 text-white font-sans text-center text-[11px] font-bold uppercase tracking-widest py-3.5 rounded-xl shadow-lg transition-all active:scale-[0.98]">
            Ready To Begin?
          </Link>
        </div>

        {/* 6. Legal Footnote Row & Media Social Icon Layout Hooks */}
        <div className="bg-black/20 w-full py-6 px-4 text-center border-t border-white/5 space-y-4">
          <div className="flex justify-center items-center gap-4 text-sm opacity-80">
            <span className="cursor-pointer hover:opacity-100 transition-opacity">📸</span>
            <span className="cursor-pointer hover:opacity-100 transition-opacity">🐦</span>
            <span className="cursor-pointer hover:opacity-100 transition-opacity">👥</span>
          </div>
          <p className="text-[9px] tracking-widest text-slate-400 uppercase leading-relaxed font-mono">
            © 2026 Mark Custom Designs -<br />Est 2012
          </p>
        </div>

      </div>
    </div>
  );
}