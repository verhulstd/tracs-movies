import React from "react";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <div className="movieGrid">
      {movies.map(({ title, id, overview, poster_path }) => (
        <Link to={"/movie/" + id} key={id}>
          <div className="movie">
            <img src={"https://image.tmdb.org/t/p/w200/" + poster_path} />
            <h2>{title}</h2>
            <p>{overview}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
