import React  from "react";
import PropTypes from "prop-types"

function Button(props) {
    const {
        eventName, className, event, onClick, disabled
    } = props;
    return (
        <button 
        type={eventName} 
        className={className}
        onClick={onClick}
        disabled={disabled}
        >
        {event}
      </button>
    );
}

Button.propTypes = {
    eventName: PropTypes.string,
    className: PropTypes.string,
    event: PropTypes.string,
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

Button.defaultProps = {
    eventName: "",
    className: "",
    event: "",
    onClick: "",
    disabled: ""

}

export default Button