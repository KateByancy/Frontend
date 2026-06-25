import { LogOut, Camera, ShieldCheck, Trash2, Plus } from "lucide-react";
import Link from "next/link";

export default function AdministrativeSettingsPage() {
  return (
    <div className="flex flex-col min-h-full bg-slate-50">
      {/* Header Profile Title */}
      <div className="bg-[#0081C9] text-white px-5 pt-4 pb-5 flex justify-between items-start shrink-0 shadow-sm">
        <div className="space-y-1">
          <h2 className="text-base font-bold tracking-tight">Profile Settings</h2>
          <span className="text-[10px] font-bold text-white/75 uppercase tracking-widest block">Personal Identity</span>
        </div>
        <Link href="/" className="p-1 hover:bg-white/10 rounded-lg transition-colors mt-0.5">
          <LogOut className="w-5 h-5 transform rotate-180" />
        </Link>
      </div>

      <div className="p-4 space-y-5 flex-1">
        
        {/* Core Identity Profile Avatar Shield */}
        <div className="flex flex-col items-center justify-center py-4 space-y-2">
          <div className="relative">
            <div className="w-20 h-20 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-700 font-black text-2xl shadow-xs">
              M
            </div>
            <button className="absolute bottom-0 right-0 bg-[#1D1B40] text-white p-1.5 rounded-full shadow-md border border-white hover:bg-slate-800 transition-colors">
              <Camera className="w-3 h-3" />
            </button>
          </div>
          <div className="text-center">
            <h3 className="font-extrabold text-sm text-slate-800 tracking-tight">Marc</h3>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Admin</span>
          </div>
        </div>

        {/* Portfolio Updates Nested Block Component */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex justify-between items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Portfolio Updates</span>
          <button className="p-1.5 bg-slate-50 border border-slate-200 text-slate-500 rounded-lg hover:bg-slate-100 transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Editable Structural Inputs */}
        <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-xs space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider block px-0.5">Full Name</label>
            <input 
              type="text" 
              defaultValue="Marc"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider block px-0.5">Phone Number</label>
            <input 
              type="text" 
              placeholder="Enter contact number"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider block px-0.5">Primary Address</label>
            <input 
              type="text" 
              placeholder="Enter primary structural address"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <button className="w-full bg-[#1D1B40] hover:bg-slate-800 text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow-xs uppercase tracking-wider pt-4">
            Save Changes
          </button>
        </div>

        {/* Security Application Configuration Elements */}
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block px-1">App Configuration</span>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-3.5 flex items-center justify-between shadow-xs cursor-pointer hover:bg-slate-50/50 transition-colors">
            <div className="flex items-center gap-2.5 text-emerald-600">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold text-slate-700">Two-Factor Authentication</span>
            </div>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-bold uppercase tracking-wide">On</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-3.5 flex items-center justify-between shadow-xs cursor-pointer hover:bg-rose-50/30 transition-colors group">
            <div className="flex items-center gap-2.5 text-rose-500">
              <Trash2 className="w-4 h-4" />
              <span className="text-xs font-bold text-slate-700 group-hover:text-rose-600">Delete account</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}