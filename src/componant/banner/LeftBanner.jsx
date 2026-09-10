import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { Link as ScrollLink } from 'react-scroll';
import { FaPaperPlane, FaArrowRight } from 'react-icons/fa';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full-Stack Developer.", "React & TypeScript Specialist.", "Laravel & API Architect.", "Software Engineer."],
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 20,
      delaySpeed: 2000,
    });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold w-fit shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available for Senior Engineering Roles
        </div>

        <h1 className="text-4xl sm:text-5xl lgl:text-6xl font-extrabold text-slate-900 font-titleFont tracking-tight leading-tight">
          Hi, I'm <span className="text-indigo-600">Mohammed Hassan</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl lgl:text-4xl font-bold text-slate-800 font-titleFont">
          a <span className="text-indigo-600">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#4f46e5"
          />
        </h2>

        <p className="text-base font-bodyFont text-slate-600 leading-relaxed tracking-normal max-w-xl">
          Senior Full-Stack Software Engineer with 10+ years of experience engineering high-performance web systems. Specializing in React 19, TypeScript, TanStack Query, Laravel REST APIs, and scalable cloud services.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md shadow-indigo-200 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <FaPaperPlane className="text-sm" /> Get In Touch
          </ScrollLink>

          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-indigo-600 border border-slate-300 font-semibold shadow-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            Explore Projects <FaArrowRight className="text-xs" />
          </ScrollLink>
        </div>
      </div>

      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner;
