import * as React from 'react';
import './Listbox.css';
import PropTypes from 'prop-types';
import Box from '../Box/Box';

export default function Listbox({children}) {
  return (
    <Box bRad="20px">
      <select className="listBox">{children}</select>
    </Box>
  );
};

Listbox.propTypes = {
    
}

Listbox.defaultProps = {

}