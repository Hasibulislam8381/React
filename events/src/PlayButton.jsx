import React from "react";
import PropTypes from "prop-types";

function PlayButton({ movieName }) {
  return (
    <button className="bg-amber-700 mr-2 px-3 py-1 rounded cursor-pointer text-white">
      Play {movieName}
    </button>
  );
}

PlayButton.propTypes = {
  movieName: PropTypes.string.isRequired,
};

export default PlayButton;
