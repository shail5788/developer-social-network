import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCurrentProfile,
  deleteMyAccount
} from "../../actions/profileAction";
import Spinner from "../common/Spinner";
import ProfileOperations from "./ProfileOperations";
import Experience from "./Experience";

class Dashboard extends Component {
  constructor() {
    super();
    this.deleteAccount = this.deleteAccount.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  deleteAccount(e) {
    e.preventDefault();
    this.props.deleteMyAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { loader, profile } = this.props.profile;
    let dashboardContent;
    if (profile === null || loader) {
      dashboardContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              welcome to
              <Link to={`/profile/${profile.handle}`}> {user.name}</Link>
            </p>
            <ProfileOperations />
            <Experience experience={profile.experience} />
            <div style={{ marginBottom: "60px" }}>
              <button onClick={this.deleteAccount} className="btn btn-danger">
                Delete My Account
              </button>
            </div>
          </div>
        );
      } else {
        dashboardContent = (
          <div>
            <p className="lead text-muted">welcome {user.name}</p>
            <p>You have not yet set your profile </p>
            <Link to="/create-profile" className="btn btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-4">{dashboardContent}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteMyAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteMyAccount }
)(Dashboard);
