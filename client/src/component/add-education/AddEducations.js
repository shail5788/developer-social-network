import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addEducation } from "../../actions/profileAction";
// import SelectListGroup from "../common/SelectListGroup";

class AddEducations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      fieldofstudy: "",
      to: "",
      from: "",
      current: false,
      description: "",
      disabled: false,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProp) {
    this.setState({ errors: nextProp.errors });
  }
  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };
    this.props.addEducation(eduData, this.props.history);

    console.log("submitted");
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="section add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Your Experience</h1>
              <p className="lead text-center">
                Add any developer/programming positions that you have had in the
                past
              </p>
              <small className="d-block pb-3">* = required field</small>

              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  type="text"
                  placeholder="*School or Bootcamp"
                  name="school"
                  onChange={this.onChange}
                  value={this.state.school}
                  error={errors.school}
                />
                <TextFieldGroup
                  type="text"
                  placeholder="Degree or Certificate"
                  name="degree"
                  onChange={this.onChange}
                  value={this.state.degree}
                  error={errors.degree}
                />
                <TextFieldGroup
                  type="text"
                  placeholder="Field of Study"
                  name="fieldofstudy"
                  onChange={this.onChange}
                  value={this.state.fieldofstudy}
                  error={errors.fieldofstudy}
                />
                <TextFieldGroup
                  type="date"
                  placeholder="From"
                  name="from"
                  onChange={this.onChange}
                  value={this.state.from}
                  error={errors.from}
                />
                <TextFieldGroup
                  type="date"
                  placeholder="To"
                  name="to"
                  onChange={this.onChange}
                  value={this.state.to}
                />

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="current"
                    value=""
                    id="current"
                  />
                  <label className="form-check-label">Current Job</label>
                </div>
                <div className="form-group">
                  <TextAreaFieldGroup
                    placeholder="Description"
                    name="description"
                    onChange={this.onChange}
                    value={this.state.description}
                  />
                  <small className="form-text text-muted">
                    Some of your responsabilities, etc
                  </small>
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AddEducations.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const matStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(
  matStateToProps,
  { addEducation }
)(withRouter(AddEducations));
