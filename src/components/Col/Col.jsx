import React from 'react';
import PropTypes from 'prop-types';
import './Col.css';

export default function Col({children}) { 
  return ( 
    <div className="col">{children}</div>
  );
}

Col.propTypes = {};

Col.defaultProps = {};