import React from "react";
import defaultImage from "../MoviesList/defaultImg.jpg";

const basePath = "https://image.tmdb.org/t/p/original";

const MovieItem = ({ posterPath, title, voteAverage }) => {
  return (
    <>
      <img
        src={posterPath ? basePath + posterPath : defaultImage}
        alt={title}
      />
      <p>{title}</p>
      <span>{voteAverage}</span>
    </>
  );
};

export default MovieItem;
