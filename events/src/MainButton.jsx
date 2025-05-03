import React from "react";

function MainButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-amber-700 mr-2 px-3 py-1 rounded cursor-pointer text-white"
    >
      {children}
    </button>
  );
}

export default MainButton;
