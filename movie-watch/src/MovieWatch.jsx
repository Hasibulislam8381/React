import React, { useState } from "react";
import Heading from "./Heading";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import MovieFilter from "./MovieFilter";
function MovieWatch() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("all");

  const addMovie = ({ title, ott }) => {
    const newMovie = {
      id: crypto.randomUUID(),
      title,
      ott,
      rating: null,
      watched: false,
    };
    setMovies([...movies, newMovie]);
    console.log("new movies:", [...movies, newMovie]);
  };

  const rateMovie = (id, rating) => {
    setMovies(
      movies.map((movie) => (movie.id === id ? { ...movie, rating } : movie))
    );
  };
  const toggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };
  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const filteredMovies = movies.filter((movie) => {
    if (filter === "watched") return movie.watched;
    if (filter === "unwatched") return !movie.watched;
    return true;
  });

  return (
    <div className="flex w-1/2 m-3 flex-col items-center justify-center p-8 bg-slate-900 text-white rounded-lg shadow-lg">
      <Heading />
      <MovieForm addMovie={addMovie} />
      <MovieFilter setFilter={setFilter} />
      <MovieList
        movies={filteredMovies}
        rateMovie={rateMovie}
        toggleWatched={toggleWatched}
        deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default MovieWatch;
