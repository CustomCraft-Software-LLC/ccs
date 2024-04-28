import * as React from 'react';
import './Number.css';
import PropTypes from 'prop-types';

export default function Number({ bgColor, bRad, color, padding, children }) {
  const style = {
    backgroundColor: bgColor,
    borderRadius: bRad,
    color: color,
    padding: padding
  }

  return (
    <div 
      className="box"
      style={style}
    >
        { children }
    </div>
  );
};

Number.propTypes = {
  bgColor: PropTypes.string,
  bRad: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.string,
}

Number.defaultProps = {
  bgColor: '#ffffff',
  bRad: '5px',
  color: '#000000',
  padding: '0',
}
