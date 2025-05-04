import React from "react";
import PlayButton from "./PlayButton";
import UploadButton from "./UploadButton";

function ToolBar() {
  return (
    <div onClick={() => console.log("You clicked on toolbar")}>
      <PlayButton movieName="Tom and Jerry" />
      <UploadButton />
    </div>
  );
}

export default ToolBar;
