import React from "react";
import PropTypes from "prop-types";
import MainButton from "./MainButton";

function PlayButton({ movieName }) {
  function handleClick() {
    console.log(`Playing ${movieName}`);
  }
  return <MainButton onClick={handleClick}>Play {movieName}</MainButton>;
}

PlayButton.propTypes = {
  movieName: PropTypes.string.isRequired,
};

export default PlayButton;
