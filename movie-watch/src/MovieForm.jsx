import React, { useState } from "react";

function MovieForm() {
  const [movieData, setMovieData] = useState({
    title: "",
    ott: "",
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setMovieData({ ...movieData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(movieData);
    console.log(movieData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-2 mb-8 w-full"
    >
      <input
        className="flex-1 p-2 border border-gray-600 bg-gray-800 rounded text-white"
        type="text"
        onChange={handleChange}
        name="title"
        value={movieData?.title}
      />
      <select
        name="ott"
        onChange={handleChange}
        value={movieData?.ott}
        className="border border-gray-300 rounded-md"
      >
        <option value="">Select an OTT</option>
        <option value="Netflix">Netflix</option>
        <option value="Amazon Prime">Amazon Prime</option>
        <option value="Hotstar">Hotstar</option>
        <option value="SonyLIV">SonyLIV</option>
        <option value="Hoichoi">Hoichoi</option>
        <option value="Others">Others</option>
      </select>
      <button className="px-4 py-1 bg-sky-400 text-white cursor-pointer hover:bg-sky-600 rounded">
        Add
      </button>
    </form>
  );
}

export default MovieForm;
