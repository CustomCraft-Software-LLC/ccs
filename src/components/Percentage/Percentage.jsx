import React from 'react';
import PropTypes from 'prop-types';
import './Percentage.css';

export default function Percentage({children}) { 
  return ( 
    <Container>
      <Row>
        <p></p>
      </Row>
      <Row>
        <Bar />
      </Row>
    </Container>
  );
}

Percentage.propTypes = {};

Percentage.defaultProps = {};

