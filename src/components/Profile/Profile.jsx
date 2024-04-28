import * as React from 'react';
import Box from '../Box/Box';
import Row from '../Row/Row';
import Col from '../Col/Col';
import PropTypes from 'prop-types';
import './Profile.css';

export default function Profile({ name, img, alt }) {
  return (
    <Box className="profile" bRad="100px">
      <Row>
        <Col>
          <img src={img} alt={alt} className="profile-img" />
        </Col>
        <Col>
          <h5 className="profile-h5">{name}</h5>
        </Col>
      </Row>
    </Box>
  );
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
    alt: PropTypes.string,
}

// add source path default
Profile.defaultProps = {
    name: 'user',
    img: '',
    alt: '',
}