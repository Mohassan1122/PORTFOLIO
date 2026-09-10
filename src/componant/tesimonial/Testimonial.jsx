import React, { useState } from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { testimonialOne, testimonialTwo, quote } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-12 bg-white hover:bg-indigo-600 hover:text-white duration-300 rounded-full text-xl text-slate-600 flex justify-center items-center absolute top-0 right-0 shadow-sm cursor-pointer z-10 border border-slate-200"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-12 bg-white hover:bg-indigo-600 hover:text-white duration-300 rounded-full text-xl text-slate-600 flex justify-center items-center absolute top-0 right-16 shadow-sm cursor-pointer z-10 border border-slate-200"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div style={{ borderRadius: "10px", padding: "10px" }}>
        <ul style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "20px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
              width: "12px",
              height: "12px",
              background: "#4f46e5",
              borderRadius: "50%",
              cursor: "pointer",
            }
            : {
              width: "12px",
              height: "12px",
              background: "#cbd5e1",
              borderRadius: "50%",
              cursor: "pointer",
            }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b border-slate-200/80"
    >
      <div className="flex justify-center items-center text-center mb-12">
        <Title title="WHAT CLIENTS & COLLEAGUES SAY" des="Testimonials" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Slide One */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-8">
              <div className="w-full lgl:w-[35%] h-full bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col gap-4 justify-center">
                <img
                  className="h-64 rounded-xl object-cover"
                  src={testimonialOne}
                  alt="Alex Thompson"
                />
                <div className="w-full flex flex-col">
                  <p className="text-xs uppercase text-indigo-600 tracking-wider font-semibold">
                    Bright Solutions Inc.
                  </p>
                  <h3 className="text-xl font-bold text-slate-900">Alex Thompson</h3>
                  <p className="text-xs text-slate-500">
                    Project Manager
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-16 lgl:w-20 opacity-30 mb-2" src={quote} alt="quote" />
                <div className="w-full py-8 bg-white rounded-2xl shadow-sm p-6 lgl:p-8 flex flex-col justify-center gap-4 border border-slate-200/80">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-slate-100 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Innovative Web Platform Development
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        LinkedIn Client Recommendation
                      </p>
                    </div>
                    <div className="text-amber-400 flex gap-1 text-sm">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    "Working with Mohammed was a game-changer for our platform project. His deep expertise in frontend and backend development, coupled with his commitment to clean architecture and timely delivery, exceeded our expectations. The platform's performance and UX were top-tier."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Two */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-8">
              <div className="w-full lgl:w-[35%] h-full bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col gap-4 justify-center">
                <img
                  className="h-64 rounded-xl object-cover"
                  src={testimonialTwo}
                  alt="Sophia Rodriguez"
                />
                <div className="w-full flex flex-col">
                  <p className="text-xs uppercase text-indigo-600 tracking-wider font-semibold">
                    Visionary Tech Hub
                  </p>
                  <h3 className="text-xl font-bold text-slate-900">Sophia Rodriguez</h3>
                  <p className="text-xs text-slate-500">
                    Lead Software Architect
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-16 lgl:w-20 opacity-30 mb-2" src={quote} alt="quote" />
                <div className="w-full py-8 bg-white rounded-2xl shadow-sm p-6 lgl:p-8 flex flex-col justify-center gap-4 border border-slate-200/80">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-slate-100 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        E-Commerce & Telemedicine System
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Freelance Project Review
                      </p>
                    </div>
                    <div className="text-amber-400 flex gap-1 text-sm">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    "Mohammed's ability to understand complex business requirements and engineer seamless technical solutions was highly impressive. From database queries to responsive React interfaces, everything was delivered with solid code quality and professionalism."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;
