import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
  }
  render() {
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make profile stand out
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};
const mapStateToProp = state => ({
  profile: state.profile,
  error: state.error
});
export default connect()(CreateProfile);
