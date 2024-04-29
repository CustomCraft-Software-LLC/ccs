import React from 'react';
import PropTypes from 'prop-types';
import './StatWidget.css';
import Box from '../Box/Box';
import Row from '../Row/Row';
import Number from '../Number/Number';
import Percentage from '../Percentage/Percentage';

export default function StatWidget({ isNum, title, stat }) { 
  return ( 
    <Box>
      <Row>
        <h5>{title}</h5>
      </Row>
      <Row>
        {isNum ? ( 
          <Number number={stat} />
        ) : ( 
          <Percentage sign={true} percent={stat} /> 
        )};
      </Row>
    </Box>
  );
}

StatWidget.propTypes = {
  isNum: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

StatWidget.defaultProps = {
  title: '',
};
