import React from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon1 from "../../assets/program-icon-1.png";
import program_icon2 from "../../assets/program-icon-2.png";
import program_icon3 from "../../assets/program-icon-3.png";
import Title from "../Title/Title";

function Programs() {
  const programs = [
    { img: program_1, icon: program_icon1, text: "Graduation Degree" },
    { img: program_2, icon: program_icon2, text: "Postgraduate Program" },
    { img: program_3, icon: program_icon3, text: "Online Courses" },
  ];

  return (
    <div id="programs" className="container mx-auto px-4 pt-14 pb-14 ">
      <Title subtitle="Our Programs" title="What We Offer" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {programs.map((item, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={item.img}
              alt={`program-${index + 1}`}
              className="w-full"
            />

            {/* Hover Caption */}
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center opacity-0 group-hover:opacity-70 cursor-pointer transition-all duration-300">
              <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center">
                <img src={item.icon} alt="" className="w-12 h-14 mb-2" />
                <p className="text-white text-lg font-semibold">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
