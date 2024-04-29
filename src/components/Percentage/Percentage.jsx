import * as React from 'react';
import PropTypes from 'prop-types';
import './Percentage.css';
import Bar from '../Bar/Bar';
import Row from '../Row/Row';
import Container from '../Container/Container';

export default function Percentage({ sign, percent }) { 
  const s = sign ? '+' : '- ';
  const p = s + percent.toFixed(1) + '%';
  return ( 
    <Container>
      <Row>
        <p className="percentage">{p}</p>
      </Row>
      <Row>
        <Bar percent={percent} />
      </Row>
    </Container>
  );
}

Percentage.propTypes = {
  sign: PropTypes.bool.isRequired,
  percent: PropTypes.number.isRequired,
};

Percentage.defaultProps = {
  
};

