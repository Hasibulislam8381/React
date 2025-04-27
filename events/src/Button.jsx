import React from "react";

function Button() {
  function handleClick() {
    console.log("You click me!");
  }
  return (
    <button
      className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
      onClick={handleClick}
    >
      Click Me
    </button>
  );
}

export default Button;
