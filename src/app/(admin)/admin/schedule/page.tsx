import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SchedulingPage() {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  // Grid layout array modeling April 2026 scheduling specs
  const calendarCells = [
    { day: "29", currentMonth: false }, { day: "30", currentMonth: false }, { day: "31", currentMonth: false },
    { day: "1", currentMonth: true }, { day: "2", currentMonth: true }, { day: "3", currentMonth: true }, { day: "4", currentMonth: true },
    { day: "5", currentMonth: true }, { day: "6", currentMonth: true }, { day: "7", currentMonth: true }, { day: "8", currentMonth: true },
    { day: "9", currentMonth: true }, { day: "10", currentMonth: true }, { day: "11", currentMonth: true },
    { day: "12", currentMonth: true }, { day: "13", currentMonth: true }, { day: "14", currentMonth: true }, { day: "15", currentMonth: true },
    { day: "16", currentMonth: true }, { day: "17", currentMonth: true }, { day: "18", currentMonth: true },
    { day: "19", currentMonth: true }, { day: "20", currentMonth: true }, { day: "21", currentMonth: true }, { day: "22", currentMonth: true },
    { day: "23", currentMonth: true }, { day: "24", currentMonth: true, link: true }, { day: "25", currentMonth: true },
    { day: "26", currentMonth: true }, { day: "27", currentMonth: true }, { day: "28", currentMonth: true }, { day: "29", currentMonth: true },
    { day: "30", currentMonth: true }, { day: "1", currentMonth: false }, { day: "2", currentMonth: false }
  ];

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Dynamic Month Ribbon Banner */}
      <div className="bg-[#0081C9] text-white p-5 space-y-4 shrink-0 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold tracking-tight">April 2026</h2>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/70 block">Booking Schedule</span>
          </div>
          <div className="flex gap-1.5">
            <button className="p-1.5 bg-white text-slate-800 rounded-md shadow-xs hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button className="p-1.5 bg-white text-slate-800 rounded-md shadow-xs hover:bg-slate-50 transition-colors">
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid Header Labels */}
      <div className="grid grid-cols-7 text-center border-b border-slate-100 bg-slate-50/50 py-2.5">
        {daysOfWeek.map((day) => (
          <span key={day} className="text-[9px] font-black tracking-wider text-slate-400">{day}</span>
        ))}
      </div>

      {/* Calendar Grid Matrix */}
      <div className="grid grid-cols-7 flex-1 divide-x divide-y divide-slate-100 border-b border-slate-100">
        {calendarCells.map((cell, idx) => (
          <div 
            key={idx} 
            className={`h-20 p-1.5 flex flex-col justify-between transition-colors relative ${
              cell.currentMonth ? "bg-white text-slate-800" : "bg-slate-50/60 text-slate-300"
            }`}
          >
            <span className="text-xs font-bold">{cell.day}</span>
            
            {/* Embedded Active Appointment Badge Indicator */}
            {cell.link && (
              <span className="block w-full bg-blue-50 text-[#0081C9] text-[9px] font-extrabold p-1 rounded border border-blue-100 text-center truncate cursor-pointer shadow-xs">
                Links...
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}