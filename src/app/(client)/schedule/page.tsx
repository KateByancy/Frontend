"use client";

import { useState } from "react";
import { CheckCircle, Calendar as CalendarIcon } from "lucide-react";

export default function SchedulePage() {
  const [flow, setFlow] = useState<"initial" | "calendar" | "confirmed">("initial");
  const [selectedDate, setSelectedDate] = useState("");

  const daysInApril = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col min-h-full">
      <div className="bg-[#007cc2] text-white p-5 flex justify-between items-center shadow-sm">
        <h1 className="text-xl font-serif font-bold">Schedules</h1>
        <span>›</span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-center">
        {flow === "initial" && (
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-md text-center text-xs space-y-4">
            <div className="flex flex-col items-center gap-1">
              <CalendarIcon size={32} className="text-[#007cc2] mb-1" />
              <h2 className="font-serif font-bold text-sm text-slate-800">Schedule Project</h2>
              <p className="text-slate-400 text-[10px]">Select your target start date</p>
            </div>
            
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              value={selectedDate}
              onClick={() => setFlow("calendar")}
              readOnly
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center outline-none cursor-pointer text-slate-800 font-medium font-mono"
            />

            <button 
              disabled={!selectedDate}
              onClick={() => setFlow("confirmed")}
              className="w-full bg-[#007cc2] text-white font-sans text-xs uppercase tracking-wider py-2.5 rounded-lg font-bold disabled:opacity-40 transition-all"
            >
              Confirm Schedule
            </button>
          </div>
        )}

        {flow === "calendar" && (
          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-xl text-xs">
            <div className="flex justify-between items-center mb-4">
              <span className="font-serif font-bold text-sm text-slate-800">April 2026</span>
              <span className="text-slate-400 text-xs tracking-widest font-bold">▲ ▼</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center font-bold text-slate-400 text-[9px] uppercase mb-2">
              <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {daysInApril.map((day) => (
                <button
                  key={day}
                  onClick={() => {
                    setSelectedDate(`04/${day}/2026`);
                    setFlow("initial");
                  }}
                  className={`p-2 rounded-lg text-xs font-semibold ${
                    day === 24 
                      ? "bg-sky-500 text-white font-bold shadow-md" 
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setFlow("initial")} 
              className="w-full border-t text-center pt-3 mt-3 text-[10px] text-slate-400 uppercase tracking-widest font-bold hover:text-slate-600"
            >
              Close
            </button>
          </div>
        )}

        {flow === "confirmed" && (
          <div className="bg-[#f2f7fa] border border-slate-200 p-5 rounded-2xl shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-sans font-bold text-slate-800 text-sm">Living Room</h3>
                <p className="text-[10px] text-slate-400">April 24th, 2026</p>
                <p className="text-xs text-slate-500 italic mt-2">"It is small"</p>
              </div>
              <span className="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full uppercase">
                Confirmed
              </span>
            </div>
            <div className="w-full bg-white p-2.5 rounded-xl border border-slate-200 flex items-center gap-2 text-[11px] text-slate-700 font-mono">
              <span>📅</span> SCHEDULED: Apr 24, 2026
            </div>
          </div>
        )}
      </div>
    </div>
  );
}