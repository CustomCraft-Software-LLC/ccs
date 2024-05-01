import * as React from 'react';
import './SidebarItem.css';
import PropTypes from 'prop-types';

const SidebarItem = ({ to, ...props }) => {
  return (
    <li>
      <a 
          href={to}
          className="sidebarItem"
          {...props}
      />
    </li>
  );
};

SidebarItem.propTypes = {
  
}

SidebarItem.defaultProps = {
  
}

export default SidebarItem;