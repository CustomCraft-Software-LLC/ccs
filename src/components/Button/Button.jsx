import * as React from 'react';
import styles from './Button.css';
import PropTypes from 'prop-types';

export default function Button({ label, ...props}) {
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