import React from 'react';
import PropTypes from 'prop-types';
import './StatWidget.css';
import Box from '../Box/Box.tsx';
import Number from '../Number/Number.tsx';
import Percentage from '../Percentage/Percentage.tsx';

const StatWidget = ({ isNum, title, stat }) => { 
  return ( 
    <Box padding="0px" className="statWidget">
      <div>
          <div>
            <h3>{title}</h3>
          </div>
          <div>
            {isNum ? ( 
              <Number number={stat} />
            ) : ( 
              <Percentage sign={true} percent={stat} /> 
            )}
          </div>
      </div>
    </Box>
  );
}

StatWidget.propTypes = {
  isNum: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

StatWidget.defaultProps = {
  title: '',
};

export default StatWidget;