import * as React from 'react';
import './Listbox.css';
import PropTypes from 'prop-types';
import Box from '../Box/Box';

const Listbox = ({children}) => {
  return (
    <Box bRad="50px">
      <select className="listBox">{children}</select>
    </Box>
  );
};

Listbox.propTypes = {
    
}

Listbox.defaultProps = {

}

export default Listbox;