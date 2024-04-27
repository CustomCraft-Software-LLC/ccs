import * as React from 'react';
import './Sidebar.css';
import PropTypes from 'prop-types';

export default function Sidebar({ children }) {
  return (
    <div className="Sidebar">
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