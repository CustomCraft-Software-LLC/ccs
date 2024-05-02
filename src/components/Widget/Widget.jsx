import * as React from 'react';
import Box  from '../Box/Box.jsx';
import './Widget.css';
import PropTypes from 'prop-types';


const Widget = ({ title, children }) => {
  return (
    <div>
      <Box>
        <div>
          <div>
            <h3>{title}</h3>
          </div>
        </div>
        <div>
          <div>
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

export default Widget;