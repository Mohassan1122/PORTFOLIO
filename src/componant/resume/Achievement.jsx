import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1, transition: { duration: 0.5 } }}
    //   className="py-12 font-titleFont flex gap-20"
    // >
    //   <div>
    //     <div className="py-12 font-titleFont flex flex-col gap-4">
    //       <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
    //       <h2 className="text-4xl font-bold">Company Experience</h2>
    //     </div>
    //     <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
    //       <ResumeCard
    //         title="Lorem ipsum dolor sit amet."
    //         subTitle="Lorem ipsum dolor sit amet alternative."
    //         result="Success"
    //         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
    //       />
    //       <ResumeCard
    //         title="Lorem ipsum dolor sit amet."
    //         subTitle="Lorem ipsum dolor sit amet alternative."
    //         result="Success"
    //         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
    //       />
    //       <ResumeCard
    //         title="Lorem ipsum dolor sit amet."
    //         subTitle="Lorem ipsum dolor sit amet alternative."
    //         result="Success"
    //         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
    //       />
    //     </div>
    //   </div>
    //   <div>
    //     <div className="py-12 font-titleFont flex flex-col gap-4">
    //       <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
    //       <h2 className="text-4xl font-bold">Job Experience</h2>
    //     </div>
    //     <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
    //       <ResumeCard
    //         title="Lorem ipsum dolor sit amet."
    //         subTitle="Lorem ipsum dolor sit amet alternative."
    //         result="Success"
    //         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
    //       />
    //       <ResumeCard
    //         title="Lorem ipsum dolor sit amet."
    //         subTitle="Lorem ipsum dolor sit amet alternative."
    //         result="Success"
    //         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
    //       />
    //       <ResumeCard
    //         title="Lorem ipsum dolor sit amet."
    //         subTitle="Lorem ipsum dolor sit amet alternative."
    //         result="Success"
    //         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
    //       />
    //     </div>
    //   </div>
    // </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Achievements</p>
          <h2 className="text-4xl font-bold">Certificates & Training</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech Degree in Quantity Surveying"
            subTitle="Federal University of Technology Minna"
            result="Completed"
            des="Gained foundational knowledge in quantity surveying, project management, and construction economics."
          />
          <ResumeCard
            title="Npower Hardware Certificate"
            subTitle="Npower"
            result="Completed"
            des="Certification in hardware repair and troubleshooting, enhancing technical skills in computer hardware."
          />
          <ResumeCard
            title="Entrepreneurship and Employability Training Certificate"
            subTitle="XYZ Institute"
            result="Completed"
            des="Trained in entrepreneurial skills and employability, preparing for diverse business environments."
          />
          <ResumeCard
            title="MySQL Basic Certificate"
            subTitle="Great Learning Academy"
            result="Completed"
            des="Mastered the basics of MySQL, focusing on database management and queries."
          />
          <ResumeCard
            title="Certified Microsoft Innovative Educator"
            subTitle="Microsoft"
            result="Certified"
            des="Certification in innovative teaching methods using Microsoft tools."
          />
          <ResumeCard
            title="PHP/MySQL Beginner Certificate"
            subTitle="Bincom Academy"
            result="Completed"
            des="Learned basic PHP and MySQL for backend web development."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Certifications</p>
          <h2 className="text-4xl font-bold">Educational Background</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SSCE Certificate"
            subTitle="Federal Polytechnis Staff Secondary School Bida"
            result="Completed"
            des="Completed secondary education with excellent results in science subjects."
          />
          <ResumeCard
            title="First School Leaving Certificate"
            subTitle="Avenue International School"
            result="Completed"
            des="Completed primary education with strong foundational skills."
          />
          <ResumeCard
            title="N.Y.S.C Discharge Certificate"
            subTitle="National Youth Service Corps"
            result="Completed"
            des="Completed national service, demonstrating commitment to national development."
          />
        </div>
      </div>
    </motion.div>


  );
};

export default Achievement;
