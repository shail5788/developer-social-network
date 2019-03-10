import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputGroup = ({
  name,
  placeholder,
  type,
  value,
  error,
  icon,
  onChange
}) => {
  return (
    <div className="form-group">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <input
        className={classnames("form-control", {
          "is-invalid": error
        })}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
InputGroup.defaultProps = {
  type: "text"
};
InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
export default InputGroup;
