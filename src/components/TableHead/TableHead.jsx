import React from 'react';
import PropTypes from 'prop-types';
import './TableHead.css';

const TableHead = ({colsName, children}) => { 
  const [head, setHead] = useState(colsName);

  for (let i = 0; i < colsName.length; i++) {
    
  }

  return ( 
    <th>
      {children}
    </th>
  );
}

TableHead.propTypes = {

}

TableHead.defaultProps = {
  
};

export default TableHead;