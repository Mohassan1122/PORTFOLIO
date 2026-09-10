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
      {/* Academic Background */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-8 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[4px] font-medium uppercase">Academic Qualification</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 w-full border-l-2 border-slate-200 pl-2 flex flex-col gap-8">
          <ResumeCard
            title="B.Tech in Quantity Surveying"
            subTitle="Federal University of Technology, Minna (2010 - 2015)"
            result="B.Tech Degree"
            des="Focused on construction cost estimation, project management, technical optimization, analytical problem-solving, and contract evaluation."
          />
          <ResumeCard
            title="Senior Secondary School Certificate (SSCE)"
            subTitle="Federal Polytechnic Staff Secondary School, Bida (2003 - 2009)"
            result="SSCE Certificate"
            des="Completed secondary education with distinction in Sciences and Mathematics."
          />
          <ResumeCard
            title="First School Leaving Certificate"
            subTitle="Avenue International School (1997 - 2003)"
            result="Primary Certificate"
            des="Primary education foundational background."
          />
        </div>
      </div>

      {/* Professional Certifications */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-8 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[4px] font-medium uppercase">Professional Development</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications & Training</h2>
        </div>
        <div className="mt-6 w-full border-l-2 border-slate-200 pl-2 flex flex-col gap-8">
          <ResumeCard
            title="Microsoft Certified Innovative Educator"
            subTitle="Microsoft Education (2021)"
            result="Certified MIE"
            des="Certified in leveraging modern technology tools and interactive cloud platforms for technical education and instruction."
          />
          <ResumeCard
            title="PHP & MySQL Backend Engineering Certificate"
            subTitle="Bincom Academy (2020)"
            result="Backend Certified"
            des="Practical training covering PHP OOP principles, relational database design, query optimization, and REST API integration."
          />
          <ResumeCard
            title="MySQL Database Administration Certificate"
            subTitle="Great Learning Academy (2021)"
            result="Database Certified"
            des="Mastery of SQL queries, indexing strategies, data normalization, database security, and transaction management."
          />
          <ResumeCard
            title="N-Power Tech Hardware & Systems Specialist"
            subTitle="Federal Government N-Power Program (2018)"
            result="Tech Specialist"
            des="Specialized technical training in hardware diagnostics, computer systems maintenance, networking fundamentals, and troubleshooting."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;