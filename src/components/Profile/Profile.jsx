import * as React from 'react';
import Box from '../Box/Box';
import PropTypes from 'prop-types';
import './Profile.css';

export default function Profile({ name, img, alt }) {
  return (
    <Box bRad="70%">
      <div className="profile" >
        <div>
          <img src={img} alt={alt} className="profile-img" />
        </div>
        <div>
          <h5 className="profile-h5">{name}</h5>
        </div>
      </div>
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