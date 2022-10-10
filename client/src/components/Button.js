import React  from "react";
import PropTypes from "prop-types"

function Button(props) {
    const {
        eventName, nameClass, event, sbmit, formValid
    } = props;
    return (
        <button 
        type={eventName} 
        className={nameClass}
        onClick={sbmit}
        disabled={formValid}
        >
        {event}
      </button>
    );
}

Button.propTypes = {
    eventName: PropTypes.string,
    nameClass: PropTypes.string,
    event: PropTypes.string,
    sbmit: PropTypes.string,
    formValid: PropTypes.string
};

Button.defaultProps = {
    eventName: "",
    nameClass: "",
    event: "",
    sbmit: "",
    formValid: ""

}

export default Button