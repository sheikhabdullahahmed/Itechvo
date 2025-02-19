import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar flex justify-between items-center px-4 h-24  text-white sticky top-0 left-0 w-full bg-transparent  z-10 transition-all ${scrolled ? "bg-white shadow-lg" : ""}`}
    >
      <div className="flex items-center justify-start p-1 logo">
        <img src={logo} alt="logo" className="w-auto h-32" />
      </div>
      <ul
        className={`nav-link list-none flex justify-center space-x-9 nav-links font-semibold flex-grow ${isOpen ? "flex-col absolute bg-white w-88 h-[60vh] top-32 right-0 z-10 px-5 space-y-3" : "hidden md:flex"}`}
      >
        <li>
          <a href="/" className="text-base text-purple-900 transition-colors hover:text-purple-400">Home</a>
        </li>
        <li>
          <a href="#about" className="text-base text-purple-900 transition-colors hover:text-purple-400">About</a>
        </li>
        <li>
          <a href="#service" className="text-base text-purple-900 transition-colors hover:text-purple-400">Service</a>
        </li>
        <li>
          <a href="#contact" className="text-base text-purple-900 transition-colors hover:text-purple-400">Contact</a>
        </li>
        <li>
          <a href="#faqs" className="text-base text-purple-900 transition-colors hover:text-purple-400">Faqs</a>
        </li>
      </ul>

      <button className="hidden lg:text-base lg:px-6 lg:py-3 hover:cursor-pointer md:px-6 md:py-3 px-4 py-3 bg-[#A249F6] text-white font-base rounded hover:bg-[#CCACEB] inline-flex items-center gap-2 group md:inline-block">
        Get Started
      </button>


      <div className="text-xl text-black cursor-pointer icon md:hidden" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
