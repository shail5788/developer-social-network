import React, { Component } from "react";
import { Modal, Button, FormGroup } from "react-bootstrap";
import TextFieldGroup from "./TextFieldGroup";
import TextAreaFieldGroup from "./TextAreaFieldGroup";
import { updateEexperience } from "../../actions/profileAction";
import DatePicker from "react-datepicker";
class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: null,
      educations: null,
      disabled: false,
      modalType: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.submitExperience = this.submitExperience.bind(this);
    this.submitEducation = this.submitEducation.bind(this);
  }
  componentWillReceiveProps(nextProp) {
    this.setState({ experience: nextProp.experience });
    this.setState({ modalType: nextProp.modalHeading });
    this.setState({ educations: nextProp.educations });
    console.log(this.state.educations);
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
  submitExperience(e) {
    e.preventDefault();
    console.log("submit experience");
  }

  submitEducation(e) {
    e.preventDefault();
    console.log("submit education");
  }

  render() {
    let { experience } = this.state;
    let { educations } = this.state;
    const editForm = experience ? (
      <form onSubmit={this.submitExperience}>
        <TextFieldGroup
          type="text"
          placeholder="* Job Title"
          name="title"
          onChange={this.onChange}
          value={experience.title}
          // error={errors.title}
        />
        <TextFieldGroup
          type="text"
          placeholder="Company"
          name="company"
          onChange={this.onChange}
          value={experience.company}
          // error={errors.company}
        />
        <TextFieldGroup
          type="text"
          placeholder="Location"
          name="location"
          onChange={this.onChange}
          value={experience.location}
        />

        <div className="row">
          <div className="col-md-6">
            <h6>From Date</h6>

            <DatePicker
              className="form-control"
              dateFormat="yyyy/MM/dd"
              selected={experience.from}
              onChange={this.onChange}
            />
          </div>
          <div className="col-md-6">
            <h6>To Date</h6>
            <DatePicker
              className="form-control"
              dateFormat="yyyy/MM/dd"
              selected={experience.to}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>
        </div>

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
            value={experience.description}
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
    ) : educations ? (
      <form onSubmit={this.submitEducation}>
        <TextFieldGroup
          type="text"
          placeholder="* School"
          name="school"
          onChange={this.onChange}
          value={educations.school}
          // error={errors.title}
        />
        <TextFieldGroup
          type="text"
          placeholder="Degree"
          name="degree"
          onChange={this.onChange}
          value={educations.degree}
          // error={errors.company}
        />
        <TextFieldGroup
          type="text"
          placeholder="Field of Study"
          name="fieldofstudy"
          onChange={this.onChange}
          value={educations.fieldofstudy}
        />

        <div className="row">
          <div className="col-md-6">
            <h6>From Date</h6>

            <DatePicker
              className="form-control"
              dateFormat="yyyy/MM/dd"
              selected={educations.from}
              onChange={this.onChange}
            />
          </div>
          <div className="col-md-6">
            <h6>To Date</h6>
            <DatePicker
              className="form-control"
              dateFormat="yyyy/MM/dd"
              selected={educations.to}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>
        </div>

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
            value={educations.description}
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
    ) : (
      ""
    );
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.state.modalType}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{editForm}</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default EditModal;
