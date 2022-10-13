import React  from "react";
import PropTypes from "prop-types"

function Button(props) {
    const {
        eventName, nameClass, event, onClick, formValid
    } = props;
    return (
        <button 
        type={eventName} 
        className={nameClass}
        onClick={onClick}
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
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    formValid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

Button.defaultProps = {
    eventName: "",
    nameClass: "",
    event: "",
    onClick: "",
    formValid: ""

}

export default Button