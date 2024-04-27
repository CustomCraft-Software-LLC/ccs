import * as React from 'react';
import Box  from '../Box/Box';
import './Widget.css';
import PropTypes from 'prop-types';

export default function SidebarItem({ title, children }) {
  return (
    <Box bRad="15px" className="Widget">
        <h3>{title}</h3>
        {children}
    </Box>
  );
};

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
}

SidebarItem.defaultProps = {
  title: 'Title',
}