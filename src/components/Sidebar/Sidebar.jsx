import * as React from 'react';
import './Sidebar.css';
import PropTypes from 'prop-types';

const Sidebar = ({ shadowColor, bgColor, children }) => {
  const style = {
    backgroundColor: bgColor,
    boxShadow: `0 4px 8px ${shadowColor}`
  }

  return (
    <div className="sidebar" style={style}>
        <ul>
            {children}
        </ul>
    </div>
  );
};

Sidebar.propTypes = {
  shadowColor: PropTypes.string,
  bgColor: PropTypes.string,
}

Sidebar.defaultProps = {
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  bgColor: '#ffffff',
}

export default Sidebar;