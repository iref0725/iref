import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const EnrollmentSection = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto  bg-white text-gray-800 rounded-2xl shadow-2xl border border-gray-300 my-10 overflow-hidden flex flex-col-reverse lg:flex-row"
    >
      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-gray-100 p-8 space-y-6">
        <form className="space-y-2">
          {/* Input with floating label */}
          <div className="relative">
            <label
              htmlFor="name"
              className="  text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Full Name"
              required
              className="peer w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800  focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="  text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              required
              className="peer w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800  focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="address"
              className="  text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500"
            >
              Your Address
            </label>
            <input
              type="address"
              id="address"
              placeholder="Enter Your Address"
              required
              className="peer w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800  focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="message"
              className="  text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500"
            >
              Message
            </label>
            <textarea
              rows="3"
              id="message"
              placeholder="Ask Your Question"
              className="peer w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800  focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-700 to-red-800 text-white py-3 px-6 rounded-md hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span className="font-semibold">Enter</span>

          </button>
        </form>
      </div>

      {/* Info Section */}
      <div className="w-full lg:w-1/2 p-8 bg-white space-y-6 flex flex-col">
        <h2 className="text-3xl font-bold text-red-700 mb-4 font-[roboto]">
          {" "}
          Get In Touch With Us
        </h2>

        <p className="text-gray-600 text-base">
          Have questions or need support? Reach out to us—we're here to help!
        </p>

        <div className="space-y-4 text-gray-700 text-base">
          <div className="flex items-center space-x-3">
            <FaPhoneAlt
              className="text-red-700 bg-red-500/20 p-3 rounded-lg"
              size={44}
            />
            <span>+91 9617893789, +91 8871090476</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope
              className="text-red-700 bg-red-500/20 p-3 rounded-lg"
              size={44}
            />
            <span>contact@iref.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt
              className="text-red-700 bg-red-500/20 p-3 rounded-lg"
              size={44}
            />
            <span>Anjaneya University & IREF, Raipur (C. G.)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
