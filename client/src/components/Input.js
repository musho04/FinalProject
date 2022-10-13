import React from "react";
import PropTypes from "prop-types"

function Input(props) {
  const {
    name, value, event, error, touched, onBlur
  } = props;

  return (
    <div className="field">
      <label className="label">{name}</label>
      <div className="control">
        <input
          type="text"
          className="input"
          value={value}
          onChange={event}
          name={name}
          placeholder={name}
          onBlur={(e) => onBlur(e)}

        />
        {error && touched ? <small style={{ color: "red" }}>{error}</small> : null}
      </div>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  event: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

Input.defaultProps = {
  name: "",
  value: "",
  event: "",
  error: "",
  touched: ""
}

export default Input