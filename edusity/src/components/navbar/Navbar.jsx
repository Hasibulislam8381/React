import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""} w-full`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testinonials</li>
        <li className="btn">Contact us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
