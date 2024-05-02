import React from 'react';
import PropTypes from 'prop-types';
import './TableRow.css';

const TableRow = ({children}) => { 
  return ( 
    <tr>
      {children}
    </tr>
  );
}

TableRow.propTypes = {

}

TableRow.defaultProps = {
  
};

export default TableRow;