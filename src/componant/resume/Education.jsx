import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Quantity Surveying"
            subTitle="Federal University of Technology Minna Niger State Nigeria (2010 - 2015)"
            result="Degree"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Federal Polytechnic Staff Seconary School Bida Niger State Nigeria (2003 - 2009)"
            result="SSCE"
            des="  Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="Primary School Education"
            subTitle="Avenue International  School (1997 - 2003)"
            result="First Leaving Cert"
            des="Primary School Education"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Freelance - (2023 - Present)"
            result="USA"
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
    </motion.div>
  );
}

export default Education