import { LogOut, MapPin, Calendar, Users, Receipt, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomeDashboard() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Custom Navigation Banner */}
      <header className="bg-[#0081C9] text-white px-5 pt-4 pb-5 flex justify-between items-start shrink-0">
        <div className="space-y-1">
          <span className="text-[10px] bg-white/20 text-white font-extrabold uppercase px-2 py-0.5 rounded-sm tracking-widest block w-fit">
            Administrator
          </span>
          <h1 className="text-xl font-bold tracking-tight">Dashboard</h1>
        </div>
        <Link href="/" className="p-1 hover:bg-white/10 rounded-lg transition-colors mt-1">
          <LogOut className="w-5 h-5 transform rotate-180" />
        </Link>
      </header>

      {/* Scrollable Container Elements */}
      <div className="p-4 space-y-5 flex-1">
        
        {/* Build Pipeline Status Indicators */}
        <section className="space-y-2">
          <h3 className="text-[11px] font-black tracking-widest text-slate-400 uppercase">Build Pipeline</h3>
          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-[#F3A953] text-white text-center p-3 rounded-2xl shadow-xs">
              <span className="block text-xl font-black">1</span>
              <span className="text-[9px] font-bold uppercase tracking-wider opacity-90">Pending</span>
            </div>
            <div className="bg-[#5694CD] text-white text-center p-3 rounded-2xl shadow-xs">
              <span className="block text-xl font-black">0</span>
              <span className="text-[9px] font-bold uppercase tracking-wider opacity-90">Ongoing</span>
            </div>
            <div className="bg-[#65C97A] text-white text-center p-3 rounded-2xl shadow-xs">
              <span className="block text-xl font-black">0</span>
              <span className="text-[9px] font-bold uppercase tracking-wider opacity-90">Completed</span>
            </div>
          </div>
        </section>

        {/* Feature Shortcut Operations Grid */}
        <section className="grid grid-cols-2 gap-3">
          <div className="bg-[#1D1B40] text-white p-4 h-24 rounded-2xl flex flex-col justify-between shadow-xs relative overflow-hidden group cursor-pointer">
            <span className="font-extrabold text-sm tracking-tight">Fleet Map</span>
            <MapPin className="w-4 h-4 text-white/60 self-end" />
          </div>

          <Link href="/schedule" className="bg-[#F3F4F6] border border-slate-200 text-slate-800 p-4 h-24 rounded-2xl flex flex-col justify-between shadow-xs group">
            <span className="font-extrabold text-sm tracking-tight">Schedule</span>
            <Calendar className="w-4 h-4 text-slate-400 self-end" />
          </Link>

          <div className="bg-[#F3F4F6] border border-slate-200 text-slate-800 p-4 h-24 rounded-2xl flex flex-col justify-between shadow-xs cursor-pointer">
            <span className="font-extrabold text-sm tracking-tight">Clients</span>
            <Users className="w-4 h-4 text-slate-400 self-end" />
          </div>

          <div className="bg-[#1D1B40] text-white p-4 h-24 rounded-2xl flex flex-col justify-between shadow-xs cursor-pointer">
            <span className="font-extrabold text-sm tracking-tight">Payment Transactions</span>
            <Receipt className="w-4 h-4 text-white/60 self-end" />
          </div>
        </section>

        {/* Client Inquiries Overview Component */}
        <section className="space-y-1.5">
          <div className="flex justify-between items-center px-0.5">
            <h3 className="text-[11px] font-black tracking-widest text-slate-400 uppercase">Client Inquiries</h3>
            <span className="text-[10px] text-[#0081C9] font-bold cursor-pointer hover:underline">View all</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-xs">
            <p className="text-xs font-bold text-slate-400 italic">All Inquiries</p>
          </div>
        </section>

        {/* Recent Payments Quick Queue Container */}
        <section className="space-y-1.5">
          <div className="flex justify-between items-center px-0.5">
            <h3 className="text-[11px] font-black tracking-widest text-slate-400 uppercase">Recent Payments</h3>
            <span className="text-[10px] text-[#0081C9] font-bold cursor-pointer hover:underline">Verify</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex justify-between items-center shadow-xs">
            <div>
              <h4 className="text-xs font-bold text-slate-800 tracking-tight">Ref: #M022352</h4>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">₱15,000 • Pending</p>
            </div>
            <button className="text-[10px] font-black text-[#0081C9] bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 hover:bg-blue-100/70 transition-colors">
              GO TO QUEUE
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}