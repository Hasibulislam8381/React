import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-gray-300 text-gray-700 text-sm">
      <div className="w-full md:w-1/2 text-center md:text-left">
        © 2025 Hasibul Islam Himel
      </div>
      <div className="w-full md:w-1/2 text-center md:text-right">
        <ul className="flex justify-center md:justify-end gap-4">
          <li className="hover:underline cursor-pointer">Privacy Policy</li>
          <li className="hover:underline cursor-pointer">Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
