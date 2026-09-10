import React from 'react';
import { FaGithub, FaLinkedinIn, FaReact, FaLaravel } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-4">
      <div>
        <h2 className="text-xs uppercase font-titleFont text-slate-400 font-bold tracking-widest mb-3">
          CONNECT WITH ME
        </h2>
        <div className="flex gap-3">
          <a
            href="https://github.com/Mohassan1122"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            title="GitHub Profile"
          >
            <FaGithub className="text-slate-700 hover:text-indigo-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-hassan-49a8281b7"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            title="LinkedIn Profile"
          >
            <FaLinkedinIn className="text-slate-700 hover:text-indigo-600" />
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-xs uppercase font-titleFont text-slate-400 font-bold tracking-widest mb-3">
          CORE TECH STACK
        </h2>
        <div className="flex gap-3">
          <span className="bannerIcon text-cyan-600" title="React.js">
            <FaReact />
          </span>
          <span className="bannerIcon text-blue-600" title="TypeScript">
            <SiTypescript />
          </span>
          <span className="bannerIcon text-red-600" title="Laravel">
            <FaLaravel />
          </span>
          <span className="bannerIcon text-sky-500" title="Tailwind CSS">
            <SiTailwindcss />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
