"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate a brief network delay
    setTimeout(() => {
      // 1. Check for Admin Account
      if (email === "marc@gmail.com" && password === "12345678") {
        router.push("/dashboard");
      } 
      // 2. Check for Client Account (Mocking a client credential here)
      else if (email === "client@gmail.com" && password === "client123") {
        router.push("/client-dashboard");
      } 
      // 3. Fallback for wrong credentials
      else {
        setLoading(false);
        setError("Invalid email or password. Please try again.");
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center p-4">
      <div className="w-full max-w-[400px] bg-white rounded-3xl shadow-xl p-8 space-y-6 border border-slate-100">
        
        {/* Header branding */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl mx-auto shadow-md">
            M
          </div>
          <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">MARC Portal</h1>
          <p className="text-xs text-slate-400">Sign in to access your custom dashboard</p>
        </div>

        {/* Error message block */}
        {error && (
          <div className="bg-rose-50 border border-rose-150 rounded-xl p-3 flex items-center gap-2.5 text-rose-700">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span className="text-xs font-semibold">{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-0.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-0.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-xs transition-colors shadow-sm disabled:opacity-50 tracking-wide"
          >
            {loading ? "Signing in..." : "Log In"}
          </button>
        </form>

        <div className="pt-2 text-center">
          <p className="text-[10px] text-slate-400">
            Demo Client: <span className="font-semibold text-slate-600">client@gmail.com</span> / <span className="font-semibold text-slate-600">client123</span>
          </p>
        </div>

      </div>
    </div>
  );
}