import React from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";

function Programs() {
  const programs = [program_1, program_2, program_3];

  return (
    <div className="container mx-auto pt-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {programs.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img src={img} alt={`program-${index + 1}`} className="w-full" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Program {index + 1}
              </h3>
              <p className="text-gray-600 text-sm">
                Description of Program {index + 1}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
