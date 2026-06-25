import { ArrowLeft, CheckCircle2, Circle } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  // Sample checklist items pulled straight from your roadmap interface view
  const roadmapSteps = [
    { title: "Initial Consultation", completed: true },
    { title: "Design Proposal", completed: true },
    { title: "Material Selection", completed: false },
    { title: "Permitting", completed: false },
    { title: "Final Handover", completed: false },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Top Header */}
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center gap-3">
        <Link href="/dashboard" className="p-1 hover:bg-white/10 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-bold text-base">Project Roadmap</h1>
      </div>

      <div className="p-5 space-y-5">
        {/* Project Header Summary Card */}
        <div className="bg-indigo-950 text-white rounded-2xl p-5 shadow-md relative overflow-hidden">
          <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-white/5 rounded-full pointer-events-none" />
          <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/30 text-blue-300 px-2.5 py-1 rounded-md">
            Active Status
          </span>
          <h2 className="text-base font-bold mt-3">John Doe Residence</h2>
          
          {/* Progress Bar indicator */}
          <div className="mt-4 space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">Overall Progress</span>
              <span className="text-blue-400">40%</span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full rounded-full transition-all duration-500" style={{ width: "40%" }}></div>
            </div>
          </div>
        </div>

        {/* Dynamic Checklist Pipeline Component */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">Development Pipeline</h3>
          
          <div className="space-y-2.5">
            {roadmapSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-colors ${
                  step.completed 
                    ? "bg-emerald-50/50 border-emerald-100 text-slate-800" 
                    : "bg-slate-50/70 border-slate-150 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  {step.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-300 shrink-0" />
                  )}
                  <span className="text-xs font-bold tracking-tight">{step.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action buttons at base of card */}
          <div className="grid grid-cols-2 gap-3 pt-3 mt-1">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-xs">
              Save Changes
            </button>
            <button className="bg-white hover:bg-slate-50 text-slate-500 border border-slate-200 font-bold py-2.5 rounded-xl text-xs transition-all">
              Cancel
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}