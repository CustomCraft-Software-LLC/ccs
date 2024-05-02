import React from 'react';
import PropTypes from 'prop-types';
import './TableCol.css';

const TableCol = ({children}) => { 
  return ( 
    <td>
      {children}
    </td>
  );
}

TableCol.propTypes = {

}

TableCol.defaultProps = {
  
};

export default TableCol;