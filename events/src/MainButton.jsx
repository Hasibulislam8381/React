import React from "react";

function MainButton({ onClick, children }) {
  function handleClick(event) {
    event.stopPropagation();
    onClick();
  }
  return (
    <button
      onClick={handleClick}
      className="bg-amber-700 mr-2 px-3 py-1 rounded cursor-pointer text-white"
    >
      {children}
    </button>
  );
}

export default MainButton;
