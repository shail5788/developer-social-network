import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profileAction";
import PropTypes from "prop-types";
import Moment from "react-moment";
import EditModal from "../common/EditModal";
class Educations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: null,
      modalHeading: "Edit Mode for Education",
      modalShow: false
    };
  }

  onClick(id) {
    this.props.deleteEducation(id);
  }

  onClickEdit(edu) {
    this.setState({ modalShow: true });
    this.setState({ educations: edu }, () => {
      // console.log(this.state.eductions);
    });
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    const { educations } = this.state;
    const educationRow = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>{edu.fieldofstudy}</td>
        <td>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment>-{" "}
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={this.onClick.bind(this, edu._id)}
          >
            Delete
          </button>{" "}
          <button
            className="btn btn-info"
            onClick={this.onClickEdit.bind(this, edu)}
          >
            Edit
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="row">
        <div className="col-12">
          <h4 className="mt-4">Experience Credentials</h4>
          <table className="table">
            <thead>
              <tr>
                <th>School</th>
                <th>Degree</th>
                <th>Field Of Study</th>
                <th>Time</th>
                <th />
              </tr>
            </thead>
            <tbody>{educationRow}</tbody>
          </table>
        </div>
        <EditModal
          educations={educations}
          modalHeading={this.state.modalHeading}
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </div>
    );
  }
}
Educations.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};
export default connect(
  null,
  { deleteEducation }
)(Educations);
