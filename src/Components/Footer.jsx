import React from "react";
import logo from "../assets/components/navbar/logo.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Eduka Info Section */}
        <div className="flex flex-col space-y-4">
          <div className="text-3xl font-bold text-white flex items-center">
            <img src={logo} alt="Eduka Logo" className="w-32" />
          </div>
          <p className="text-sm leading-relaxed">
            To deploy quality education to students, professionals, and
            entrepreneurs, and offer competitive human resources for the Real
            Estate and allied industry sector.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4 border-b-2 border-white pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              "About Us",
              "FAQ's",
              "Testimonials",
              "Terms Of Service",
              "Privacy Policy",
              "Update News",
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="group flex items-center hover:text-white transition-colors"
                >
                  <span className="text-red-700 mr-2 group-hover:text-white">•</span>{" "}
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Campus Section */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4 border-b-2 border-white pb-2 inline-block">
            Our Campus
          </h3>
          <ul className="space-y-2">
            {[
              "Campus Safety",
              "Student Activities",
              "Academic Department",
              "Planning & Administration",
              "Office Of The Chancellor",
              "Facility Services",
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="group flex items-center hover:text-white transition-colors"
                >
                  <span className="text-red-700 mr-2 group-hover:text-white">•</span>{" "}
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Address Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white text-xl font-semibold mb-4 border-b-2 border-white pb-2 inline-block">
            Our Address
          </h3>
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-white mt-1" />
            <address className="not-italic text-sm">
              5th Floor, Atharva Chambers, Wakdewadi, Shivajinagar, Pune 411005.
            </address>
          </div>
          <div className="flex items-center space-x-2">
            <MdEmail className="text-white" />
            <span>contact@iref.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhone className="text-white" />
            <span>+91 7620563627</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6">
        <p className="text-center text-sm text-gray-400">
          © 2025 Institute of Real Estate and Finance. All rights reserved.
          <br className="md:hidden" />
          <span className="block md:inline">
            {" "}
            Designed & developed by{" "}
            <a href="#" className="text-white hover:underline transition">
              SP Advertising
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
