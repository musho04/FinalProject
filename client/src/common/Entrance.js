import React  from "react";
import PropTypes from "prop-types"

function Entrance(props) {
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

Entrance.propTypes = {
    name: PropTypes.string,
    valueName: PropTypes.string,
    eventName: PropTypes.string
};

Entrance.defaultProps = {
    name: "",
    valueName: "",
    eventName: ""
}

export default Entrance