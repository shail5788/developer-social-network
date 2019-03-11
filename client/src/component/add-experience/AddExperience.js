import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addExperience } from "../../actions/profileAction";
// import SelectListGroup from "../common/SelectListGroup";

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      company: "",
      location: "",
      to: "",
      from: "",
      current: false,
      description: "",
      disabled: false,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }
  componentWillReceiveProps(nextProp) {
    if (nextProp.errors) {
      this.setState({ errors: nextProp.errors });
    }
  }
  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  onCheck(e) {
    this.setState({
      current: !this.state.current,
      disabled: !this.state.disabled
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const expData = {
      title: this.state.title,
      company: this.state.company,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      discription: this.state.description
    };
    console.log(expData);
    this.props.addExperience(expData, this.props.history);
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
                  placeholder="* Job Title"
                  name="title"
                  onChange={this.onChange}
                  value={this.state.title}
                  error={errors.title}
                />
                <TextFieldGroup
                  type="text"
                  placeholder="Company"
                  name="company"
                  onChange={this.onChange}
                  value={this.state.company}
                  error={errors.company}
                />
                <TextFieldGroup
                  type="text"
                  placeholder="Location"
                  name="location"
                  onChange={this.onChange}
                  value={this.state.location}
                />
                <h6>From Date</h6>
                <TextFieldGroup
                  type="date"
                  placeholder="From"
                  name="from"
                  onChange={this.onChange}
                  value={this.state.from}
                  error={errors.from}
                />
                <h6>To Date</h6>
                <TextFieldGroup
                  type="date"
                  placeholder="To"
                  name="to"
                  onChange={this.onChange}
                  value={this.state.to}
                  disabled={this.state.disabled ? "disabled" : ""}
                />

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                    // onChange={this.onChange}
                    id="current"
                  />
                  <label htmlFor="current" className="form-check-label">
                    Current Job
                  </label>
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
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const matStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(
  matStateToProps,
  { addExperience }
)(withRouter(AddExperience));
