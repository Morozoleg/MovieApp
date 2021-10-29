import React, { Component } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MoviesList/MoviesList";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

class MoviesView extends Component {
  state = {
    movies: [],
    currentPage: 1,
    searchQuery: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
  }

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, movies: [] });
  };
  fetchMovies = () => {
    const { currentPage, searchQuery } = this.state;
    axios
      .get(
        `/search/movie?api_key=a1263c9a7b4814efa2a844cd1efb1639&language=en-US&query=${searchQuery}&page=${currentPage}&include_adult=false`
      )
      .then((response) => {
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...response.data.results],
          currentPage: prevState.currentPage + 1,
        }));
      });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onChangeQuery} />

        <>
          {movies.length > 0 && <MovieList movies={movies} />}
          {movies.length > 0 && (
            <button type="button" onClick={this.fetchMovies}>
              Load a little more
            </button>
          )}
        </>
      </>
    );
  }
}

export default MoviesView;
