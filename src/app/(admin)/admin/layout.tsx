"use client";

import { LayoutGrid, Calendar, BookOpen, Hammer, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Updated paths to point securely to the non-colliding admin routes
const navItems = [
  { icon: LayoutGrid, label: "ADMIN", href: "/admin/dashboard" },
  { icon: Calendar, label: "SCHED", href: "/admin/schedule" }, 
  { icon: BookOpen, label: "BOOK", href: "/admin/bookings" },  
  { icon: Hammer, label: "BUILD", href: "/admin/build" },      
  { icon: Settings, label: "SETTINGS", href: "/admin/settings" } 
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-[430px] h-[932px] bg-slate-50 text-slate-800 shadow-2xl relative flex flex-col overflow-hidden border border-gray-800 md:rounded-[40px] font-sans">
      {/* Simulation Top Status Header Bar */}
      <div className="w-full h-11 bg-white flex justify-between items-center px-6 text-xs font-semibold shrink-0 select-none z-40">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <span className="w-3.5 h-2.5 bg-slate-800 rounded-xs block"></span>
          <span className="w-2.5 h-2.5 bg-slate-800 rounded-full block"></span>
        </div>
      </div>
      
      {/* Content Injection Layer */}
      <main className="flex-1 overflow-y-auto pb-24 bg-slate-50">
        {children}
      </main>

      {/* Shared Adaptive Sticky Mobile Footer Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 bg-[#0081C9] h-20 px-3 pb-3 flex justify-between items-center z-50">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          // Matches perfectly even if the sub-page path has extra parameters or queries
          const isActive = pathname === item.href;

          return (
            <Link 
              key={item.label} 
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all rounded-xl ${
                isActive 
                  ? "bg-white text-[#0081C9] py-1.5 shadow-xs font-bold scale-105" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5 stroke-[2.5]" />
              <span className="text-[9px] mt-1 tracking-wider font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}