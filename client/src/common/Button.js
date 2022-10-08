import React  from "react";
import PropTypes from "prop-types"

function Button(props) {
    const {
        eventName, nameClass, event, sbmit
    } = props;
    return (
        <button 
        type={eventName} 
        className={nameClass}
        onClick={sbmit}
        >
        {event}
      </button>
    );
}

Button.propTypes = {
    eventName: PropTypes.string,
    nameClass: PropTypes.string,
    event: PropTypes.string,
    sbmit: PropTypes.string
};

Button.defaultProps = {
    eventName: "",
    nameClass: "",
    event: "",
    sbmit: ""
}

export default Button