import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
class Modal extends Component {
  constructor() {
    super();
    this.state = {
      experience: null
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    console.log(
      "componentWillReceiveProps -> this.props.experienceInfo ->",
      this.props.experienceInfo
    );
    console.log("componentWillReceiveProps -> nextProps ->", nextProps);
    if (nextProps.experienceInfo !== null) {
      this.setState({ experience: nextProps.experienceInfo });
    }
  }
  onChange(e) {}
  onSubmit(e) {
    console.log("submitted");
  }
  render() {
    const { experience } = this.state;
    const expForm =
      experience != null ? (
        <form onSubmit={this.onSubmit}>
          <div className="modal-body">
            <TextFieldGroup
              type="text"
              placeholder="* Job Title"
              name="title"
              onChange={this.onChange}
              value={experience.title}
              //   error={errors.title}
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
            <TextFieldGroup
              type="date"
              placeholder="From"
              name="from"
              onChange={this.onChange}
              value={experience.from}
              // error={errors.from}
            />
            <h6>To Date</h6>
            <TextFieldGroup
              type="date"
              placeholder="To"
              name="to"
              onChange={this.onChange}
              value={experience.to}
              //disabled={this.state.disabled ? "disabled" : ""}
            />

            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                name="current"
                value={experience.current}
                //checked={this.state.current}
                //onChange={this.onCheck}
                onChange={this.onChange}
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
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <input type="submit" value="Save Change" className="btn btn-info" />
          </div>
        </form>
      ) : (
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <input type="submit" value="Save Change" className="btn btn-info" />
        </div>
      );
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModalCenter"
          //   tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {expForm}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
