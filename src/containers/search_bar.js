import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: " " };
  }
  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Search for your favorite movies"
          className="form-control"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}
