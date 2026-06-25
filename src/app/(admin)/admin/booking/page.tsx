"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function BookingsInquiryPage() {
  const [modalState, setModalState] = useState<"idle" | "confirmed" | "rejected">("idle");

  return (
    <div className="flex flex-col min-h-full relative">
      {/* Banner Header Area */}
      <div className="bg-[#0081C9] text-white px-5 py-4 shadow-xs shrink-0">
        <h2 className="text-base font-bold tracking-tight">Booking Requests</h2>
        <span className="text-[10px] font-bold text-white/75 uppercase tracking-widest block">Manage Bookings</span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-start pt-6">
        
        {/* Core Inquiry Processing Request Box */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-5">
          <div className="space-y-1">
            <h3 className="font-extrabold text-base text-slate-800">John Doe</h3>
            <p className="text-xs font-semibold text-slate-500">Living Room Design</p>
            <p className="text-[11px] font-medium text-slate-400">April 14th, 2026</p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <p className="text-xs font-medium text-slate-600 italic leading-relaxed">
              &ldquo;It is small&rdquo;
            </p>
          </div>

          {/* Action Trigger Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button 
              onClick={() => setModalState("confirmed")}
              className="bg-[#65C97A] hover:bg-emerald-600 text-white text-xs font-bold py-3 rounded-xl transition-all shadow-xs"
            >
              CONFIRM
            </button>
            <button 
              onClick={() => setModalState("rejected")}
              className="bg-[#EA3B3B] hover:bg-rose-600 text-white text-xs font-bold py-3 rounded-xl transition-all shadow-xs"
            >
              REJECT
            </button>
          </div>
        </div>

      </div>

      {/* CONFIRMED OVERLAY ELEMENT */}
      {modalState === "confirmed" && (
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-6 z-50 animate-in fade-in duration-200">
          <div className="bg-[#F3F8FC] border border-slate-200 w-full max-w-[320px] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl">
            <div className="bg-[#65C97A] text-white p-3.5 rounded-full shadow-md mb-4">
              <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
            </div>
            <h4 className="text-slate-800 font-black text-sm tracking-widest uppercase">CONFIRMED!</h4>
            <button 
              onClick={() => setModalState("idle")}
              className="mt-6 text-[11px] font-bold text-slate-400 hover:text-slate-600 underline"
            >
              Dismiss Window
            </button>
          </div>
        </div>
      )}

      {/* REJECTED OVERLAY ELEMENT */}
      {modalState === "rejected" && (
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-6 z-50 animate-in fade-in duration-200">
          <div className="bg-[#F3F8FC] border border-slate-200 w-full max-w-[320px] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl">
            <div className="bg-[#EA3B3B] text-white p-3.5 rounded-full shadow-md mb-4">
              <XCircle className="w-12 h-12 stroke-[2.5]" />
            </div>
            <h4 className="text-slate-800 font-black text-sm tracking-widest uppercase">REJECTED!</h4>
            <button 
              onClick={() => setModalState("idle")}
              className="mt-6 text-[11px] font-bold text-slate-400 hover:text-slate-600 underline"
            >
              Dismiss Window
            </button>
          </div>
        </div>
      )}

    </div>
  );
}