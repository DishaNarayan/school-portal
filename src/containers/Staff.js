import React, { Component } from "react";
import "./Home.css";
import staff from "../staff.json";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        {!this.props.isAuthenticated && <Redirect to="/login" />}
        <div className="lander">
          {data.map(function(school) {
            return (
              <table>
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                </tr>
                <tr>
                  <td>{school.name}</td>
                  <td>{school.desg}</td>
                </tr>
              </table>
            );
          })}
        </div>
      </div>
    );
  }
}
