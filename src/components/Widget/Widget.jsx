import * as React from 'react';
import Box  from '../Box/Box';
import './Widget.css';
import PropTypes from 'prop-types';

export default function Widget({ title, children }) {
  return (
    <Box bRad="15px" className="widget">
        <h3>{title}</h3>
        {children}
    </Box>
  );
};

Widget.propTypes = {
  title: PropTypes.string.isRequired,
}

Widget.defaultProps = {
  title: 'Title',
}