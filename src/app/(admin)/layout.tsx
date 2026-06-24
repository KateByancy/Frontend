"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, ShieldAlert, CheckSquare, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminWorkspaceShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    { name: "Overview Control Hub", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Project Assignments", href: "/admin/projects", icon: ShieldAlert },
    { name: "GCash Ledger Audits", href: "/admin/payments", icon: CheckSquare },
  ];

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900">
      {/* Permanent Fixed Left Navigation Sidebar */}
      <aside className="w-64 bg-[#1C1F35] text-white fixed h-full left-0 top-0 flex flex-col border-r border-white/5 z-40">
        <div className="p-6 border-b border-white/10">
          <span className="font-bold text-lg text-[#00FFCC] tracking-wider block">MARC MANAGEMENT</span>
          <span className="text-[9px] font-bold text-white/50 tracking-widest uppercase">Admin Actor Profile</span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {routes.map((route) => {
            const Icon = route.icon;
            const active = pathname === route.href;
            return (
              <Link
                key={route.name}
                href={route.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold tracking-wide transition-all ${
                  active ? "bg-[#0070C0] text-white shadow-md" : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                {route.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Button 
            variant="ghost" 
            onClick={() => router.push("/login")}
            className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10 text-xs font-bold gap-3"
          >
            <LogOut className="w-4 h-4" />
            Sign Out of Control Desk
          </Button>
        </div>
      </aside>

      {/* Main Content Area Container Panel */}
      <main className="flex-1 pl-64">
        <div className="p-8 max-w-5xl mx-auto space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
}