import * as React from 'react';
import styles from './Sidebar.css';
import PropTypes from 'prop-types';

export const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
  );
};

Sidebar.propTypes = {
  
}

Sidebar.defaultProps = {
  
}