import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="container">
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
