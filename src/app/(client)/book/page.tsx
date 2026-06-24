"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function BookPage() {
  const router = useRouter();
  const [step, setStep] = useState<"card" | "form" | "success">("card");
  const [service, setService] = useState("Living Room Design");
  const [desc, setDesc] = useState("I want modern design");

  return (
    <div className="flex flex-col min-h-full">
      <div className="bg-[#007cc2] text-white p-5 shadow-sm">
        <h1 className="text-xl font-serif font-bold">Booked</h1>
        <p className="text-[10px] uppercase tracking-widest opacity-80">Let's start something beautiful</p>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-center">
        {step === "card" && (
          <div className="bg-[#f2f7fa] border border-slate-200 p-5 rounded-2xl shadow-sm relative">
            <h2 className="text-sm font-sans font-bold text-slate-800">{service}</h2>
            <p className="text-xs text-slate-500 italic mt-1">"{desc}"</p>
            <button 
              onClick={() => setStep("form")} 
              className="absolute top-4 right-4 bg-[#191d3a] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg shadow-sm"
            >
              + Schedule Date
            </button>
          </div>
        )}

        {step === "form" && (
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-md space-y-4 text-xs">
            <h2 className="font-serif font-bold text-sm uppercase tracking-wider border-b pb-2">Book Now Form</h2>
            <div>
              <label className="block text-slate-400 mb-1 uppercase tracking-wider text-[10px]">Service Type</label>
              <input 
                type="text" 
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none font-medium" 
                value={service} 
                onChange={(e) => setService(e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1 uppercase tracking-wider text-[10px]">Project Description</label>
              <textarea 
                rows={3} 
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none resize-none font-medium" 
                value={desc} 
                onChange={(e) => setDesc(e.target.value)} 
              />
            </div>
            <button 
              onClick={() => setStep("success")} 
              className="w-full bg-[#191d3a] text-white text-xs uppercase tracking-widest py-3 rounded-xl font-bold shadow-md"
            >
              Submit Booking
            </button>
          </div>
        )}

        {step === "success" && (
          <div className="bg-[#f2f7fa] p-8 rounded-2xl border border-slate-200 text-center shadow-lg flex flex-col items-center">
            <CheckCircle size={52} className="text-emerald-500 mb-3" />
            <h2 className="text-base font-serif font-bold text-slate-800">Done Book!</h2>
            <button 
              onClick={() => router.push("/schedule")} 
              className="mt-4 bg-[#007cc2] text-white text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl font-semibold shadow-md"
            >
              Proceed to Schedule
            </button>
          </div>
        )}
      </div>
    </div>
  );
}