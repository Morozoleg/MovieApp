import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import FavoritesView from "./views/FavoritesView";
import NotFoundView from "./views/NotFoundView";
import MovieDetailsView from "./views/MovieDetailsView";

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/favorites">favorites</Link>
      </li>
      <li>
        <Link to="/movies">Search for some movie</Link>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/movies" component={MoviesView} />
      <Route path="/:movieId" component={MovieDetailsView} />
      <Route exact path="/favorites" component={FavoritesView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);
export default App;
