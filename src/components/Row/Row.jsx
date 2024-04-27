import React from 'react';
import PropTypes from 'prop-types';
import './Row.css';

export default function Row({children}) { 
  return ( 
    <div className="row">{children}</div>
  );
}

Row.propTypes = {};

Row.defaultProps = {};

