import React  from "react";
import PropTypes from "prop-types"

function Input(props) {
    const {
        name, valueName, eventName
    } = props;
    return (
        <div className="field">
            <label className="label">{name}</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={valueName}
                onChange={eventName}
                placeholder={name}
              />
            </div>
          </div>
    );
}

Input.propTypes = {
    name: PropTypes.string,
    valueName: PropTypes.string,
    eventName: PropTypes.string
};

Input.defaultProps = {
    name: "",
    valueName: "",
    eventName: ""
}

export default Input