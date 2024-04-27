import * as React from 'react';
import './SidebarLink.css';
import PropTypes from 'prop-types';

export default function SidebarLink({ to, ...props }) {
  return (
    <a 
        href={to}
        className="SidebarLink"
        {...props}
    />
  );
};

SidebarLink.propTypes = {
  
}

SidebarLink.defaultProps = {
  
}