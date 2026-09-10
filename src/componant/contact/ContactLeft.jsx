import React from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-white p-6 lgl:p-8 rounded-2xl shadow-sm flex flex-col gap-6 justify-center border border-slate-200/80">
      <img
        className="w-full h-60 object-cover rounded-xl mb-2"
        src={contactImg}
        alt="Mohammed Hassan"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-bold text-slate-900">Mohammed Hassan</h3>
        <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
          Full Stack & Frontend Developer
        </p>
        <p className="text-sm text-slate-600 leading-relaxed tracking-wide">
          I am a passionate software engineer with extensive experience building modern web applications, scalable APIs, and intuitive user interfaces. I specialize in React, TypeScript, Node.js, and Laravel, with a relentless focus on performance, accessibility, and high quality code.
        </p>
        <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
          <p className="text-sm text-slate-600 flex items-center gap-3">
            <FaPhone className="text-indigo-600" />
            <a href="tel:+2347036297921" className="text-slate-700 hover:text-indigo-600 transition-colors duration-300 font-medium">
              +234 703 629 7921
            </a>
          </p>
          <p className="text-sm text-slate-600 flex items-center gap-3">
            <FaEnvelope className="text-indigo-600" />
            <a href="mailto:mohammedhassanage26@gmail.com" className="text-slate-700 hover:text-indigo-600 transition-colors duration-300 font-medium break-all">
              mohammedhassanage26@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-2">
        <h2 className="text-xs uppercase font-titleFont tracking-widest text-slate-400 font-medium">FIND ME ON</h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/Mohassan1122"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-hassan-49a8281b7"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
