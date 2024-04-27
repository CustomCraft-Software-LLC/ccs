import * as React from 'react';
import './SidebarItem.css';
import PropTypes from 'prop-types';

export default function SidebarItem({ to, ...props }) {
  return (
    <li>
      <a 
          href={to}
          className="SidebarItem"
          {...props}
      />
    </li>
  );
};

SidebarItem.propTypes = {
  
}

SidebarItem.defaultProps = {
  
}