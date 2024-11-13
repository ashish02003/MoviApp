import React from "react";

import Slider from "react-slick";
import { Settings } from "../../common/setting";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";

import MovieCard from "../MovieCard/MovieCard";

import "./MoviListing.css";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  console.log(movies);
  let MovieData,
    ShowData = "";

  MovieData =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  ShowData =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{MovieData}</Slider>
        </div>
      </div>

      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {" "}
          <Slider {...Settings}>{ShowData}</Slider>
        </div>
      </div>
    </div>
  );
};
    
export default MovieListing;
