import * as React from 'react';
import './Box.css';
import PropTypes from 'prop-types';

export default function Box({ bgColor, bRad, color, children }) {
  const style = {
    backgroundColor: bgColor,
    borderRadius: bRad,
    color: color,
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

Box.propTypes = {
  bgColor: PropTypes.string,
  bRad: PropTypes.string,
  color: PropTypes.string,
}

Box.defaultProps = {
  bgColor: '#ffffff',
  bRad: '5px',
  color: '#000000aa',
}