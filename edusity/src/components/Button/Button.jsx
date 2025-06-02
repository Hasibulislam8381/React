import React from "react";
import arrow from "../../assets/white-arrow.png";

const Button = ({ text }) => {
  return (
    <button className="flex items-center gap-1 bg-blue-600 px-3 py-2 text-white rounded-3xl hover:bg-blue-700 cursor-pointer">
      {text} <img src={arrow} alt="" className="w-5 h-3" />
    </button>
  );
};

export default Button;
