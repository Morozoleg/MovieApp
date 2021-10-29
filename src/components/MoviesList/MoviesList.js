import React from "react";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
import AddFavorites from "../AddFavorites/AddFavorites";

const MovieList = ({ movies }) => (
  <ul>
    {movies.map(({ id, title, poster_path, vote_average }) => (
      <li key={id}>
        <Link to={`${id}`}>
          <MovieItem
            posterPath={poster_path}
            title={title}
            voteAverage={vote_average}
          />
        </Link>
        <AddFavorites />
      </li>
    ))}
  </ul>
);

export default MovieList;
