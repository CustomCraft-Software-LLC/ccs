import * as React from 'react';
import styles from './Box.css';
import PropTypes from 'prop-types';

export default function Box({ children }) {
  return (
    <div className={styles.Box}>
        { children }
    </div>
  );
};

Box.propTypes = {
  
}

Box.defaultProps = {
  
}