import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, githubUrl, liveUrl, tech = [] }) => {
  return (
    <div className="w-full p-5 xl:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-shadowOne hover:shadow-cardHover hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div className="w-full h-52 overflow-hidden rounded-xl bg-slate-100 relative mb-5 border border-slate-200/60">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            src={src}
            alt={title}
          />
        </div>

        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold font-titleFont text-slate-900 group-hover:text-indigo-600 transition-colors duration-300 leading-snug">
            {title}
          </h3>
          <div className="flex gap-2 shrink-0 pt-0.5">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Source Code"
                className="text-base w-9 h-9 rounded-xl bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 border border-slate-200 inline-flex items-center justify-center"
              >
                <BsGithub />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Preview"
                className="text-base w-9 h-9 rounded-xl bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 border border-slate-200 inline-flex items-center justify-center"
              >
                <FaGlobe />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
          {des}
        </p>
      </div>

      {tech && tech.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-indigo-50/80 text-indigo-700 font-semibold border border-indigo-100"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectsCard;
