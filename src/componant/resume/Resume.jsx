import React, { useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience"

const Resume = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="resume" className="w-full py-16 md:py-24 border-b border-slate-200/80">
      <Title title="ENGINEERING COMPETENCIES & TRACK RECORD" des="My Resume" />

      <div className="mb-10">
        <ul className="w-full bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 shadow-inner">
          <li
            onClick={() => setActiveTab("skills")}
            className={`${
              activeTab === "skills"
                ? "bg-white text-indigo-600 shadow-md border border-slate-200/80 font-bold"
                : "text-slate-600 hover:text-indigo-600 hover:bg-white/50 font-medium"
            } h-12 rounded-xl flex justify-center items-center cursor-pointer transition-all duration-300 text-sm tracking-wide`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => setActiveTab("experience")}
            className={`${
              activeTab === "experience"
                ? "bg-white text-indigo-600 shadow-md border border-slate-200/80 font-bold"
                : "text-slate-600 hover:text-indigo-600 hover:bg-white/50 font-medium"
            } h-12 rounded-xl flex justify-center items-center cursor-pointer transition-all duration-300 text-sm tracking-wide`}
          >
            Experience
          </li>
          <li
            onClick={() => setActiveTab("education")}
            className={`${
              activeTab === "education"
                ? "bg-white text-indigo-600 shadow-md border border-slate-200/80 font-bold"
                : "text-slate-600 hover:text-indigo-600 hover:bg-white/50 font-medium"
            } h-12 rounded-xl flex justify-center items-center cursor-pointer transition-all duration-300 text-sm tracking-wide`}
          >
            Education & Certs
          </li>
          <li
            onClick={() => setActiveTab("achievements")}
            className={`${
              activeTab === "achievements"
                ? "bg-white text-indigo-600 shadow-md border border-slate-200/80 font-bold"
                : "text-slate-600 hover:text-indigo-600 hover:bg-white/50 font-medium"
            } h-12 rounded-xl flex justify-center items-center cursor-pointer transition-all duration-300 text-sm tracking-wide`}
          >
            Achievements
          </li>
        </ul>
      </div>

      {activeTab === "skills" && <Skills />}
      {activeTab === "experience" && <Experience />}
      {activeTab === "education" && <Education />}
      {activeTab === "achievements" && <Achievement />}
    </section>
  );
}

export default Resume;
