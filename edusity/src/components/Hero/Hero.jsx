import "./Hero.css";
import React from "react";
import dark_arrow from "../../assets/dark-arrow.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We ensure for a better world</h1>
        <p>
          Empowering communities through innovation, sustainability, and
          compassion.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
