import React from 'react'

const ResumeCard = ({title,subTitle,result,des}) => {
  return (
    <div className="w-full group flex gap-4">
      <div className="w-6 relative flex justify-center items-start pt-6">
        <span className="w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100 group-hover:scale-125 transition-transform duration-300 z-10"></span>
      </div>
      <div className="w-full bg-white border border-slate-200/80 hover:border-indigo-300 rounded-2xl p-6 lgl:p-8 flex flex-col justify-center gap-4 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-indigo-600">
        <div className="flex flex-col lgl:flex-row justify-between gap-2 lgl:gap-4 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm font-medium text-slate-500 mt-1">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-3.5 py-1.5 text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full flex justify-center items-center text-xs font-semibold whitespace-nowrap">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-normal text-slate-600 leading-relaxed">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard