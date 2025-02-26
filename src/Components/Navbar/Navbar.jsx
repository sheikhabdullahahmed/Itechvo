import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
  className={`navbar flex justify-between items-center px-4 h-24 text-white sticky top-0 left-0 w-full bg-transparent z-10 transition-all ${scrolled ? "bg-white text-black shadow-lg" : ""}`}
>
      <div className="flex items-center justify-start p-1 logo">
        <img src={logo} alt="logo" className="w-auto h-32" />
      </div>
      <ul
        className={`nav-link list-none flex justify-center space-x-9 nav-links font-semibold flex-grow ${isOpen ? "flex-col absolute bg-white w-60 h-[40vh] top-32 right-0 z-10 px-5 space-y-10" : "hidden md:flex"} `}
      >
        <li>
          <a href="/" className="text-base text-purple-900 transition-colors hover:text-purple-400"    onClick={() => setIsOpen(false)} >Home</a>
        </li>
        <li>
          <a href="#about" className="text-base text-purple-900 transition-colors hover:text-purple-400"    onClick={() => setIsOpen(false)} >About</a>
        </li>
        <li>
          <a href="#services" className="text-base text-purple-900 transition-colors hover:text-purple-400"   onClick={() => setIsOpen(false)} >Service</a>
        </li>
        <li>
          <a href="#contact" className="text-base text-purple-900 transition-colors hover:text-purple-400"  onClick={() => setIsOpen(false)}>Contact</a>
        </li>
        <li>
          <a href="#faqs" className="text-base text-purple-900 transition-colors hover:text-purple-400"  onClick={() => setIsOpen(false)}>FAQs</a>
        </li>

      </ul>


      <a href="#contact">
        <button
          className="hidden lg:px-8 lg:py-2 md:px-6 md:py-3 px-4  py-3 text-lg font-base text-white transition-all hover:bg-[#CCACEB] bg-purple-600 rounded-md  md:inline-block">
          <span className="">Get Started</span>
          {/* <FaArrowRight className="group-hover:ml-2 transition-all" /> */}
        </button>
      </a>
      <div className="text-xl text-black cursor-pointer icon md:hidden" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
