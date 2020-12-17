import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";

export default function MovieDetail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(function() {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=10fa74251cfff94026cb589d95b3db91&language=en-US`
      )
      .then((responseObject) => {
        setMovieData(responseObject.data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && <Loading />}
      <Link to="/movies">BACK TO MOVIES</Link>
      <h1>{movieData.title}</h1>
      <p>{movieData.overview}</p>
    </>
  );
}
