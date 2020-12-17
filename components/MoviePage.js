import React, { useState } from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import Loading from "./Loading";
import axios from "axios";

export default function MoviePage() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = (str) => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=10fa74251cfff94026cb589d95b3db91&language=en-US&query=${str}&page=1&include_adult=false`
      )
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      });
  };
  return (
    <>
      <MovieForm getMovies={getMovies} />
      {loading && <Loading />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
