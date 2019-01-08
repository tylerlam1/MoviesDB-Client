import React, { Component } from "react";
import SearchBar from "../containers/search_bar.js";
import Banner from "./banner.js";
import MovieListItem from "../containers/movie_list_item";
export default class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <SearchBar />
        <MovieListItem />
      </div>
    );
  }
}
