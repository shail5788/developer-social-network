import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profileAction";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInput: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProp) {
    if (nextProp.errors) {
      this.setState({ errors: nextProp.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log("sumitted!");
    console.log(this.state);
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      tiwitter: this.state.twitter,
      facebook: this.state.facebook,
      youtube: this.state.youtube,
      linkedin: this.state.linkedin,
      instagram: this.state.instagram
    };
    this.props.createProfile(profileData, this.props.history);
  }
  render() {
    const { errors, displaySocialInput } = this.state;
    let socialInput;
    if (displaySocialInput) {
      socialInput = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <InputGroup
                placeholder="twitter profile url"
                name="twitter"
                icon="fab fa-twitter"
                onChange={this.onChange}
                value={this.state.twitter}
                errors={errors.twitter}
              />
            </div>
            <div className="col-md-6">
              <InputGroup
                placeholder="Facebook profile url"
                name="facebook"
                icon="fab fa-facebook"
                value={this.state.facebook}
                errors={errors.facebook}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <InputGroup
                placeholder="Linkedin profile url"
                name="linkedin"
                icon="fab fa-linkedin"
                onChange={this.onChange}
                value={this.state.linkedin}
                errors={errors.linkedin}
              />
            </div>
            <div className="col-md-6">
              <InputGroup
                placeholder="youtube profile url"
                name="youtube"
                icon="fab fa-youtube"
                onChange={this.onChange}
                value={this.state.youtube}
                errors={errors.youtube}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <InputGroup
                placeholder="Instagram profile url"
                name="instagram"
                icon="fab fa-instagram"
                onChange={this.onChange}
                value={this.state.instagram}
                errors={errors.instagram}
              />
            </div>
          </div>
        </div>
      );
    }
    const options = [
      { label: "Select professional status", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Senior Developer", value: "Junior Developer" },
      { label: "Manager", value: "Manager" },
      { label: "Stundent or Learning", value: "Student or Learning" },
      { label: "Instrunctor or Teacher", value: "Instructor or Teacher" },
      { label: "Intern", value: "Intern" },
      { label: "Other", value: "Other" }
    ];
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make profile stand out
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <TextFieldGroup
                      type="text"
                      name="handle"
                      placeholder="Handle"
                      value={this.state.handle}
                      onChange={this.onChange}
                      error={errors.handle}
                      info="A unique handle for your profile url name company or nickname"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <SelectListGroup
                      name="status"
                      placeholder="Status"
                      value={this.state.status}
                      onChange={this.onChange}
                      error={errors.status}
                      options={options}
                      info="A unique handle for your profile url name company nickname"
                    />
                  </div>
                  <div className="col-md-6">
                    <TextFieldGroup
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={this.state.company}
                      onChange={this.onChange}
                      error={errors.company}
                      info="could be it your own company or one who work for"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <TextFieldGroup
                      type="text"
                      name="website"
                      placeholder="Website"
                      value={this.state.website}
                      onChange={this.onChange}
                      error={errors.website}
                      info="could be it your own website or one who work for"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <TextFieldGroup
                      type="text"
                      name="location"
                      placeholder="Location"
                      value={this.state.location}
                      onChange={this.onChange}
                      error={errors.company}
                      info="city and state"
                    />
                  </div>
                  <div className="col-md-6">
                    <TextFieldGroup
                      type="text"
                      name="status"
                      placeholder="Status"
                      value={this.state.status}
                      onChange={this.onChange}
                      error={errors.status}
                      info="could be it your own website or one who work for"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <TextFieldGroup
                      type="text"
                      name="skills"
                      placeholder="Skills"
                      value={this.state.skills}
                      onChange={this.onChange}
                      error={errors.skills}
                      info="Please use comma seprated value"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <TextFieldGroup
                      type="text"
                      name="githubusername"
                      placeholder="Github Username"
                      value={this.state.githubusername}
                      onChange={this.onChange}
                      error={errors.githubusername}
                      info="Please enter your github username"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <TextAreaFieldGroup
                      type="text"
                      name="bio"
                      placeholder="Bio"
                      value={this.state.bio}
                      onChange={this.onChange}
                      error={errors.boi}
                      info="Write some about your self"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <button
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInput: !prevState.displaySocialInput
                      }));
                    }}
                    type="button"
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInput}
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
CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProp = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(
  mapStateToProp,
  { createProfile }
)(withRouter(CreateProfile));
