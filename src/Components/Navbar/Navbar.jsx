import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import React from "react";

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
        className={`nav-link list-none flex justify-center space-x-9 font-semibold  flex-grow ${isOpen ? "flex-col absolute bg-white w-88 h-[60vh] top-32 right-0 z-10 px-5 space-y-3" : "hidden md:flex"}`}
      >
        <li>
          <a href="#home" className="text-base text-purple-900 transition-colors hover:text-purple-400" >
            Home
            </a>
        </li>
        <li>
          <a href="#about" className="text-base text-purple-900 transition-colors hover:text-purple-400 ">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="text-base text-purple-900 transition-colors hover:text-purple-400">
            Services
          </a>
        </li>
        <li>
          <a href="#faqs" className="text-base text-purple-900 transition-colors hover:text-purple-400">
            FAQs
          </a>
        </li>
        <li>
          <a href="#contact" className="text-base text-purple-900 transition-colors hover:text-purple-400">
            Contact
          </a>
        </li>
      </ul>
      <button className="hidden px-4 py-2 text-lg text-white transition-all bg-purple-600 rounded-md hover:bg-purple-300 md:inline-block">
        Get Started
      </button>


      <div className="text-xl text-black cursor-pointer icon md:hidden" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
