import * as React from 'react';
import './Sidebar.css';
import PropTypes from 'prop-types';

const Sidebar = ({ children }) => {
  return (
    <div className="sidebar">
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

export default Sidebar;