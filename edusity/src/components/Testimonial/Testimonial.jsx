import React from "react";
import Title from "../Title/Title";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

const Testimonial = () => {
  return (
    <div className="container mx-auto px-4 pt-14 pb-14">
      <Title subtitle="Testimonial" title="What Student Says" />

      <div className="relative">
        {/* Slider Section */}
        <div className="slider bg-gray-100 p-6 rounded-lg shadow-md">
          {/* Testimonials content will go here */}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 -translate-y-1/2">
          <button className="back-btn">
            <img
              src={back_icon}
              alt="Back"
              className="w-10 h-10 bg-amber-300"
            />
          </button>
          <button className="next-btn">
            <img src={next_icon} alt="Next" className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
