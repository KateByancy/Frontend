"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Home } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/home");
  };

  const handleGoogleAuth = () => {
    // Modified: Bypasses direct routing into dashboard layout
    alert("Google Registration setup running... (Ready to link your OAuth provider API here!)");
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

        {/* Content Viewport */}
        <div className="flex-1 overflow-y-auto px-6 pt-8 pb-6 flex flex-col justify-between custom-scrollbar">
          
          {/* Form Header Segment */}
          <div className="text-center flex flex-col items-center mb-4">
            <div className="w-14 h-14 bg-[#16223f] text-white rounded-2xl flex items-center justify-center shadow-xl border border-white/10 mb-2">
              <Home size={28} strokeWidth={1.5} />
            </div>
            <h1 className="text-xl font-serif tracking-wide font-normal">Register Now</h1>
            <p className="text-[9px] font-serif tracking-widest text-sky-200/70 uppercase mt-0.5">COMPLETE YOUR PROFILE</p>
          </div>

          {/* Profile Setup Input Grid */}
          <form onSubmit={handleRegister} className="space-y-3.5">
            <div>
              <label className="block text-[8px] font-bold uppercase tracking-widest text-sky-200/90 mb-1 ml-1">FULL NAME</label>
              <input
                type="text"
                required
                placeholder="John Doe Brown"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 bg-white text-slate-800 rounded-xl outline-none text-xs font-medium shadow-md border-b-2 border-amber-600/30 focus:border-amber-500 transition-all placeholder:text-slate-300"
              />
            </div>

            <div>
              <label className="block text-[8px] font-bold uppercase tracking-widest text-sky-200/90 mb-1 ml-1">PHONE NUMBER</label>
              <input
                type="tel"
                required
                placeholder="0917 000 0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 bg-white text-slate-800 rounded-xl outline-none text-xs font-medium shadow-md border-b-2 border-amber-600/30 focus:border-amber-500 transition-all placeholder:text-slate-300"
              />
            </div>

            <div>
              <label className="block text-[8px] font-bold uppercase tracking-widest text-sky-200/90 mb-1 ml-1">PROJECT ADDRESS</label>
              <input
                type="text"
                required
                placeholder="Barangay, City"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2.5 bg-white text-slate-800 rounded-xl outline-none text-xs font-medium shadow-md border-b-2 border-amber-600/30 focus:border-amber-500 transition-all placeholder:text-slate-300"
              />
            </div>

            <div>
              <label className="block text-[8px] font-bold uppercase tracking-widest text-sky-200/90 mb-1 ml-1">EMAIL ADDRESS</label>
              <input
                type="email"
                required
                placeholder="Johndoe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-white text-slate-800 rounded-xl outline-none text-xs font-medium shadow-md border-b-2 border-amber-600/30 focus:border-amber-500 transition-all placeholder:text-slate-300"
              />
            </div>

            <div>
              <label className="block text-[8px] font-bold uppercase tracking-widest text-sky-200/90 mb-1 ml-1">PASSWORD</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 bg-white text-slate-800 rounded-xl outline-none text-xs font-medium shadow-md border-b-2 border-amber-600/30 focus:border-amber-500 transition-all placeholder:text-slate-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#161b33] hover:bg-[#20274a] text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-xl shadow-lg border border-white/5 transition-all active:scale-[0.99] mt-4"
            >
              REGISTER NOW
            </button>
          </form>

          {/* Social Divider Framework */}
          <div className="space-y-4 mt-4">
            <div className="relative flex py-1 items-center text-[8px] font-bold tracking-widest text-sky-200/50 uppercase">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-3">OR CONTINUE WITH</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            {/* Google Authentication Platform Hook */}
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="w-full bg-white hover:bg-slate-50 text-slate-700 text-[10px] font-bold uppercase tracking-wider py-2.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <img src="https://docs.idverify.net/images/google-icon.png" className="w-3.5 h-3.5 object-contain" alt="" onError={(e)=>{e.currentTarget.src="https://www.google.com/favicon.ico"}} />
              Continue with Google
            </button>

            {/* Route Alternative Toggle Link */}
            <div className="text-center pt-1">
              <Link href="/login" className="inline-block text-[8px] font-bold tracking-widest text-sky-200/70 hover:text-white uppercase transition-colors">
                ALREADY A MEMBER? LOG IN
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}