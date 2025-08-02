import React, { useState } from "react";
import Slider from "react-slick";

// Import slick-carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";

const slides = [
  {
    id: 1,
    image: hero1,
    title: "Build Strong and Practical skills in Real Estate Field",
    description:
      "Students can access our program from anywhere in the world through our learning platform and access all learning material at their convenience.",
  },
  {
    id: 2,
    image: hero2,
    title: "Learn Anytime, Anywhere",
    description:
      "Join a community of learners and educators dedicated to fostering innovation and critical thinking. Your success is our mission.",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/1184578/pexels-photo-1184578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=1200",
    title: "Simple, Easy, and Affordable Courses for your Growth",
    description:
      "The Course content is designed to be easily understood by any level of professional. At affordable prices,our courses won't break your bank.",
  },
];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    className="absolute max-lg:hidden right-4 top-1/2 transform -translate-y-1/2 bg-gray-500/50 hover:bg-opacity-40 text-white p-3 rounded-full z-20"
    onClick={onClick}
    aria-label="Next slide"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute max-lg:hidden left-4 top-1/2 transform -translate-y-1/2 bg-gray-500/50 hover:bg-opacity-40 text-white p-3 rounded-full z-20"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
    function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: false,
    arrows: true,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    customPaging: () => <div className="w-3 h-3 rounded-full bg-white opacity-50"></div>,
    appendDots: (dots) => (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ul className="flex gap-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="relative min-h-screen w-full pt-20 font-inter overflow-hidden" id="hero">
      <Slider {...settings} className="w-full h-screen">
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <div
              className="relative w-full h-screen flex justify-center items-center text-center px-4"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 z-10"></div>

            
            </div>
          </div>
        ))}
      </Slider>
      {/* Content Section for the current slide */}
      <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <div className=" z-10 flex flex-col w-full max-w-[1200px] items-center justify-center px-6 md:px-16 text-center md:text-left slide-content">
          <div className="w-full text-white">
            <p className="text-orange-500 text-lg md:text-xl font-semibold mb-4 flex items-center justify-center md:justify-start">
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              WELCOME TO IREF
            </p>
            <h1 className="text-5xl font-[roboto] md:text-6xl max-w-[900px] font-extrabold leading-tight mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              {slides[currentSlide].description}
            </p>
            <div className="flex gap-4 max-lg:text-base max-lg:justify-center">
              <button onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }} className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-8 max-lg:px-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                ABOUT MORE
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
