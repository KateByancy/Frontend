export default function PaymentPage() {
  return (
    <div className="p-4 space-y-4 text-xs">
      <div>
        <h1 className="text-xl font-serif font-bold text-slate-800">Payments</h1>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">GCash Reference Confirmation</p>
      </div>

      {/* Recipient Account Meta Frame */}
      <div className="bg-[#f2f7fa] border border-slate-200 p-5 rounded-2xl text-center shadow-sm">
        <div className="w-10 h-10 bg-white rounded-xl shadow-inner flex items-center justify-center mx-auto text-xl mb-2">📱</div>
        <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-800">GCash Direct Pay</h2>
        <p className="text-slate-400 text-[10px] mt-1">Send payment to:</p>
        <p className="text-sm font-bold text-slate-800 font-mono tracking-wider">0917-123-4567</p>
        <p className="text-[10px] text-slate-400 italic">(Mark Custom Design)</p>
      </div>

      <form className="bg-white border border-slate-200 p-5 rounded-2xl space-y-4 shadow-sm">
        <div>
          <label className="block text-slate-400 text-[10px] mb-1 uppercase tracking-wider">Amount (PHP)</label>
          <input type="number" step="0.01" placeholder="0.00" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none font-mono text-slate-800 font-semibold" />
        </div>

        <div>
          <label className="block text-slate-400 text-[10px] mb-1 uppercase tracking-wider">Reference Number</label>
          <input type="text" placeholder="13-digit reference number" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none font-mono text-slate-800 font-semibold" />
        </div>

        <button type="button" className="w-full bg-[#191d3a] text-white text-xs uppercase tracking-widest py-3 rounded-xl font-bold shadow-md">
          Confirm Payment
        </button>
      </form>

      <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl flex items-start gap-2 text-[10px] text-emerald-800 leading-relaxed font-medium">
        <span>ℹ️</span>
        <p>MANUAL VERIFICATION WITHIN 24 HOURS. KEEP YOUR RECEIPT.</p>
      </div>
    </div>
  );
}