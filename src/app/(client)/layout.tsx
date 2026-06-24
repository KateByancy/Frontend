"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Calendar, Compass, MessageSquare } from "lucide-react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { label: "HOME", icon: Home, path: "/home" },
    { label: "WORK", icon: Briefcase, path: "/work" },
    { label: "BOOK", icon: Calendar, path: "/book" },
    { label: "TRACK", icon: Compass, path: "/track" },
    { label: "CHAT", icon: MessageSquare, path: "/chat" },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 py-8">
      <div className="w-full max-w-[412px] h-[892px] bg-slate-50 rounded-[40px] shadow-2xl overflow-hidden border-8 border-slate-900 flex flex-col relative select-none font-sans">
        
        {/* Status Bar */}
        <div className="w-full px-6 pt-3 pb-2 flex justify-between items-center text-xs font-semibold bg-white text-slate-900 z-50">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span>📶</span> <span>🛜</span> <span>🔋</span>
          </div>
        </div>

        {/* Viewport Content - Hides scrollbar globally */}
        <div 
          className="flex-1 overflow-y-auto pb-24 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>

        {/* Persistent App Navigation Base */}
        <nav className="absolute bottom-0 left-0 right-0 bg-[#007cc2] text-white flex justify-around items-center py-2 border-t border-sky-500 z-50">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.path);

            return (
              <Link
                key={item.label}
                href={item.path}
                className={`flex flex-col items-center justify-center flex-1 py-1 gap-0.5 transition-all ${
                  isActive 
                    ? "bg-white text-[#007cc2] rounded-xl mx-2 font-bold scale-105 shadow-sm" 
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <Icon size={18} />
                <span className="text-[9px] tracking-wider font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}