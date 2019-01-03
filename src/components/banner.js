import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img alt="app icon" width="100" src="logo.jpg" />
              <h1>MoviesDB Search Client</h1>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
