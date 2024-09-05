import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
  )
}

export default Media