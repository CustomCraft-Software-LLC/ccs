import * as React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export default function Button({ label, ...props}) {
  return (
    <button 
        type="button" 
        className="button"
        {...props}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onclick: PropTypes.func
}

Button.defaultProps = {
  onclick: undefined
}