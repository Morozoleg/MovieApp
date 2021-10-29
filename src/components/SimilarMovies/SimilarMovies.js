import React, { Component } from "react";
import axios from "axios";
import MovieList from "../MoviesList/MoviesList";
import ErrorMessage from "../ErrorMessage";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

class SimilarMovies extends Component {
  state = {
    similarMovies: [],
  };
  async componentDidMount() {
    const { movieId } = this.props;
    const response = await axios.get(
      `movie/${movieId}/recommendations?api_key=a1263c9a7b4814efa2a844cd1efb1639&language=en-US&`
    );
    this.setState({ similarMovies: response.data.results });
  }

  render() {
    const { similarMovies } = this.state;
    return (
      <>
        <h2>SIMILAR MOVIES</h2>
        {similarMovies.length > 0 && <MovieList movies={similarMovies} />}
        {similarMovies.length === 0 && <ErrorMessage />}
      </>
    );
  }
}
export default SimilarMovies;
