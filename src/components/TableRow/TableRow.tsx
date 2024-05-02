import React from 'react';
import PropTypes from 'prop-types';
import './TableRow.css';

const TableRow = ({children}) => { 
  const style = { 

  }

  return ( 
    <tr className="tableRow" style={style}>
      {children}
    </tr>
  );
}

TableRow.propTypes = {

}

TableRow.defaultProps = {

};

export default TableRow;