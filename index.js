import React, { useState } from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./style.css";
import MovieDetail from "./components/MovieDetail";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviePage />
        </Route>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

//import React, { Component } from "react";
// export default class App extends Component {
//   state = {
//     movies: [],
//     loading: false,
//   };
//   componentDidMount() {
//     this.getMovies("cinderella");
//   }
//   getMovies = (str) => {
//     this.setState({
//       ...this.state,
//       loading: true,
//     });
//     const getData = fetch(
//       `https://api.themoviedb.org/3/search/movie?api_key=10fa74251cfff94026cb589d95b3db91&language=en-US&query=${str}&page=1&include_adult=false`
//     );
//     getData
//       .then((rensponseObj) => rensponseObj.json())
//       .then((data) => {
//         this.setState({
//           ...this.state,
//           loading: false,
//           movies: data.results,
//         });
//       });
//   };
//   render() {
//     return (
//       <>
//         <MovieForm getMovies={this.getMovies} />
//         {this.state.loading && <Loading />}
//         {this.state.movies.length > 0 && (
//           <MovieList movies={this.state.movies} />
//         )}
//       </>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));
