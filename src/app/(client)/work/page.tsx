export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="bg-[#007cc2] text-white p-5 shadow-sm">
        <h1 className="text-xl font-serif font-bold">Portfolio</h1>
        <p className="text-[10px] uppercase tracking-widest opacity-80">Featured Works</p>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-xs aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-sm">
          <span className="text-3xl mb-2">📁</span>
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Coming Soon</h2>
          <p className="text-[10px] text-slate-400 mt-1 max-w-[180px] leading-relaxed">
            We are updating our lookbooks with modern project completions.
          </p>
        </div>
      </div>
    </div>
  );
}