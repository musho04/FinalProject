import React  from "react";
import PropTypes from "prop-types"

function Entrance(props) {
    const {
        name, valueName, eventName, valErrName
    } = props;
    console.log(name);
    console.log("valErrName===========", valErrName);

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
              {valErrName ? <small style={{color: "red"}}>{valErrName}</small> : null}
            </div>
          </div>
    );
}

Entrance.propTypes = {
    name: PropTypes.string,
    valueName: PropTypes.string,
    eventName: PropTypes.string,
    valErrName: PropTypes.string
};

Entrance.defaultProps = {
    name: "",
    valueName: "",
    eventName: "",
    valErrName: ""
}

export default Entrance