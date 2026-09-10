import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-12 md:py-20 flex flex-col lgl:flex-row items-center justify-between gap-12 lgl:gap-8 border-b border-slate-200/80 font-titleFont"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Banner;