import React from 'react'
import { PicFour } from "../../assets/index";
import { FaCode, FaAward } from "react-icons/fa";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative py-6 lgl:py-12">
      {/* Background Soft Glow Shape */}
      <div className="absolute w-[300px] h-[340px] lgl:w-[420px] lgl:h-[480px] bg-gradient-to-tr from-indigo-100 via-blue-50 to-indigo-50 rounded-3xl -rotate-2 scale-105 border border-indigo-100/60 shadow-sm" />

      {/* Main Photo Card Frame */}
      <div className="relative z-10 bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-slate-200/90 group">
        <img
          className="w-[270px] h-[340px] sm:w-[320px] sm:h-[400px] lgl:w-[380px] lgl:h-[480px] object-cover rounded-2xl shadow-sm transition-transform duration-500 group-hover:scale-[1.01]"
          src={PicFour}
          alt="Mohammed Hassan"
        />

        {/* Floating Stat Badge 1 - Experience */}
        <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-3 animate-float">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg">
            <FaAward />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">10+ Years Exp.</p>
            <p className="text-[10px] text-slate-500 font-medium">Software Engineer</p>
          </div>
        </div>

        {/* Floating Stat Badge 2 - Projects */}
        <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg">
            <FaCode />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">50+ Web Builds</p>
            <p className="text-[10px] text-slate-500 font-medium">React & Laravel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBanner;
