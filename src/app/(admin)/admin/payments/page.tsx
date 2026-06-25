"use client";
import { useState } from "react";
import { CheckCircle2, XCircle, ArrowLeft, CreditCard } from "lucide-react";
import Link from "next/link";

export default function PaymentsPage() {
  // Simulating the acceptance/decline state from your wireframe overlay
  const [status, setStatus] = useState<"pending" | "accepted" | "declined">("pending");

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Top Header */}
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center gap-3">
        <Link href="/dashboard" className="p-1 hover:bg-white/10 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-bold text-base">Payment Notification</h1>
      </div>

      {/* Main Container */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        
        {status === "pending" && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6 mt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Milestone Payment</span>
                <h2 className="text-lg font-bold text-slate-800">Initial Deposit</h2>
              </div>
            </div>

            <div className="border-t border-b border-slate-100 py-4 flex justify-between items-baseline">
              <span className="text-xs text-slate-500 font-medium">Total Amount Due</span>
              <span className="text-2xl font-black text-slate-900">$4,500.00</span>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button 
                onClick={() => setStatus("accepted")}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-xs"
              >
                Accept
              </button>
              <button 
                onClick={() => setStatus("declined")}
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-xs"
              >
                Decline
              </button>
            </div>
          </div>
        )}

        {/* Accepted State Overlay */}
        {status === "accepted" && (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-emerald-100 p-4 rounded-full text-emerald-600 mb-4 shadow-sm">
              <CheckCircle2 className="w-16 h-16" />
            </div>
            <h2 className="text-xl font-black text-emerald-800 uppercase tracking-wide">Accepted</h2>
            <p className="text-xs text-slate-500 mt-2 max-w-[240px]">The transaction has been approved and moved to project funds.</p>
            <button 
              onClick={() => setStatus("pending")}
              className="mt-6 text-xs text-slate-500 underline font-medium hover:text-slate-800"
            >
              Reset view
            </button>
          </div>
        )}

        {/* Declined State Overlay */}
        {status === "declined" && (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-rose-100 p-4 rounded-full text-rose-600 mb-4 shadow-sm">
              <XCircle className="w-16 h-16" />
            </div>
            <h2 className="text-xl font-black text-rose-800 uppercase tracking-wide">Declined</h2>
            <p className="text-xs text-slate-500 mt-2 max-w-[240px]">Payment notification rejected. Client will be notified.</p>
            <button 
              onClick={() => setStatus("pending")}
              className="mt-6 text-xs text-slate-500 underline font-medium hover:text-slate-800"
            >
              Reset view
            </button>
          </div>
        )}

      </div>
    </div>
  );
}