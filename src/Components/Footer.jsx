import React from "react";
import logo from "../assets/components/navbar/logo.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

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
            IREF-GMS your global education platform for your career growth in the Real Estate, Construction, and Finance sector
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

     

        {/* Address Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white text-xl font-semibold mb-4 border-b-2 border-white pb-2 inline-block">
            Our Address
          </h3>
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-white mt-1" />
            <address className="not-italic text-sm">
              Anjaneya University & IREF, Raipur (C. G.)
            </address>
          </div>
          <div className="flex items-center space-x-2">
            <MdEmail className="text-white" />
            <span>contact@iref.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhone className="text-white" />
            <span>+91 9617893789, +91 8871090476</span>
          </div>
       
        </div>
         <div className="w-full">
  <h3 className="text-white text-xl font-semibold mb-4 border-b-2 w-full border-white pb-2 inline-block">
    Follow Us
  </h3>
  <div className="flex space-x-4">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 text-2xl">
      <FaFacebookF />
    </a>
    <a href="https://www.instagram.com/instituteofrealestaterpr/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 text-2xl">
      <FaInstagram />
    </a>
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
            <a href="https://spadvertising.in" className="text-white hover:underline transition">
              SP Advertising
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
