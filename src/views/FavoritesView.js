import React, { Component } from "react";
import MovieList from "../components/MoviesList/MoviesList";
import ErrorMessage from "../components/ErrorMessage";

class FavoritesView extends Component {
  state = {
    favoriteMovies: [],
  };

  render() {
    return (
      <>
        <h2>FAVORITE MOVIES</h2>
        {/* {favoriteMovies.length > 0 && <MovieList movies={favoriteMovies} />}
        {favoriteMovies.length === 0 && <ErrorMessage />} */}
      </>
    );
  }
}

export default FavoritesView;
