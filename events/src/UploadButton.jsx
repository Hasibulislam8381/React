import React from "react";

function UploadButton() {
  return (
    <button
      className="bg-amber-400 px-3 py-1 rounded cursor-pointer text-white"
      onClick={() => console.log("Uploading")}
    >
      Upload
    </button>
  );
}

export default UploadButton;
