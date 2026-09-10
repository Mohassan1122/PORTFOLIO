import React from 'react'
import { motion } from 'framer-motion';

const devSkills = [
  { name: "React 19 & Next.js", level: "95%" },
  { name: "TypeScript & JavaScript (ES6+)", level: "92%" },
  { name: "TanStack Query (React Query)", level: "90%" },
  { name: "Laravel & PHP", level: "92%" },
  { name: "Tailwind CSS & CSS3 / HTML5", level: "95%" },
  { name: "RESTful APIs & OpenAPI / Swagger", level: "94%" },
];

const toolsAndCloud = [
  { name: "Firebase (Auth, Firestore, Hosting)", level: "88%" },
  { name: "Docker & Containerization", level: "85%" },
  { name: "Git, GitHub & Code Review", level: "92%" },
  { name: "Vite, PWA & Build Optimization", level: "90%" },
  { name: "MySQL & Relational DB Architecture", level: "88%" },
  { name: "Agile / Scrum & Team Leadership", level: "90%" },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 py-8"
    >
      {/* Development Skills */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-indigo-600 tracking-[4px] uppercase font-semibold">Core Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frontend & Backend</h2>
        </div>
        <div className="w-full flex flex-col gap-6">
          {devSkills.map((skill, index) => (
            <div key={index} className="overflow-x-hidden">
              <div className="flex justify-between items-center">
                <p className="text-sm font-semibold text-slate-700">{skill.name}</p>
                <span className="text-xs text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">{skill.level}</span>
              </div>
              <span className="w-full h-2.5 bg-slate-200 rounded-full inline-flex mt-2 p-0.5 border border-slate-300/60">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  style={{ width: skill.level }}
                  className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-500 rounded-full relative"
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Cloud */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-indigo-600 tracking-[4px] uppercase font-semibold">Ecosystem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Tools, Cloud & DevOps</h2>
        </div>
        <div className="w-full flex flex-col gap-6">
          {toolsAndCloud.map((skill, index) => (
            <div key={index} className="overflow-x-hidden">
              <div className="flex justify-between items-center">
                <p className="text-sm font-semibold text-slate-700">{skill.name}</p>
                <span className="text-xs text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">{skill.level}</span>
              </div>
              <span className="w-full h-2.5 bg-slate-200 rounded-full inline-flex mt-2 p-0.5 border border-slate-300/60">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  style={{ width: skill.level }}
                  className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-500 rounded-full relative"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
