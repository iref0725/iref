import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import logo from "../assets/components/navbar/logo.jpg";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Program", href: "#program", id: "program" },
    { name: "Placements", href: "#placements", id: "placements" },
    { name: "Employment", href: "#employment", id: "employment" },
    { name: "Campus", href: "#campus", id: "campus" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-lg shadow-lg"
          : "bg-white shadow-md"
      }`}
    >
      <nav className="w-full max-w-[1200px] mx-auto py-3 flex items-center justify-between font-inter px-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-green-600 flex items-center">
            <img src={logo} alt="Logo" className="w-40 max-lg:w-38" />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-700 text-base">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="hover:text-red-600 transition-colors py-2 px-3 rounded-lg"
            >
              {link.name} 
            </a>
          ))}
        </div>

        {/* Apply Now Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <button onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }} className="group bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-t-2xl rounded-br-2xl shadow-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <IoCall className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white border-t border-gray-200`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
               onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="block text-gray-700 hover:text-red-600 py-3 px-3 rounded-lg hover:bg-green-50 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Apply Button */}
          <div className="pt-4 border-t border-gray-200">
            <button className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-t-2xl rounded-br-2xl shadow-lg flex items-center justify-center space-x-2 transition-all duration-300">
              <IoCall className="w-5 h-5" />
              <span>APPLY NOW</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
