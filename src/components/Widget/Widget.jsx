import * as React from 'react';
import Box  from '../Box/Box';
import './Widget.css';
import Row from '../Row/Row';
import PropTypes from 'prop-types';

export default function Widget({ title, children }) {
  return (
    <Container>
      <Row>
        <Box bRad="15px" className="widget">
          <h3>{title}</h3>
          {children}
        </Box>
      </Row>
    </Container>
  );
};

Widget.propTypes = {
  title: PropTypes.string.isRequired,
}

Widget.defaultProps = {
  title: 'Title',
}