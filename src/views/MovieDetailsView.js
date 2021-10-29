import React, { Component } from "react";
import axios from "axios";
import defaultImage from "../components/MoviesList/defaultImg.jpg";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import SimilarMovies from "../components/SimilarMovies/SimilarMovies";
// import GenresList from "../components/GenresList";

const basePath = "https://image.tmdb.org/t/p/original";

class MovieDetailsView extends Component {
  state = {
    title: null,
    releaseDate: null,
    posterPath: null,
    voteAverage: null,
    overview: null,
    genres: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a1263c9a7b4814efa2a844cd1efb1639&language=en-US`
    );
    this.setState({
      title: response.data.original_title,
      releaseDate: response.data.release_date,
      posterPath: response.data.poster_path
        ? basePath + response.data.poster_path
        : defaultImage,
      voteAverage: response.data.vote_average,
      overview: response.data.overview,
      genres: this.refactorGenres(response.data.genres).join(" "),
    });
  }

  refactorGenres = (genres) => {
    console.log(genres);
    return genres.map((genre) => genre.name);
  };

  render() {
    const {
      title,
      releaseDate,
      posterPath,
      voteAverage,
      overview,
      genres,
    } = this.state;
    return (
      <>
        <MovieDetails
          title={title}
          releaseDate={releaseDate}
          posterPath={posterPath}
          voteAverage={voteAverage}
          overview={overview}
          genres={genres}
        />
        <SimilarMovies movieId={this.props.match.params.movieId} />
      </>
    );
  }
}

export default MovieDetailsView;
