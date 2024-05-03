import * as React from 'react';
import './Number.css';
import PropTypes from 'prop-types';

interface NumberProps { 
  num: number;
  color?: string;
}

const Number: React.FC<NumberProps> = ({ num, color = '#bd5519' }) => {
  const style: React.CSSProperties = {
    color: color,
  }

  return (
    <p className="number" style={style}>{num}</p>
  );
};

export default Number;
