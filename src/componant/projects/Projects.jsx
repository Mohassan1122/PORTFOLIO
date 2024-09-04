import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    // <section
    //   id="projects"
    //   className="w-full py-20 border-b-[1px] border-b-black"
    // >
    //   <div className="flex justify-center items-center text-center">
    //     <Title
    //       title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
    //       des="My Projects"
    //     />
    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
    //     <ProjectsCard
    //       title="SOCIAL MEDIA CLONE"
    //       des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //           Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
    //       src={projectOne}
    //     />
    //     <ProjectsCard
    //       title="E-commerce Website"
    //       des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //           Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
    //       src={projectTwo}
    //     />
    //     <ProjectsCard
    //       title="Chatting App"
    //       des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //           Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
    //       src={projectThree}
    //     />
    //     <ProjectsCard
    //       title="SOCIAL MEDIA CLONE"
    //       des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //           Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
    //       src={projectThree}
    //     />
    //     <ProjectsCard
    //       title="E-commerce Website"
    //       des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //           Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
    //       src={projectOne}
    //     />
    //     <ProjectsCard
    //       title="Chatting App"
    //       des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //           Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
    //       src={projectTwo}
    //     />
    //   </div>
    // </section>


<section
  id="projects"
  className="w-full py-20 border-b-[1px] border-b-black"
>
  <div className="flex justify-center items-center text-center">
    <Title
      title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
      des="My Projects"
    />
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
    <ProjectsCard
      title="Dail-A-Doc Fullstack App"
      url1="https://dial-a-doc-five.vercel.app"
      url2="https://dial-a-doc-five.vercel.app"
      des="Developed a healthcare platform using React and Laravel, allowing patients to connect with their preferred doctors, with role-based access for Admins, Doctors, Patients, and Facilities."
      src={projectOne}
    />
    <ProjectsCard
      title="Syndani Onboarding Platform"
       url1="https://syndani-onboarding.vercel.app/"
      url2="https://syndani-onboarding.vercel.app/"
      des="Built an onboarding platform for Syndani Group using Bootstrap, enhancing the user experience with intuitive design and efficient data handling."
      src={projectTwo}
    />
    <ProjectsCard
      title="Vidly Multi-Vendor App"
       url1="https://github.com/Mohassan1122/vidly-App"
      url2="https://github.com/Mohassan1122/vidly-App"
      des="Created a multi-vendor e-commerce platform with Laravel and Bootstrap, featuring comprehensive admin controls and role-based access management."
      src={projectThree}
    />
    <ProjectsCard
      title="Dail-A-Doc API"
       url1="https://github.com/Mohassan1122/Dail-A-doc-api_laravel"
      url2="https://github.com/Mohassan1122/Dail-A-doc-api_laravel"
      des="Developed a Laravel API with secure user authentication, profile management, and multi-role access for Admins, Doctors, Patients, and Facilities."
      src={projectOne}
    />
    <ProjectsCard
      title="E-Commerce App"
       url1="https://github.com/Mohassan1122/E-CommerceApp"
      url2="https://github.com/Mohassan1122/E-CommerceApp"
      des="Built a dynamic e-commerce platform using React and Redux Toolkit, featuring state management, product handling, and cart functionalities."
      src={projectTwo}
    />
    <ProjectsCard
      title="Artisan Freelance Site"
       url1="https://github.com/Mohassan1122/artisan-website"
      url2="https://github.com/Mohassan1122/artisan-website"
      des="Created a platform in PHP and SQL for artisans to showcase their work, connect with clients, and manage their portfolios."
      src={projectThree}
    />
    <ProjectsCard
      title="Ringo HR Management System"
       url1="https://github.com/Mohassan1122/Ringo-HR-Sotfware"
      url2="https://github.com/Mohassan1122/Ringo-HR-Sotfware"
      des="Developed an HR management system using PHP and MySQL to streamline employee management and data handling for HR professionals."
      src={projectOne}
    />
    <ProjectsCard
      title="Blog Site with Laravel"
       url1="https://dial-a-doc-five.vercel.app"
      url2="https://dial-a-doc-five.vercel.app"
      des="Built a Laravel-based blog platform, demonstrating CRUD operations and showcasing Laravel development best practices and design patterns."
      src={projectTwo}
    />
    <ProjectsCard
      title="E-Shopping Site"
       url1="https://dial-a-doc-five.vercel.app"
      url2="https://dial-a-doc-five.vercel.app"
      des="Developed an online shopping site with Laravel where users can browse, order products, and manage their accounts with a user-friendly interface."
      src={projectThree}
    />
    <ProjectsCard
      title="Movies App"
       url1="https://dial-a-doc-five.vercel.app"
      url2="https://dial-a-doc-five.vercel.app"
      des="Built a React.js app displaying a list of movies with features to edit, update, and delete movies from the list, enhancing CRUD skills in React."
      src={projectOne}
    />
    <ProjectsCard
      title="Landing Page Design"
       url1="https://dial-a-doc-five.vercel.app"
      url2="https://dial-a-doc-five.vercel.app"
      des="Designed and developed a responsive landing page using React, showcasing modern design principles and engaging UI elements."
      src={projectTwo}
    />
    <ProjectsCard
      title="Responsive Portfolio Website"
       url1="https://dial-a-doc-five.vercel.app"
      url2="https://dial-a-doc-five.vercel.app"
      des="Created a professional and fully responsive portfolio website using React and Tailwind CSS. Highlighted your skills, projects, and achievements with modern design principles and animations."
      src={projectThree}
    />
  </div>
</section>


  );
}

export default Projects