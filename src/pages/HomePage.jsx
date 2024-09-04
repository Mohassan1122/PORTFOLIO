import React from 'react';
// import { Link } from 'react-router-dom';
// import NavBar from '../componant/NavBar';
import Banner from "../componant/banner/Banner";
import Contact from "../componant/contact/Contact";
import Features from "../componant/features/Features";
import Footer from "../componant/footer/Footer";
import FooterBottom from "../componant/footer/FooterBottom";
import Navbar from "../componant/navbar/Navbar";
import Projects from "../componant/projects/Projects";
import Resume from "../componant/resume/Resume";
import Testimonial from "../componant/tesimonial/Testimonial";

const HomePage = () => {
  return (
    // <>
    // <NavBar />
    // <div className="bg-gray-100 min-h-screen py-6">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     {/* Profile Section */}
    //     <section className="py-6">
    //       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
    //         <h2 className="text-3xl font-bold mb-4">MOHAMMED HASSAN</h2>
    //         <p className="text-gray-600 mb-2">WEB DEVELOPER (Full-stack)</p>
    //         <p className="text-gray-600 mb-2">mohammedhassanage26@gmail.com | +2347036297921</p>
    //         <p className="text-gray-600 mb-4">Minna, Nigeria</p>
    //         <div className="flex space-x-4">
    //           <a href="https://www.linkedin.com/in/mohammed-hassan-49a8281b7" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
    //           <a href="https://twitter.com/Damawu1122" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
    //           <a href="https://github.com/Mohassan1122" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
    //         </div>
    //       </div>
    //     </section>

    //     {/* About Section */}
    //     <section className="py-6">
    //       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
    //         <h3 className="text-2xl font-bold mb-4">Profile</h3>
    //         <p className="text-gray-700 mb-4">
    //           A dedicated, highly motivated, well-behaved, hardworking, self-confident, obedient, and religious individual with a strong commitment to excellence in all aspects of life.
    //         </p>
    //       </div>
    //     </section>

    //     {/* Education Section */}
    //     <section className="py-6">
    //       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
    //         <h3 className="text-2xl font-bold mb-4">Education</h3>
    //         <p className="text-gray-700 mb-4">
    //           Bachelor of Technology/Quantity Survey, Federal University of Technology Minna, Niger State, Nigeria
    //           <br />
    //           Minna, Nigeria
    //           <br />
    //           We work toward Construction Cost Optimization
    //         </p>
    //       </div>
    //     </section>

    //     {/* Professional Experience Section */}
    //     <section className="py-6">
    //       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
    //         <h3 className="text-2xl font-bold mb-4">Professional Experience</h3>
    //         <div className="space-y-4">
    //           <div>
    //             <h4 className="text-xl font-semibold mb-2">Thrust Leader, STEAMLEDGE LIMITED</h4>
    //             <p className="text-gray-700 mb-2">11/2020 – 11/2023 | Minna, Nigeria</p>
    //             <ul className="list-disc list-inside text-gray-600">
    //               <li>Assisted and supported other Steamledge IT related projects and developments (Steamlance, Staff Evaluation Form)</li>
    //               <li>Transferred relevant IT skills to Team members, other Thrust Leaders, and Thrust Assistants, Interns</li>
    //               <li>Supported and implemented Steamledge curriculum for all participant age groups</li>
    //               <li>Evaluated and reported submission for each Steamledge Teach Acceleration activity in partner schools</li>
    //               <li>Designed teaching curriculum for all Teach Acceleration Programs</li>
    //               <li>Continuous Integration and Implementation of cutting-edge technology into pre-existing curriculum</li>
    //               <li>Supported and Promoted Steamledge Brand on all platforms including Social Media Platforms</li>
    //             </ul>
    //           </div>
    //           {/* Add more professional experience sections similarly */}
    //         </div>
    //       </div>
    //     </section>

    //     {/* Skills Section */}
    //     <section className="py-6">
    //       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
    //         <h3 className="text-2xl font-bold mb-4">Skills</h3>
    //         <div className="space-y-2">
    //           <p className="text-gray-700">FrontEnd Web Development (HTML, CSS, JavaScript, WordPress, Bootstrap, React.js/Redux, Tailwind.css, Material.css)</p>
    //           <p className="text-gray-700">Backend Web Development (PHP, MySQL, APIs, Laravel)</p>
    //           <p className="text-gray-700">Project Management (Agile, Scrum, Waterfall, Trello)</p>
    //           <p className="text-gray-700">Product Management (Database Architecture, MySQL)</p>
    //           <p className="text-gray-700">Microsoft Office (Microsoft Word, PowerPoint, Excel)</p>
    //           <p className="text-gray-700">Computer Hardware (Hardware Repair)</p>
    //           <p className="text-gray-700">Training/Teaching (Tutoring Programming Skills)</p>
    //           <p className="text-gray-700">Robotics (Arduino, Sensors, LED)</p>
    //         </div>
    //       </div>
    //     </section>

    //     {/* Certificates Section */}
    //     <section className="py-6">
    //       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
    //         <h3 className="text-2xl font-bold mb-4">Certificates</h3>
    //         <div className="space-y-2">
    //           <p className="text-gray-700">B.Tech Degree In Quantity Surveying</p>
    //           <p className="text-gray-700">Npower Hardware Certificate</p>
    //           <p className="text-gray-700">Entrepreneurship and Employability Training Certificate</p>
    //           <p className="text-gray-700">MYSQL Basic Certificate from Great Learning Academy</p>
    //           <p className="text-gray-700">N.Y.S.C Discharge certificate</p>
    //           <p className="text-gray-700">Certified Microsoft Innovative Educator</p>
    //           <p className="text-gray-700">PHP/MYSQL BEGINNER Certificate from Bincom Academy</p>
    //           {/* Add more certificates similarly */}
    //         </div>
    //       </div>
    //     </section>

    //     {/* Interests Section */}
    //     <section className="py-6">
    //       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
    //         <h3 className="text-2xl font-bold mb-4">Interests</h3>
    //         <p className="text-gray-700">
    //           Coding, Learning New Things, Social Media, Reading
    //         </p>
    //       </div>
    //     </section>

    //     {/* Projects Section */}
    //     <section className="py-6">
    //       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
    //         <h3 className="text-2xl font-bold mb-4">Projects</h3>
    //         <div className="space-y-4">

    //           <div>
    //             <h4 className="text-xl font-semibold mb-2">Dail-A-Doc Fullstack App, with React/Laravel</h4>

    //             <p className="text-gray-700">this api comprises of four Users, the Admin, Doctor, Pateint and Facility, it bring patient close to there priferred doctors.</p>
    //             <p className="hover:underline">URL: <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://dail-a-doc-five.vercel.app">Dail-A-Doc Fullstack App</Link></p>
    //           </div>

    //           <div>
    //             <h4 className="text-xl font-semibold mb-2">Syndani Onboarding, with Bootstrap</h4>

    //             <p className="text-gray-700">This project was built for Syndani Group</p>
    //             <p className="hover:underline">URL: <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://syndani-onboarding.vercel.app/">Syndani Onboarding</Link></p>
    //           </div>

    //           <div>
    //             <h4 className="text-xl font-semibold mb-2">Vidly App, with Laravel/Bootstrap</h4>

    //             <p className="text-gray-700">It is Multi vendor Laravel online Shopping app, the buyer can see what to buy, and also sell items while the seller can do same. The application has a robust administrative interface with comprehensive role-based access control, allowing superadmins to manage various aspects of the system, while admins have more limited access.</p>
    //             <p className="hover:underline">URL: <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://github.com/Mohassan1122/vidly-App">Vidly App</Link></p>
    //           </div>

    //           <div>
    //             <h4 className="text-xl font-semibold mb-2">Dail-A-doc-api_laravel, with Laravel/API</h4>

    //             <p className="text-gray-700">this api comprises of four users, the Admin, Doctor, Pateint and Facility, it Register new users, Authenticate them , view Dashboard and Update Profile of each user.</p>
    //             <p className="hover:underline">URL: <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://github.com/Mohassan1122/Dail-A-doc-api_laravel">DailADoc_Api/Laravel</Link></p>
    //           </div>

    //           <div>
    //             <h4 className="text-xl font-semibold mb-2">E-Commerce App, with React/Redux</h4>

    //             <p className="text-gray-700">it is a react redux app with Redux toolkit</p>
    //             <p className="hover:underline">URL: <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://github.com/Mohassan1122/E-CommerceApp">E-Commerce App</Link></p>
    //           </div>

    //           <div>
    //             <h4 className="text-xl font-semibold mb-2">Artisan Freelance Site, with PHP/SQL</h4>

    //             <p className="text-gray-700">Artisan freelance site is a site built for artisans of all kinds, where artisans can showcase their work and users can view work and contact information.</p>
    //             <p className="hover:underline">URL: <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://github.com/Mohassan1122/artisan-website">Artisan-website</Link></p>


    //           </div>
    //           <div>
    //             <h4 className="text-xl font-semibold mb-2">Ringo HR (Human Resources) Management site, with PHP/MYSQL</h4>

    //             <p className="text-gray-700">Ringo HR is a site built for Human Resources Managers to help manage their workers.</p>
    //              <p className="hover:underline">URL: <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://github.com/Mohassan1122/artisan-website"> Ringo-HR-Software</Link></p>
    //           </div>

    //           <div>
    //             <h4 className="text-xl font-semibold mb-2">Blog Site, With Laravel</h4>

    //             <p className="text-gray-700">This website tells all there is to no about Laravel i.e crud operation used in different form.</p>
    //              <p className="hover:underline">URL: <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://github.com/Mohassan1122/artisan-website"> Blog Site</Link></p>
    //           </div>

    //           <div>
    //             <h4 className="text-xl font-semibold mb-2">E-shopping Site, With Laravel</h4>

    //             <p className="text-gray-700">This website is an online shopping website where users can view list of items available to buy and also place an order for the preferred one needed</p>
    //              <p className="hover:underline">URL: <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://github.com/Mohassan1122/artisan-website"> E-shopping Site</Link></p>
    //           </div>

    //           <div>
    //             <h4 className="text-xl font-semibold mb-2">Movies App, With React.js</h4>

    //             <p className="text-gray-700">This Movies App display the list of movies and at the top of the list the number of movies contained in our app is been displayed and also we can edit, update and delete movies from the list.</p>
    //              <p className="hover:underline">URL: <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://github.com/Mohassan1122/artisan-website">Movies App</Link></p>
    //           </div>

    //           <div>
    //             <h4 className="text-xl font-semibold mb-2"> LANDING PAGE, with React</h4>

    //             <p className="text-gray-700">this site shows the Landing Page design of a web site</p>
    //              <p className="hover:underline">URL: <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://github.com/Mohassan1122/artisan-website"> LANDING PAGE</Link></p>
    //           </div>
    //           {/* Add more projects sections similarly */}
    //         </div>
    //       </div>
    //     </section>

    //     {/* References Section */}
    //     <section className="py-6">
    //       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
    //         <h3 className="text-2xl font-bold mb-4">References</h3>
    //         <div className="space-y-2">
    //           <p className="text-gray-700">Dr. Abbas Ahmed, Quantity Surveyor, Federal Polytechnic Bida, Niger State. +2348054568967</p>
    //           <p className="text-gray-700">Olugbenga Latinwo, Chief Operating Officer, Steamledge Limited<br />Email: latinwoolugbenga@gmail.com<br />Phone: +2348136117044</p>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
    // </>



    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Features />
          <Projects />
          <Resume />
          <Testimonial />
          <Contact />
          <Footer />
          <FooterBottom />
        </div>
      </div>
    </>



  );
};

export default HomePage;


