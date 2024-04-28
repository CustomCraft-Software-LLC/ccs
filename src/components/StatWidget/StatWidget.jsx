import React from 'react';
import PropTypes from 'prop-types';
import './StatWidget.css';

export default function StatWidget({ title, children}) { 
  return ( 
    <Box>
      <Row>
        <h5>{title}</h5>
      </Row>
      <Row>
        {num ? ( 
          <Number />
        ) : ( 
          <Percentage /> 
        )};
      </Row>
    </Box>
  );
}

StatWidget.propTypes = {};

StatWidget.defaultProps = {};
