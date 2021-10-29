import React, { Component } from "react";
import axios from "axios";
import MovieList from "../components/MoviesList/MoviesList";
import ErrorMessage from "../components/ErrorMessage";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

class HomeView extends Component {
  state = {
    movies: [],
    currentPage: 1,
  };

  async componentDidMount() {
    const response = await axios.get(
      `movie/popular?api_key=a1263c9a7b4814efa2a844cd1efb1639&language=en-US&page=${this.state.currentPage}`
    );
    console.log(response.data);

    this.setState({ movies: response.data.results });
  }

  fetchMovies = () => {
    const { currentPage } = this.state;
    axios
      .get(
        `movie/popular?api_key=a1263c9a7b4814efa2a844cd1efb1639&language=en-US&page=${
          currentPage + 1
        }`
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
        {movies.length > 0 && <MovieList movies={movies} />}
        {movies.length > 0 && (
          <button type="button" onClick={this.fetchMovies}>
            Load a little more
          </button>
        )}
        {movies.length === 0 && <ErrorMessage />}
      </>
    );
  }
}

export default HomeView;
