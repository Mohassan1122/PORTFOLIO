import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-6 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[4px] font-medium uppercase">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold">Key Milestones</h2>
        </div>
        <div className="mt-6 w-full border-l-2 border-slate-200 pl-2 flex flex-col gap-8">
          <ResumeCard
            title="SYDAAR / Athena Enterprise Platform Launch"
            subTitle="Sydani Group (2024)"
            result="Success"
            des="Successfully delivered the enterprise-grade staff evaluation and learning portal equipped with real-time analytics, automated PDF certification generation, and PWA capabilities."
          />
          <ResumeCard
            title="Telemedicine Platform Delivery (Dial-A-Doc)"
            subTitle="Healthcare Application (2023)"
            result="Deployed"
            des="Architected and deployed a multi-tier web application connecting patients directly to registered medical professionals and facility dashboards."
          />
          <ResumeCard
            title="500+ Engineering Trainees Mentored"
            subTitle="Steamledge & New Horizons (2019 - 2023)"
            result="Impact"
            des="Designed curriculum and conducted intensive hands-on bootcamps in full-stack web development, mentoring over 500 aspiring software developers."
          />
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-6 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[4px] font-medium uppercase">Honors & Service</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates & Service</h2>
        </div>
        <div className="mt-6 w-full border-l-2 border-slate-200 pl-2 flex flex-col gap-8">
          <ResumeCard
            title="Certified Microsoft Innovative Educator"
            subTitle="Microsoft Education"
            result="MIE Certified"
            des="Recognized for excellence in integrating educational technology and innovative teaching methodologies."
          />
          <ResumeCard
            title="N.Y.S.C Discharge Certificate"
            subTitle="National Youth Service Corps"
            result="Completed"
            des="Completed mandatory national youth service program demonstrating civic leadership and community service."
          />
          <ResumeCard
            title="Entrepreneurship & Employability Honors"
            subTitle="National Employability Program"
            result="Honored"
            des="Awarded certification for leadership, project governance, and entrepreneurial innovation."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;

