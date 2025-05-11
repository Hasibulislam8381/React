import PropTypes from "prop-types";
import React from "react";
import MovieItem from "./MovieItem";
function MovieList({ movies, rateMovie, toggleWatched, deleteMovie }) {
  return (
    <ul className="mt-3">
      {movies.length === 0 ? (
        <p className="text-center text-amber-300">
          No Movies in your watchlist. Add some!
        </p>
      ) : (
        movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            rateMovie={rateMovie}
            toggleWatched={toggleWatched}
            deleteMovie={deleteMovie}
          />
        ))
      )}
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
