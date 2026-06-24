"use client";

import { useState } from "react";
import Link from "next/link";
import { User } from "lucide-react";

export default function HomePage() {
  const [area, setArea] = useState<number>(0);
  const [style, setStyle] = useState<string>("Modern");
  const [complexity, setComplexity] = useState<string>("Standard");

  // Formula matching the image calculation
  const calculateEstimate = () => {
    if (!area || area <= 0) return "₱0 - ₱0";
    let basePrice = style === "Modern" ? 3000 : 4500;
    if (complexity === "Premium") basePrice *= 1.4;
    
    const lowRange = area * basePrice;
    const highRange = Math.round(lowRange * 1.2);
    return `₱${lowRange.toLocaleString()} - ₱${highRange.toLocaleString()}`;
  };

  return (
    <div className="flex flex-col min-h-full">
      {/* Header Profile Title Panel */}
      <div className="bg-[#007cc2] text-white p-6 flex justify-between items-center shadow-md">
        <div>
          <h1 className="text-2xl font-serif tracking-wide font-semibold">Doe, John</h1>
          <p className="text-xs opacity-90 font-serif italic">Your dream home is in progress.</p>
        </div>
        <Link href="/profile" className="p-2 hover:bg-sky-600 rounded-full transition-colors">
          <User size={22} />
        </Link>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* Estimate Tool Interface Box */}
        <div className="bg-[#191d3a] text-white p-5 rounded-2xl shadow-xl">
          <div className="flex items-center gap-2 mb-2 text-[10px] tracking-widest text-teal-400 font-bold uppercase">
            <span>🟦</span> Estimate Tool
          </div>
          <h2 className="text-sm font-sans mb-4 text-slate-300">Quick Quote Calculator</h2>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-400 text-[9px] uppercase tracking-wider mb-1">Total Floor Area (sqm)</label>
              <input
                type="number"
                value={area || ""}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white outline-none focus:border-sky-500 font-mono"
                placeholder="0"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 text-[9px] uppercase tracking-wider mb-1">Design Style</label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white outline-none"
                >
                  <option>Modern</option>
                  <option>Minimalist</option>
                  <option>Industrial</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-400 text-[9px] uppercase tracking-wider mb-1">Complexity</label>
                <select
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white outline-none"
                >
                  <option>Standard</option>
                  <option>Premium</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-700">
            <span className="text-[10px] block text-slate-400 uppercase tracking-wider">Estimated Range</span>
            <div className="text-2xl font-serif font-bold text-sky-400 mt-1">{calculateEstimate()}</div>
            <p className="text-[10px] text-slate-400 mt-2 leading-relaxed italic">
              This is a preliminary appraisal and subject to technical site assessment.
            </p>
          </div>
        </div>

        {/* Empty Booking Area State Card */}
        <div className="bg-[#f2f7fa] border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
          <p className="text-slate-700 font-serif text-sm mb-4">
            No active projects yet. Let's start something beautiful.
          </p>
          <Link href="/book" className="inline-block bg-slate-900 text-white font-sans text-[11px] font-bold uppercase tracking-widest px-6 py-3 rounded-lg shadow-md hover:bg-slate-800 transition-transform active:scale-95">
            Book Now!
          </Link>
        </div>

        {/* Sub Navigation Cards */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/payment" className="bg-[#f2f7fa] border border-slate-100 p-4 rounded-2xl flex flex-col items-center text-center shadow-sm hover:border-sky-400 transition-all">
            <span className="text-2xl mb-2">💵</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">Payments</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Submit Ref. Num</span>
          </Link>

          <Link href="/schedule" className="bg-[#f2f7fa] border border-slate-100 p-4 rounded-2xl flex flex-col items-center text-center shadow-sm hover:border-sky-400 transition-all">
            <span className="text-2xl mb-2">📅</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">Schedules</span>
            <span className="text-[10px] text-slate-400 mt-0.5">View and manage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}