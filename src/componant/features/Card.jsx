import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({item:{title,des,icon}}) => {
  return (
    <div className="w-full p-8 rounded-2xl bg-white border border-slate-200/80 shadow-shadowOne hover:shadow-cardHover hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl mb-6 shadow-sm border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          {icon}
        </div>

        <h2 className="text-xl font-bold font-titleFont text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h2>

        <p className="text-slate-600 text-sm leading-relaxed font-normal">
          {des}
        </p>
      </div>

      <div className="pt-6 flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
        <span>Learn More</span>
        <HiArrowRight className="text-base" />
      </div>
    </div>
  );
}

export default Card;