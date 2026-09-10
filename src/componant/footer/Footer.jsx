import React from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { PicTwo } from "../../assets/index"
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img src={PicTwo} alt="Mohammed Hassan" className='w-14 h-14 rounded-full border-2 border-indigo-500 object-cover shadow-md' />
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-titleFont">MOHAMMED HASSAN</h3>
              <p className="text-xs text-indigo-400 font-semibold">Full Stack & Frontend Developer</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Crafting modern, high-performance web applications with React, TypeScript, and Laravel. Focused on clean code, solid architecture, and exceptional UX.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Mohassan1122"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white rounded-lg flex justify-center items-center text-lg border border-slate-700 transition-all duration-300"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-hassan-49a8281b7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white rounded-lg flex justify-center items-center text-lg border border-slate-700 transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Navigation Column */}
        <div className="w-full">
          <h3 className="text-sm uppercase text-indigo-400 tracking-widest font-titleFont font-semibold mb-6">
            Quick Navigation
          </h3>
          <ul className="flex flex-col gap-3 font-titleFont font-medium text-sm text-slate-400">
            {[
              { name: "Home", link: "home" },
              { name: "Features & Services", link: "features" },
              { name: "Projects Showcase", link: "projects" },
              { name: "Resume & Skills", link: "resume" },
              { name: "Testimonials", link: "testimonial" },
              { name: "Contact Me", link: "contact" },
            ].map((item, idx) => (
              <li key={idx}>
                <ScrollLink
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-indigo-400 transition-colors duration-300 cursor-pointer inline-block"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Expertise Column */}
        <div className="w-full">
          <h3 className="text-sm uppercase text-indigo-400 tracking-widest font-titleFont font-semibold mb-6">
            Services
          </h3>
          <ul className="flex flex-col gap-3 font-titleFont font-medium text-sm text-slate-400">
            <li>Full-Stack Web Apps</li>
            <li>Frontend Architecture (React/Next)</li>
            <li>REST API & Microservices (Laravel/Node)</li>
            <li>Mobile-First & PWA Development</li>
            <li>Database Architecture & Optimization</li>
            <li>Agile Team Leadership</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="w-full">
          <h3 className="text-sm uppercase text-indigo-400 tracking-widest font-titleFont font-semibold mb-6">
            Direct Contact
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium text-sm text-slate-400">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-400 text-base shrink-0" />
              <a href="mailto:mohammedhassanage26@gmail.com" className="hover:text-indigo-400 transition-colors duration-300 break-all">
                mohammedhassanage26@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-indigo-400 text-base shrink-0" />
              <a href="tel:+2347036297921" className="hover:text-indigo-400 transition-colors duration-300">
                +234 703 629 7921
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-400 text-base shrink-0" />
              <span>Minna, Niger State, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
