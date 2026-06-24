"use client";

import { useRouter } from "next/navigation";
import { LogOut, ShieldCheck, Trash2 } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    // Navigate back to the main system landing page
    router.push("/");
  };

  return (
    <div className="p-4 space-y-4 text-xs">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-serif font-bold text-slate-800">Profile Settings</h1>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">Personal Details</p>
        </div>
        {/* Functional Logout Trigger Action */}
        <button 
          onClick={handleLogout}
          className="p-2 border border-slate-200 rounded-xl bg-white shadow-sm hover:bg-red-50 hover:border-red-200 transition-colors group"
          title="Log Out"
        >
          <LogOut size={16} className="text-slate-600 group-hover:text-red-600 transition-colors" />
        </button>
      </div>

      {/* Profile Details Cards */}
      <div className="flex flex-col items-center py-2">
        <div className="w-20 h-20 bg-slate-200 border-2 border-white rounded-full flex items-center justify-center text-2xl font-serif shadow-md relative text-slate-700 font-bold">
          J
          <button type="button" className="absolute bottom-0 right-0 bg-slate-900 text-white p-1.5 rounded-full text-[10px] shadow-md">📷</button>
        </div>
        <h2 className="text-base font-serif font-bold text-slate-800 mt-2">John Doe</h2>
        <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Client</p>
      </div>

      <form className="bg-white border border-slate-200 p-4 rounded-2xl space-y-3 shadow-sm">
        <div>
          <label className="block text-slate-400 text-[9px] mb-1 uppercase tracking-wider font-semibold">Full Name</label>
          <input type="text" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none font-medium text-slate-800" defaultValue="John Doe" />
        </div>
        <div>
          <label className="block text-slate-400 text-[9px] mb-1 uppercase tracking-wider font-semibold">Phone Number</label>
          <input type="text" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none font-medium text-slate-800" defaultValue="09171234567" />
        </div>
        <div>
          <label className="block text-slate-400 text-[9px] mb-1 uppercase tracking-wider font-semibold">Project Address</label>
          <input type="text" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none font-medium text-slate-800" defaultValue="Manila, Philippines" />
        </div>

        <button type="button" className="w-full bg-[#191d3a] text-white text-xs uppercase tracking-widest py-3 rounded-xl font-bold mt-2 shadow-md">
          Save Changes
        </button>
      </form>

      <div className="space-y-2 pt-2">
        <button type="button" className="w-full bg-white border border-slate-200 p-3 rounded-xl flex items-center justify-between shadow-sm hover:bg-slate-50">
          <span className="flex items-center gap-2 text-slate-700 font-semibold"><ShieldCheck size={16} className="text-emerald-500" /> Two-factor Authentication</span>
          <span className="text-slate-400">›</span>
        </button>
        <button type="button" className="w-full bg-white border border-red-100 p-3 rounded-xl flex items-center justify-between text-red-600 shadow-sm hover:bg-red-50 font-semibold">
          <span className="flex items-center gap-2"><Trash2 size={16} /> Delete Account</span>
        </button>
      </div>
    </div>
  );
}