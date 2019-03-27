import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profileAction";
import PropTypes from "prop-types";
import EditModal from "../common/EditModal";

import Moment from "react-moment";

class Experience extends Component {
  constructor(...arg) {
    super(...arg);
    this.state = {
      experience: null,
      modalHeading: "Edit User Modal",
      modalShow: false
    };
  }
  onClick(id) {
    this.props.deleteExperience(id);
  }
  onEditClick(exp) {
    // console.log(exp);
    this.setState({ modalShow: true });
    this.setState({ experience: exp });
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    const { experience } = this.state;
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
            data-toggle="modal"
            data-target="#EditModel"
            onClick={this.onEditClick.bind(this, exp)}
          >
            Edit
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="experience">
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
        <EditModal
          experience={experience}
          modalHeading={this.state.modalHeading}
          show={this.state.modalShow}
          onHide={modalClose}
        />
        
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
