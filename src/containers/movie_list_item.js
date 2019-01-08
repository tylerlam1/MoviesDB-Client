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
          <table className="table" key={this.props.movie[0].results[i].id}>
            <tbody>
              <tr>
                <td>
                  <img
                    className="imgframe"
                    src="poster"
                    width="300"
                    src={this.props.movie[0].results[i].poster_src}
                    onError={e => {
                      e.target.onerror = null;
                      e.target.src = "logo.jpg";
                    }}
                  />
                </td>
                <td>
                  <h1>{this.props.movie[0].results[i].title}</h1>
                  <p>{this.props.movie[0].results[i].overview}</p>
                  <div className="star">
                    {this.props.movie[0].results[i].vote_average}
                  </div>
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
  return { movie: state.movie };
}

export default connect(mapStateToProps)(MovieListItem);
