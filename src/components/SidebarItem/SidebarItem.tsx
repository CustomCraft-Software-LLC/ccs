import * as React from 'react';
import './SidebarItem.css';
import PropTypes from 'prop-types';

const SidebarItem = ({ bgColor, to, ...props }) => {
  const style = {
    backgroundColor: bgColor,
  }

  return (
    <li>
      <a 
          href={to}
          className="sidebarItem"
          style={style}
          {...props}
      />
    </li>
  );
};

SidebarItem.propTypes = {
  bgColor: PropTypes.string,
}

SidebarItem.defaultProps = {
  bgColor: '#ffffff',
}

export default SidebarItem;