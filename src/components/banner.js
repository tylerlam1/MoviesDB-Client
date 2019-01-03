import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <table className="banner">
        <img className="center" alt="app icon" width="100" src="logo.jpg" />
        <h1 className="title">MoviesDB Search Client</h1>
      </table>
    );
  }
}
