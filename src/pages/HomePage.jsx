import React from 'react';
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
    <div className="w-full h-auto bg-bodyColor text-slate-800">
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
      </div>
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default HomePage;




