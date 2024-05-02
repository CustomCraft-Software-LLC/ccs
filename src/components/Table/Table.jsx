import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

const Table = ({children}) => { 
  return ( 
    <table>
      {children}
    </table>
  );
}

Table.propTypes = {

}

Table.defaultProps = {
  
};

export default Table;