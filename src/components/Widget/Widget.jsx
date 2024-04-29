import * as React from 'react';
import Box  from '../Box/Box';
import './Widget.css';
import PropTypes from 'prop-types';


export default function Widget({ title, children }) {
  return (
    <div className="container">
      <Box className="widget">
        <div className="row">
          <div className="col">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {children}
          </div>
        </div>
      </Box>
    </div>
  );
};

Widget.propTypes = {
  title: PropTypes.string.isRequired,
}

Widget.defaultProps = {
  title: 'Title',
}