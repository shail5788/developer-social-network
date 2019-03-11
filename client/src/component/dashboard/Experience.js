import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Moment from "react-moment";

class Experience extends Component {
  render() {
    const experienceRow = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.title}</td>
        <td>{exp.company}</td>
        <td>{exp.location}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment>-{" "}
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mt-4">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Time</th>
              <th />
            </tr>
          </thead>
          <tbody>{experienceRow}</tbody>
        </table>
      </div>
    );
  }
}
export default connect(null)(withRouter(Experience));
