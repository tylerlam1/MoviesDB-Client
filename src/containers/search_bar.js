import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="bac">
        <div className="col-md-6 col-md-offset-3">
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
              placeholder="Search for your favorite movies"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">
                Search
              </button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}
