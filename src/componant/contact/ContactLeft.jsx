import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { Link } from 'react-router-dom';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mohammed Hassan</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I have been working as a Professional Website Designer and
          Programmer for the past couple of years, continuously honing my
          skills. I'm passionate about crafting code that not only leaves a
          lasting impression but also enhances the overall layout. I enjoy
          the creative process of coding, as it plays a crucial role in
          delivering exceptional results. My journey is fueled by a love for
          learning and adapting to the evolving landscape, ensuring that
          my implementations are always up to Education
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+234 7036297921</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mohammedhassanage26@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://www.facebook.com/swagsman26"><FaFacebookF /></Link>
          </span>
          <span className="bannerIcon">
          <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://dail-a-doc-five.vercel.app"><FaTwitter /></Link>
          </span>
          <span className="bannerIcon">
          <Link className="text-primary underline text-blue-500  cursor-pointer" to="https://www.linkedin.com/in/mohammed-hassan-49a8281b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft