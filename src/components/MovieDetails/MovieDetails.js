import React from "react";

const MovieDetails = ({
  posterPath,
  title,
  releaseDate,
  overview,
  voteAverage,
  genres,
}) => {
  return (
    <>
      <img src={posterPath} alt={title} />
      <h2>{title}</h2>
      <p>Release date: {releaseDate}</p>
      <p>{overview}</p>
      <span>{voteAverage}</span>
      <p>{genres}</p>
    </>
  );
};

export default MovieDetails;
