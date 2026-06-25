"use client";

import { useState } from "react";
import { Layers, Plus, FolderSync, CheckCircle2 } from "lucide-react";

export default function BuildMilestonePage() {
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [showSavedNotification, setShowSavedNotification] = useState(false);

  const initialMilestones = [
    { title: "Initial Consultation", complete: true },
    { title: "Design Proposal", complete: true },
    { title: "Material Selection", complete: false },
    { title: "Execution", complete: false },
    { title: "Final Handover", complete: false }
  ];

  const handleSaveTrack = () => {
    setShowRoadmap(false);
    setShowSavedNotification(true);
  };

  return (
    <div className="flex flex-col min-h-full relative bg-slate-50">
      {/* Upper Module Bar Banner */}
      <div className="bg-[#0081C9] text-white px-5 py-4 shadow-xs shrink-0">
        <h2 className="text-base font-bold tracking-tight">Active Builds</h2>
        <span className="text-[10px] font-bold text-white/75 uppercase tracking-widest block">Project Logistics</span>
      </div>

      <div className="p-4 space-y-4 flex-1">
        
        {/* Core Logistics Container Dashboard */}
        <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-xs space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-extrabold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg uppercase tracking-wider">
              Ongoing
            </span>
            <div className="text-right">
              <span className="text-xl font-black text-[#0081C9] block">40%</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Completed</span>
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="text-sm font-extrabold text-slate-800">Living Room Design</h4>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#0081C9] h-full rounded-full transition-all duration-500" style={{ width: "40%" }} />
            </div>
          </div>

          {/* Design Concept Empty Pipeline Element */}
          <div className="border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl p-6 text-center space-y-2">
            <div className="flex justify-between items-center px-1">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Design Concepts</span>
              <Plus className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
            </div>
            <div className="py-4 flex flex-col items-center justify-center text-slate-300">
              <Layers className="w-8 h-8 stroke-[1.5] mb-2" />
              <span className="text-[11px] font-bold uppercase tracking-wider">No Concepts Uploaded</span>
            </div>
          </div>

          {/* Access Flow Routing Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button 
              onClick={() => setShowRoadmap(true)}
              className="bg-[#1D1B40] hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-xs"
            >
              PROJECT ROADMAP
            </button>
            <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 font-bold py-3 rounded-xl text-xs transition-colors">
              VIEW PROFILE
            </button>
          </div>
        </div>

      </div>

      {/* ROADMAP MILESTONE SHEET INTERACTION COMPONENT */}
      {showRoadmap && (
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs flex items-end justify-center z-50 animate-in slide-in-from-bottom duration-300">
          <div className="bg-white w-full rounded-t-[32px] p-5 shadow-2xl space-y-5 border-t border-slate-200">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-800">Project Roadmap</h3>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Manage Milestone</span>
            </div>

            {/* Total progress calculation meter */}
            <div className="flex justify-between items-end border-b border-slate-100 pb-3">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">Total Progress</span>
                <div className="w-36 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#0081C9] h-full" style={{ width: "40%" }} />
                </div>
              </div>
              <span className="text-xl font-black text-[#0081C9]">40%</span>
            </div>

            {/* Selection Checkbox Elements Container */}
            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
              {initialMilestones.map((milestone, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 border border-slate-150 p-3.5 rounded-xl">
                  <input 
                    type="checkbox" 
                    defaultChecked={milestone.complete}
                    className="w-4 h-4 rounded text-[#0081C9] focus:ring-0 cursor-pointer"
                  />
                  <span className={`text-xs font-bold ${milestone.complete ? "text-slate-800" : "text-slate-400"}`}>
                    {milestone.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Management Trigger Footer */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button 
                onClick={handleSaveTrack}
                className="bg-[#0081C9] hover:bg-blue-600 text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-xs"
              >
                SAVE CHANGES
              </button>
              <button 
                onClick={() => setShowRoadmap(false)}
                className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 font-bold py-3 rounded-xl text-xs transition-colors"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SAVED OVERLAY SHEET ELEMENT */}
      {showSavedNotification && (
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-6 z-50 animate-in fade-in duration-200">
          <div className="bg-[#F3F8FC] border border-slate-200 w-full max-w-[320px] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl">
            <div className="bg-[#65C97A] text-white p-3.5 rounded-full shadow-md mb-4">
              <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
            </div>
            <h4 className="text-slate-800 font-black text-sm tracking-widest uppercase">SAVED!</h4>
            <button 
              onClick={() => setShowSavedNotification(false)}
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