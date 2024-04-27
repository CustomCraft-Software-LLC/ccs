import * as React from 'react';
import styles from './SidebarLink.css';
import PropTypes from 'prop-types';

export default function SidebarLink({ to, ...props }) {
  return (
    <a 
        href={to}
        className={styles.SidebarLink} 
        {...props}
    />
  );
};

SidebarLink.propTypes = {
  
}

SidebarLink.defaultProps = {
  
}