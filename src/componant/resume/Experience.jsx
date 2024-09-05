import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Freelance - (2023 - Present)"
            result="Remote"
            des="free for fullstack project with Laravel and React"
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="STEAMLEDGE LIMITED - (2019 - 2023)"
            result="Nigeria"
            des="We provide the space and opportunity to build and mentor high quality engineering talents to create innovative products and power your projects."
          />
          <ResumeCard
            title="Fullstack Developer"
            subTitle="STEAMLEDGE LIMITED - (2019 - 2023)"
            result="Nigeria"
            des="Steamledge is a bespoke software development company, offering customized, robust solutions to organizations of all sizes."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
       
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="New Horizon Acedemy (2019 - 2022)"
            result="Minna Niger state,Nigeria"
            des="Higher education is tertiary education leading to award of an academic Certificate.  secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Al-Ali International School (2019 - 2022)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
