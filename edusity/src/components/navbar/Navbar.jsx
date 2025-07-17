import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full px-4 py-3 shadow-md transition-all ${
        sticky ? "bg-blue-900 text-white" : "bg-blue-800 text-white"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <img src={logo} alt="Logo" className="h-10" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="home" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} offset={-260} duration={500}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="aboutus" smooth={true} offset={-150} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-260} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonial" smooth={true} offset={-260} duration={500}>
              Testimonial
            </Link>
          </li>
          <li className="btn">
            <Link to="contactus" smooth={true} offset={-260} duration={500}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center mt-4 bg-white py-4 space-y-4 shadow-md rounded">
          <li>
            <Link
              to="home"
              onClick={closeMenu}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              onClick={closeMenu}
              smooth={true}
              offset={-260}
              duration={500}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="aboutus"
              onClick={closeMenu}
              smooth={true}
              offset={-150}
              duration={500}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="campus"
              onClick={closeMenu}
              smooth={true}
              offset={-260}
              duration={500}
            >
              Campus
            </Link>
          </li>
          <li>
            <Link
              to="testimonial"
              onClick={closeMenu}
              smooth={true}
              offset={-260}
              duration={500}
            >
              Testimonial
            </Link>
          </li>
          <li className="btn">
            <Link
              to="contactus"
              onClick={closeMenu}
              smooth={true}
              offset={-260}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
