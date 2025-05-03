import React from "react";
import MainButton from "./MainButton";

function UploadButton() {
  return (
    <MainButton onClick={() => console.log("Uploading")}>Upload</MainButton>
  );
}

export default UploadButton;
