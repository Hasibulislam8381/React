import PropTypes from "prop-types";
import React from "react";

function MovieList({ movies, rateMovie, toggleWatched, deleteMovie }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          rateMovie={rateMovie}
          toggleWatched={toggleWatched}
          deleteMovie={deleteMovie}
        />
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      ott: PropTypes.string.isRequired,
      watched: PropTypes.bool.isRequired,
      rating: PropTypes.number,
    })
  ).isRequired,
  rateMovie: PropTypes.func.isRequired,
  toggleWatched: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};
export default MovieList;
