import React from "react";

function MovieFilter({ setFilter }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setFilter("all")}
        className="px-2 py-1 rounded bg-gray-400 text-white"
      >
        {" "}
        All
      </button>
      <button
        onClick={() => setFilter("watched")}
        className="px-2 py-1 rounded bg-green-700 text-white"
      >
        Watched
      </button>
      <button
        onClick={() => setFilter("unwatched")}
        className="px-2 py-1 rounded bg-sky-700 text-white"
      >
        Unwatched
      </button>
    </div>
  );
}

export default MovieFilter;
