import React from 'react';
import PropTypes from 'prop-types';
import './TableCol.css';

const TableCol = ({children}) => { 
  return ( 
    <td className="tableCol">
      {children}
    </td>
  );
}

TableCol.propTypes = {

}

TableCol.defaultProps = {
  
};

export default TableCol;