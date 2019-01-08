import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchResult } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchResult(this.state.term);
    this.setState({ term: "" });
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
              <button
                type="submit"
                disabled={!this.state.term}
                className="btn btn-secondary"
              >
                Search
              </button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchResult }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
