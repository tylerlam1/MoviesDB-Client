import React, { Component } from "react";
import SearchBar from "../containers/search_bar.js";
import Banner from "./banner.js";
import MovieList from "./movie_list";
export default class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}
