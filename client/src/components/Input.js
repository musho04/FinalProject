import React from "react";
import PropTypes from "prop-types"
// import { string } from "yup";

function Input(props) {
  const {
    name, valueName, eventName, valErrName, touch, onBlur
  } = props;
  console.log(name);
  console.log("valErrName===========", valErrName);
  console.log("touch===========", touch);

  return (
    <div className="field">
      <label className="label">{name}</label>
      <div className="control">
        <input
          type="text"
          className="input"
          value={valueName}
          onChange={eventName}
          name={name}
          placeholder={name}
          onBlur={(e) => onBlur(e)}

        />
        {valErrName && touch ? <small style={{ color: "red" }}>{valErrName}</small> : null}
        {/* {touch ? <small style={{color: "red"}}>{touch}</small> : null} */}
      </div>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  valueName: PropTypes.string,
  eventName: PropTypes.string,
  valErrName: PropTypes.string,
  touch: PropTypes.string
};

Input.defaultProps = {
  name: "",
  valueName: "",
  eventName: "",
  valErrName: "",
  touch: ""
}

export default Input