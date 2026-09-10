import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-2 py-4">
          <p className="text-sm text-designColor tracking-[4px] font-medium uppercase">2019 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Engineering Experience</h2>
        </div>
        <div className="mt-8 w-full border-l-2 border-slate-200 pl-2 flex flex-col gap-8">
          <ResumeCard
            title="Senior Full-Stack Developer"
            subTitle="Sydani Group / SYDAAR (2024 - Present)"
            result="Abuja / Remote"
            des="Architected and developed enterprise web solutions including the SYDAAR (Athena) Learning Platform using React 19, TypeScript, TanStack Query, Firebase Auth, and PWA integration."
          />
          <ResumeCard
            title="Full-Stack Developer (Freelance)"
            subTitle="Independent Client Projects (2022 - Present)"
            result="Remote"
            des="Delivered custom full-stack web applications for clients across healthcare (Dial-A-Doc), e-commerce, and HR management using React, Node.js, Laravel, and MySQL."
          />
          <ResumeCard
            title="Software Developer & Thrust Leader"
            subTitle="STEAMLEDGE LIMITED (2019 - 2023)"
            result="Minna, Nigeria"
            des="Led development on internal software products (Steamlance, Staff Evaluation), designed programming curricula, and mentored developer interns across full-stack web technologies."
          />
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-2 py-4">
          <p className="text-sm text-designColor tracking-[4px] font-medium uppercase">2018 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Teaching & Leadership</h2>
        </div>
        <div className="mt-8 w-full border-l-2 border-slate-200 pl-2 flex flex-col gap-8">
          <ResumeCard
            title="Web Development Instructor"
            subTitle="New Horizons Computer Learning Centers (2019 - 2022)"
            result="Minna, Nigeria"
            des="Taught professional software development courses in HTML5, CSS3, JavaScript, PHP, MySQL, and WordPress to students and corporate trainees."
          />
          <ResumeCard
            title="ICT & Robotics Tutor"
            subTitle="Al-Ali International School (2019 - 2022)"
            result="Minna, Nigeria"
            des="Instructed secondary students in computer science fundamentals, practical programming logic, and basic hardware/robotics concepts."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

