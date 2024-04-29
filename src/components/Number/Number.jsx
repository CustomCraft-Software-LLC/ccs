import * as React from 'react';
import './Number.css';
import PropTypes from 'prop-types';

export default function Number({ number, color }) {
  const style = {
    color: color,
  }

  return (
    <p className="number" style={style}>{number}</p>
  );
};

Number.propTypes = {
  color: PropTypes.string,
  number: PropTypes.number.isRequired,
}

Number.defaultProps = {
  color: '#bd5519',
}
