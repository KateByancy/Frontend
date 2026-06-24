import { CheckCircle2, Circle } from "lucide-react";

export default function TrackPage() {
  const steps = [
    { title: "Initial Consultation", status: "Milestone Verified", done: true },
    { title: "Design Proposal", status: "Milestone Verified", done: true },
    { title: "Material Selection", status: "Pending updates", done: false },
    { title: "Execution", status: "", done: false },
    { title: "Final Handover", status: "", done: false },
  ];

  return (
    <div className="flex flex-col min-h-full">
      <div className="bg-[#007cc2] text-white p-5 shadow-sm">
        <h1 className="text-xl font-serif font-bold">Project Tracker</h1>
        <p className="text-[10px] uppercase tracking-widest opacity-80">Live Timeline</p>
      </div>

      <div className="p-4 space-y-4 text-xs">
        {/* Continuous Meter Display */}
        <div className="bg-[#f2f7fa] border border-slate-200 p-5 rounded-2xl shadow-sm">
          <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">Ongoing</span>
          <h2 className="text-sm font-sans font-bold text-slate-800 mt-0.5">Living Room Design</h2>
          
          <div className="mt-4">
            <div className="text-3xl font-serif font-bold text-[#007cc2]">
              40% <span className="text-[10px] font-sans text-slate-400 uppercase tracking-widest font-normal ml-1">Total Progress</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-2">
              <div className="bg-[#007cc2] h-full w-[40%] transition-all" />
            </div>
          </div>
        </div>

        {/* Dynamic Vertical Timeline Roadmap */}
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Build Roadmap</h3>
          <div className="relative pl-6 space-y-6 border-l border-slate-200">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-0 bg-white p-0.5 rounded-full">
                  {step.done ? (
                    <CheckCircle2 size={18} className="text-sky-500 fill-sky-50" />
                  ) : (
                    <Circle size={18} className="text-slate-300 fill-white" />
                  )}
                </div>
                <h4 className={`font-sans text-xs font-semibold ${step.done ? "text-slate-800" : "text-slate-400"}`}>
                  {step.title}
                </h4>
                {step.status && (
                  <p className="text-[9px] text-[#007cc2] uppercase tracking-wider font-bold mt-0.5">
                    {step.status}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}