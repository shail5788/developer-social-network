import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import TextFieldGroup from "./TextFieldGroup";
import TextAreaFieldGroup from "./TextAreaFieldGroup";
import DatePicker from "react-datepicker";
class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: null,
      disabled: false,
      modalType: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }
  componentWillReceiveProps(nextProp) {
    this.setState({ experience: nextProp.experience });
    this.setState({ modalType: nextProp.modalHeading });
    console.log(this.state.experience);
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
  render() {
    let { experience } = this.state;
    const editForm = experience ? (
      <form>
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
        <h6>From Date</h6>

        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={experience.form}
          onChange={this.onChange}
        />
        <h6>To Date</h6>
        <TextFieldGroup
          type="date"
          placeholder="To"
          name="to"
          onChange={this.onChange}
          value={experience.to}
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
