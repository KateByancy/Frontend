"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HardHat, DollarSign, Loader2, Check } from "lucide-react";

export default function AdminOverviewDashboard() {
  const tasks = [
    { id: "1024", client: "John Doe", type: "Living Room Modernization", issue: "GCash Ref: #882194881 Awaiting Audit" },
    { id: "1025", client: "Sarah Philips", type: "Commercial Kitchen Build", issue: "Milestone Proposal Approval Pending" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-black tracking-tight text-slate-900">Control Hub</h2>
        <p className="text-sm text-slate-500 mt-0.5">Manage back-office operational tasks and sync global project status logs.</p>
      </div>

      {/* Analytical Aggregation Cards Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Build Operations</CardTitle>
            <HardHat className="w-4 h-4 text-[#0070C0]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black">12 Active</div>
            <p className="text-[10px] text-emerald-600 font-bold mt-1">● 4 currently processing fabrication</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Action Items Remaining</CardTitle>
            <Loader2 className="w-4 h-4 text-amber-500 animate-spin" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black">2 Forms</div>
            <p className="text-[10px] text-amber-600 font-bold mt-1">Requires manual reference reviews</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Aggregated Claims Balance</CardTitle>
            <DollarSign className="w-4 h-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black">₱385,000</div>
            <p className="text-[10px] text-slate-400 mt-1">Gross verified deposits across accounts</p>
          </CardContent>
        </Card>
      </div>

      {/* Real-Time Processing Desk Table Element */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-xs font-bold text-slate-900 tracking-widest uppercase">Awaiting Action Queue</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {tasks.map((task) => (
            <div key={task.id} className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-colors hover:bg-slate-50/50">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-900">{task.client}</span>
                  <span className="text-[9px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded border">ID: #{task.id}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{task.type} — <span className="text-amber-600 font-medium">{task.issue}</span></p>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <Button size="sm" variant="outline" className="text-xs h-9 border-slate-200 text-slate-700 hover:bg-white">Review Request</Button>
                <Button size="sm" className="text-xs h-9 bg-[#0070C0] hover:bg-[#0055A5] text-white flex items-center gap-1.5 font-bold">
                  <Check className="w-3.5 h-3.5 stroke-[3]" /> Approve
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}