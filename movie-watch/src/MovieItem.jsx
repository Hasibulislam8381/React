import React from "react";
import ReactStars from "react-stars";
import PropTypes from "prop-types";
function MovieItem({ movie, rateMovie, toggleWatched, deleteMovie }) {
  const ratingChange = (newRating) => {
    rateMovie(movie.id, newRating);
  };
  return (
    <div>
      <li>
        <span className="flex justify-between items-center p-3 bg-gray-800 rounded-lg shadow-md">
          {movie.title} On {movie.ott}
          {movie.rating && `⭐ ${movie.rating}/5`}
        </span>

        <div>
          <ReactStars
            value={movie?.rating}
            count={5}
            size={24}
            onChange={ratingChange}
            color2={"#ffd700"}
          />
        </div>
      </li>
    </div>
  );
}

MovieItem.propTypes = {
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
export default MovieItem;
