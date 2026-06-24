"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ChatPage() {
  const [messages] = useState([
    {
      sender: "assistant",
      text: "Hi! I'm your Mark Interior Design assistant. I can help you browse styles, visualize layouts, or book a consultation. What's on your mind today?",
      time: "Today at 9:41 AM"
    }
  ]);

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Header identity bar layout */}
      <div className="bg-[#007cc2] text-white p-4 shadow-md flex items-center gap-3">
        <div className="w-9 h-9 bg-white text-slate-800 flex items-center justify-center text-lg rounded-xl shadow-md">
          💬
        </div>
        <div>
          <h1 className="text-xs font-bold uppercase tracking-wider">Design Assistant</h1>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[8px] uppercase tracking-widest text-emerald-200 font-bold">Always Online</span>
          </div>
        </div>
      </div>

      {/* Dynamic Conversational Area Scroll Window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        <div className="flex flex-col max-w-[85%] items-end ml-auto">
          <div className="bg-[#007cc2] text-white p-3 rounded-2xl rounded-tr-none shadow-sm font-medium">
            Hi.
          </div>
          <span className="text-[8px] text-slate-400 mt-1 mr-1">Today at 9:39 AM</span>
        </div>

        {messages.map((m, idx) => (
          <div key={idx} className="flex flex-col max-w-[85%] items-start mr-auto">
            <div className="bg-white text-slate-800 p-3.5 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm leading-relaxed">
              {m.text}
            </div>
            <span className="text-[8px] text-slate-400 mt-1 ml-1">{m.time}</span>
          </div>
        ))}
      </div>

      {/* Message Input Tray Footer Dock */}
      <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask Anything..."
          className="flex-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:bg-white focus:border-sky-400 transition-all text-slate-800"
        />
        <button className="p-2.5 bg-[#007cc2] text-white rounded-xl shadow-md hover:bg-sky-600 transition-transform active:scale-95">
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}