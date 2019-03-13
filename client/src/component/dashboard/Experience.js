import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profileAction";
import PropTypes from "prop-types";

import Moment from "react-moment";

class Experience extends Component {
  onClick(id) {
    this.props.deleteExperience(id);
  }
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
          <button
            className="btn btn-danger"
            onClick={this.onClick.bind(this, exp._id)}
          >
            Delete
          </button>{" "}
          <button
            className="btn btn-info"
            onClick={this.onClick.bind(this, exp._id)}
          >
            Edit
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="row">
        <div className="col-md-12">
          <h4>Experience Credentials</h4>
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
      </div>
    );
  }
}
Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};
export default connect(
  null,
  { deleteExperience }
)(Experience);
