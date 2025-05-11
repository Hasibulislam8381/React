import React from "react";
import ReactStars from "react-stars";
import PropTypes from "prop-types";
function MovieItem({ movie, rateMovie, toggleWatched, deleteMovie }) {
  const ratingChange = (newRating) => {
    rateMovie(movie.id, newRating);
  };
  return (
    <div>
      <li className="flex justify-between items-center p-3 bg-gray-800 rounded-lg shadow-md">
        <span
          className={`flex-1 mr-2 ${
            movie.watched ? "line-through text-gray-400" : "text-white"
          }`}
        >
          {movie.title} On {movie.ott}
          {movie.rating && `⭐ ${movie.rating}/5`}
        </span>

        <div>
          <div className="flex gap-2">
            <ReactStars
              value={movie?.rating}
              count={5}
              size={24}
              onChange={ratingChange}
              color2={"#ffd700"}
            />
            <button
              onClick={() => toggleWatched(movie.id)}
              className="px-2 py-1 bg-green-600 text-white rounded cursor-pointer"
            >
              {movie.watched ? "Unwatched" : "Watched"}
            </button>
            <button
              onClick={() => deleteMovie(movie.id)}
              className="px-2 py-1 bg-red-600 text-white rounded cursor-pointer"
            >
              Delete
            </button>
          </div>
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
