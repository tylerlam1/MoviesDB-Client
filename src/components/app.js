import React, { Component } from "react";
import SearchBar from "../containers/search_bar.js";
import Banner from "./banner.js";
export default class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <SearchBar />
      </div>
    );
  }
}
