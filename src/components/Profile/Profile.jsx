import * as React from 'react';
import Box from '../Box/Box';
import './Profile.css';
import PropTypes from 'prop-types';

export default function Profile({ name, img, alt }) {
  return (
    <Box className="profile" bRad="50px">
      <div>
        <div>

        </div>
        <div>
          
        </div>
      </div>
      <h5 className="profile-h5">{name}</h5>
      <img src={img} alt={alt} className="profile-img" />
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