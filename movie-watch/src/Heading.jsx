import React from "react";
import { Film } from "lucide-react";

function Heading() {
  return (
    <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
      <Film className="w-8 h-8" />
      Movie Watch List
    </h1>
  );
}

export default Heading;
