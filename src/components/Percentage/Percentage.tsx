import * as React from 'react';
import PropTypes from 'prop-types';
import './Percentage.css';
import Bar from '../Bar/Bar.jsx';

const Percentage = ({ sign, percent }) => { 
  const s = sign ? '+' : '- ';
  const p = s + percent.toFixed(1) + '%';
  return ( 
    <div>
      <div>
        <p className="percentage">{p}</p>
      </div>
      <div>
        <Bar percent={percent} />
      </div>
    </div>
  );
}

Percentage.propTypes = {
  sign: PropTypes.bool.isRequired,
  percent: PropTypes.number.isRequired,
};

Percentage.defaultProps = {
  
};

export default Percentage;