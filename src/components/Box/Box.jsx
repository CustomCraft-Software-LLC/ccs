import * as React from 'react';
import './Box.css';
import PropTypes from 'prop-types';

export default function Box({ children }) {
  return (
    <div className="Box">
        { children }
    </div>
  );
};

Box.propTypes = {
  
}

Box.defaultProps = {
  
}