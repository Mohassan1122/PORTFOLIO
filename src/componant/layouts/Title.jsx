import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-2.5 font-titleFont mb-12">
      <h3 className="text-xs uppercase font-bold text-indigo-600 tracking-widest">
       {title}
      </h3>
      <h1 className="text-3xl md:text-4xl lgl:text-5xl text-slate-900 font-extrabold tracking-tight capitalize">{des}</h1>
    </div>
  );
}

export default Title;