import * as React from 'react';
import './Dropdown.css';
import PropTypes from 'prop-types';
import Box from '../Box/Box';

export default function Dropdown() {
  return (
    <Box >
      <select className="dropdown" id="cars" name="cars"></select>
    </Box>
  );
};

Dropdown.propTypes = {
    
}

Dropdown.defaultProps = {

}