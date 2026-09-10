import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const projectsList = [
  {
    title: "SYDAAR — Athena Learning Portal",
    des: "Enterprise-grade staff learning & evaluation portal featuring interactive course tracks, real-time analytics, automated certificate generation, and Progressive Web App (PWA) capabilities.",
    src: projectOne,
    liveUrl: "https://sydaar-web.vercel.app/",
    githubUrl: "https://github.com/Mohassan1122/SYDAAR_WEB_II",
    tech: ["React 19", "TypeScript", "TanStack Query", "Firebase Auth", "Tailwind CSS", "PWA"]
  },
  {
    title: "Dial-A-Doc Healthcare Platform",
    des: "Full-stack telemedicine application connecting patients directly with specialist doctors and healthcare facilities. Features appointment scheduling, medical records, and multi-tier role access.",
    src: projectTwo,
    liveUrl: "https://dial-a-doc-five.vercel.app",
    githubUrl: "https://github.com/Mohassan1122/Dail-A-doc-api_laravel",
    tech: ["React", "Laravel", "REST API", "MySQL", "Tailwind CSS"]
  },
  {
    title: "Sydani Group Onboarding Platform",
    des: "Internal onboarding and staff evaluation portal built for Sydani Group to streamline employee orientation, track training milestones, and measure staff engagement.",
    src: projectThree,
    liveUrl: "https://syndani-onboarding.vercel.app/",
    githubUrl: "https://github.com/Mohassan1122",
    tech: ["JavaScript", "Bootstrap 5", "HTML5/CSS3", "Vercel"]
  },
  {
    title: "Vidly Multi-Vendor Marketplace",
    des: "Comprehensive e-commerce & multi-vendor shopping platform with administrative dashboard, granular role-based access control (RBAC), inventory tracking, and payment gateway integration.",
    src: projectThree,
    liveUrl: "https://github.com/Mohassan1122/vidly-App",
    githubUrl: "https://github.com/Mohassan1122/vidly-App",
    tech: ["Laravel", "PHP", "Bootstrap", "MySQL", "Blade"]
  },
  {
    title: "Ringo HR Management System",
    des: "Human Resource management web application designed for HR professionals to handle worker profiles, leave requests, performance evaluations, and automated payroll calculations.",
    src: projectOne,
    liveUrl: "https://github.com/Mohassan1122/Ringo-HR-Sotfware",
    githubUrl: "https://github.com/Mohassan1122/Ringo-HR-Sotfware",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"]
  },
  {
    title: "E-Commerce Web Application",
    des: "Modern single-page shopping application built with React and Redux Toolkit. Implements dynamic product filtering, cart management, checkout flow, and state persistence.",
    src: projectTwo,
    liveUrl: "https://github.com/Mohassan1122/E-CommerceApp",
    githubUrl: "https://github.com/Mohassan1122/E-CommerceApp",
    tech: ["React", "Redux Toolkit", "JavaScript", "CSS3"]
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-16 md:py-24 border-b border-slate-200/80"
    >
      <Title
        title="FEATURED WORK & RECENT PROJECTS"
        des="My Projects"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        {projectsList.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
