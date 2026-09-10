import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { PicTwo } from '../../assets/index';
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-white/90 backdrop-blur-md mx-auto flex justify-between items-center font-titleFont border-b border-slate-200/80 px-4 lg:px-8 transition-all duration-300 shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src={PicTwo}
          alt="Mohammed Hassan"
          className="w-11 h-11 rounded-full border-2 border-indigo-600 object-cover shadow-sm"
        />
        <div className="flex flex-col">
          <span className="text-base font-bold text-slate-900 tracking-wider">M. HASSAN</span>
          <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest">Full-Stack Dev</span>
        </div>
      </div>
      
      <div>
        {/* Desktop Menu */}
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-8">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-sm font-medium text-slate-600 tracking-wide cursor-pointer hover:text-indigo-600 transition-colors duration-300"
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
          className="text-xl mdl:hidden bg-slate-100 w-10 h-10 inline-flex items-center justify-center rounded-xl text-slate-700 hover:text-indigo-600 cursor-pointer border border-slate-200 shadow-sm"
        >
          {showMenu ? <MdClose /> : <FiMenu />}
        </span>

        {/* Mobile Menu Overlay */}
        {showMenu && (
          <div className="fixed inset-0 bg-white p-6 z-50 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div className="flex flex-col gap-6 relative">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                <img className="w-14 h-14 rounded-full border-2 border-indigo-600 object-cover" src={PicTwo} alt="Mohammed Hassan" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Mohammed Hassan</h3>
                  <p className="text-xs text-indigo-600 font-semibold">Full Stack & Frontend Developer</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Passionate Full-Stack Developer specializing in React, TypeScript, Node.js, and Laravel. Building modern, scalable, and intuitive web platforms.
              </p>

              <ul className="flex flex-col gap-4 py-2">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-medium text-slate-700 tracking-wide cursor-pointer hover:text-indigo-600 transition-colors duration-300"
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
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200 pt-4">
              <h2 className="text-xs uppercase font-titleFont tracking-widest text-slate-400 font-semibold">
                CONNECT WITH ME
              </h2>
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

            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;


