import React from 'react'

const FooterBottom = () => {
  return (
    <div className="w-full bg-slate-950 text-slate-400 border-t border-slate-800/80 py-8 text-sm">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p>
          © {new Date().getFullYear()} <span className="text-white font-medium">Mohammed Hassan</span>. All rights reserved. Built with React 19, TypeScript & Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default FooterBottom