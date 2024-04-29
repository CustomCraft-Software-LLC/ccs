import React from 'react';
import PropTypes from 'prop-types';
import './StatWidget.css';
import Box from '../Box/Box';
import Row from '../Row/Row';
import Number from '../Number/Number';
import Percentage from '../Percentage/Percentage';
import Container from '../Container/Container';

export default function StatWidget({ isNum, title, stat }) { 
  return ( 
    <Box padding="0px" className="statWidget">
      <Container>
          <Row>
            <h3>{title}</h3>
          </Row>
          <Row>
            {isNum ? ( 
              <Number number={stat} />
            ) : ( 
              <Percentage sign={true} percent={stat} /> 
            )}
          </Row>
      </Container>
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
