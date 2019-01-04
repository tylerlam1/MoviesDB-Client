import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <img className="center" alt="app icon" width="25" src="logo.jpg" />
        <h1 className="title">MoviesDB Search Client</h1>
      </div>
    );
  }
}
