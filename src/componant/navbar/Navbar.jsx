import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { PicTwo } from '../../assets/index';
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img
          src={PicTwo}
          alt="PicTwo"
          width="60"
          height="60"
          className="rounded-full mx-12"
        />
      </div>
      <div>
        {/* Desktop Menu */}
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Toggle Button */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          {showMenu ? <MdClose /> : <FiMenu />}
        </span>
        {/* Mobile Menu */}
        {showMenu && (
          <div className="fixed inset-0 bg-gray-900 p-4 z-40 flex flex-col overflow-y-auto">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-24 rounded-full" src={PicTwo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  Over the last 7 years, I've explored the world of web development,
                  moving from basic to advanced levels. My journey has been
                  closely connected with Web Develpoment tools. the core elements of
                  modern web development.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/swagsman26" className="bannerIcon">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="bannerIcon">
                    <FaTwitter />
                  </a>
                  <a href="https://www.linkedin.com/in/mohammed-hassan-49a8281b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bannerIcon">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
