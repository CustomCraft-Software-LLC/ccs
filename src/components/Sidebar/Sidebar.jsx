import * as React from 'react';
import styles from './Sidebar.css';
import PropTypes from 'prop-types';

export const Sidebar = ({ children }) => {
  return (
    <div className={styles.Sidebar}>
        <ul>
            {children}
        </ul>
    </div>
  );
};

Sidebar.propTypes = {
  
}

Sidebar.defaultProps = {
  
}