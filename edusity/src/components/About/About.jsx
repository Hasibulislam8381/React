import React from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
export const About = () => {
  return (
    <section id="aboutus" className="container mx-auto px-4 py-14">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image with Play Icon */}
        <div className="relative w-full md:w-2/5">
          <img
            src={about_img}
            alt="About"
            className="rounded-xl w-full h-auto object-cover"
          />
          <img
            src={play_icon}
            alt="Play"
            className="absolute top-1/2 left-1/2 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>

        {/* Right - Heading and Description */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <p className="text-md text-gray-500 uppercase tracking-wide mb-2">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Empowering Students Through Quality Education
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We provide innovative learning programs, industry-driven curriculum,
            and expert guidance to help students excel in their educational and
            career journeys.
          </p>
        </div>
      </div>
    </section>
  );
};
