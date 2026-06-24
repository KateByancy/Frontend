"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Home } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/home");
  };

  const handleGoogleAuth = () => {
    // Modified: Instead of pushing directly to /home, trigger custom integration placeholder logic
    alert("Google Authentication initializing... (Ready to link your OAuth provider API here!)");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 py-8">
      <div className="w-full max-w-[412px] h-[892px] bg-gradient-to-b from-[#005c9e] via-[#003c73] to-[#0a192f] rounded-[40px] shadow-2xl overflow-hidden border-8 border-slate-900 flex flex-col relative select-none font-sans text-white">
        
        {/* Universal Simulated Status Bar */}
        <div className="w-full px-6 pt-3 pb-2 flex justify-between items-center text-xs font-semibold bg-white text-slate-900 z-50">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span>📶</span> <span>🛜</span> <span>🔋</span>
          </div>
        </div>

        {/* Floating Back Button */}
        <div className="absolute top-14 left-4 z-20">
          <Link href="/" className="w-8 h-8 bg-white/90 backdrop-blur text-[#005c9e] rounded-lg flex items-center justify-center shadow-md hover:bg-white transition-all">
            <ChevronLeft size={20} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Content Viewport */}
        <div className="flex-1 overflow-y-auto px-6 pt-16 pb-8 flex flex-col justify-between">
          
          {/* Brand Header */}
          <div className="text-center mt-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#16223f] text-white rounded-2xl flex items-center justify-center shadow-xl border border-white/10 mb-3">
              <Home size={32} strokeWidth={1.5} />
            </div>
            <h1 className="text-2xl font-serif tracking-widest font-normal uppercase">MARC</h1>
            <p className="text-[9px] font-serif tracking-widest text-sky-200/80 uppercase mt-0.5">CUSTOM INTERIOR DESIGN</p>
          </div>

          {/* Core Interactive Credentials Form */}
          <form onSubmit={handleLogin} className="space-y-4 mt-2">
            <div>
              <label className="block text-[9px] font-bold uppercase tracking-widest text-sky-200/90 mb-1.5 ml-1">EMAIL ADDRESS</label>
              <input
                type="email"
                required
                placeholder="John@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white text-slate-800 rounded-xl outline-none text-xs font-medium shadow-md border-b-2 border-amber-600/30 focus:border-amber-500 transition-all placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-[9px] font-bold uppercase tracking-widest text-sky-200/90 mb-1.5 ml-1">PASSWORD</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white text-slate-800 rounded-xl outline-none text-xs font-medium shadow-md border-b-2 border-amber-600/30 focus:border-amber-500 transition-all placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#161b33] hover:bg-[#20274a] text-white text-[10px] font-bold uppercase tracking-widest py-3.5 rounded-xl shadow-lg border border-white/5 transition-all active:scale-[0.99] mt-2"
            >
              SIGN IN
            </button>
          </form>

          {/* Social Divider & Actions Layout Footer */}
          <div className="space-y-5 mt-4">
            <div className="relative flex py-2 items-center text-[9px] font-bold tracking-widest text-sky-200/50 uppercase">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-3">OR CONTINUE WITH</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            {/* Google Identity Federated System */}
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="w-full bg-white hover:bg-slate-50 text-slate-700 text-[10px] font-bold uppercase tracking-wider py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <img src="https://docs.idverify.net/images/google-icon.png" className="w-3.5 h-3.5 object-contain" alt="" onError={(e)=>{e.currentTarget.src="https://www.google.com/favicon.ico"}} />
              Continue with Google
            </button>

            {/* Navigation Alternate Bridge */}
            <div className="text-center">
              <Link href="/register" className="inline-block text-[9px] font-bold tracking-widest text-sky-200/70 hover:text-white uppercase transition-colors">
                NEW CLIENT? CREATE AN ACCOUNT
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}