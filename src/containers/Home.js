import React, { Component } from "react";
import "./Home.css";
import { Redirect } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import Sidebar from "react-sidebar";

export default class Home extends Component {
  //MODAL
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      data: []
    };
  }
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("data"));
    this.setState({ data });
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return [
      <div>
        <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
          Add class
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Class</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>
                Class:
                <input type="text" name="class" />
              </label>
              <label>
                Section:
                <input type="text" name="section" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>,

      <div className="Home">
        {!this.props.isAuthenticated && <Redirect to="/login" />}
        <div className="lander">
          <table>
            <tr>
              <th>Classes</th>
              <th>Sections</th>
            </tr>
            {this.state.data.map(function(school) {
              return (
                <tr key={school.id}>
                  <td>{school.class}</td>
                  <td>{school.section}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    ];
  }
}
