import React, { Component } from "react";
import { connect } from "react-redux";

class MovieList extends Component {
  render() {
    return (
      <table className="table">
        <tbody>
          <tr>
            <td>
              <img src="" />
            </td>
            <td>
              <p>{this.props.movie.page}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.movie);
  return { movie: state.movie };
}

export default connect(mapStateToProps)(MovieList);
