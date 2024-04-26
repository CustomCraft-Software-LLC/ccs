import React from 'react';
import styles from './Button.css';
import PropTypes from 'prop-types';

function Button({ label, ...props}) {
  return (
    <button 
        type="button" 
        className={styles.Button}
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

export default Button;