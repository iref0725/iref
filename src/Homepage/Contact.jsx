import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const EnrollmentSection = () => {
  return (
    <section id='contact' className="max-w-5xl mx-auto  bg-white text-gray-800 rounded-2xl shadow-2xl border border-gray-300 my-10 overflow-hidden flex flex-col lg:flex-row">
      
      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-gray-100 p-8 space-y-6">
        <h2 className="text-3xl font-bold text-red-700 mb-4 font-[roboto]">Enroll Now</h2>

        <form className="space-y-6">
          {/* Input with floating label */}
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder=" "
              required
              className="peer w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500"
            >
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              required
              className="peer w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <select
              required
              className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select Course</option>
              <option>Web Development</option>
              <option>Data Science</option>
            </select>
          </div>

          <div className="relative">
            <textarea
              rows="3"
              id="message"
              placeholder=" "
              className="peer w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-700 to-red-800 text-white py-3 px-6 rounded-md hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span className="font-semibold">Enroll</span>
            <BsArrowRight className="text-lg" />
          </button>
        </form>
      </div>

      {/* Info Section */}
      <div className="w-full lg:w-1/2 p-8 bg-white space-y-6 flex flex-col justify-center">
        <h3 className="text-3xl font-extrabold leading-tight font-[roboto]">
          Unlock Your <span className="text-red-700">Talent</span>
        </h3>

        <p className="text-gray-600 text-base">
          Learn and grow with our expert-led programs built for your future. Practical, in-demand skills in an immersive format.
        </p>

        <button className="w-max bg-gradient-to-r from-orange-700 to-orange-800 text-white py-3 px-6 rounded-md hover:scale-[1.02] transition-all duration-200 flex items-center space-x-2">
          <span className="font-semibold">Learn More</span>
          <BsArrowRight className="text-lg" />
        </button>
      </div>
    </section>
  );
};

export default EnrollmentSection;
