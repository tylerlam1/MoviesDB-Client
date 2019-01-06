import React, { Component } from "react";
import { connect } from "react-redux";

class MovieListItem extends Component {
  render() {
    if (typeof this.props.movie[0] !== "undefined") {
      return (
        <table className="table">
          <tbody>
            <tr>
              <td>
                <img src="" />
              </td>
              <td>
                <p>{this.props.movie[0].results[0].title}</p>
              </td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return { movie: state.movie };
}

export default connect(mapStateToProps)(MovieListItem);
