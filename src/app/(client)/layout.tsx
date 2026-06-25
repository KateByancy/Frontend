"use client";

import { Home, MessageSquare, CreditCard, User, Calendar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Client specific route mapping
const clientNavItems = [
  { icon: Home, label: "Home", href: "/home" },
  { icon: MessageSquare, label: "Chat", href: "/chat" },
  { icon: CreditCard, label: "Payment", href: "/payment" },
  { icon: Calendar, label: "Schedule", href: "/schedule" },
  { icon: User, label: "Profile", href: "/profile" },
];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-[430px] h-[932px] bg-slate-50 text-slate-800 shadow-2xl relative flex flex-col overflow-hidden border border-gray-800 md:rounded-[40px]">
      {/* Top Status Bar Notch Simulator */}
      <div className="w-full h-11 bg-white flex justify-between items-center px-6 text-xs font-semibold shrink-0 select-none">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-3 bg-slate-800 rounded-xs block"></span>
          <span className="w-3 h-3 bg-slate-800 rounded-full block"></span>
        </div>
      </div>
      
      {/* Client View Panel Layout */}
      <main className="flex-1 overflow-y-auto pb-24">
        {children}
      </main>

      {/* Persistent Client Navigation Footer */}
      <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 h-20 px-4 pb-4 flex justify-between items-center z-50">
        {clientNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link 
              key={item.label} 
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive ? "text-indigo-600" : "text-slate-400 hover:text-indigo-600"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] mt-1 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}