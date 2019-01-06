import React, { Component } from "react";
import { connect } from "react-redux";

class MovieListItem extends Component {
  render() {
    if (typeof this.props.movie[0] !== "undefined") {
      const movieAssort = [];
      for (var i = 0; i < this.props.movie[0].results.length; i++) {
        this.props.movie[0].results[i].poster_src =
          "https://image.tmdb.org/t/p/w185" +
          this.props.movie[0].results[i].poster_path;
        const movieItem = (
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <img
                    src="poster"
                    width="120"
                    src={this.props.movie[0].results[i].poster_src}
                  />
                </td>
                <td>
                  <p>{this.props.movie[0].results[i].title}</p>
                  <p>{this.props.movie[0].results[i].overview}</p>
                </td>
              </tr>
            </tbody>
          </table>
        );
        movieAssort.push(movieItem);
      }

      return movieAssort;
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  if (typeof state.movie[0] !== "undefined") {
    for (var i = 0; i < state.movie[0].results.length; i++) {
      console.log(state.movie[0].results[i].title);
      console.log(state.movie[0].results.length);
    }
  }
  return { movie: state.movie };
}

export default connect(mapStateToProps)(MovieListItem);
