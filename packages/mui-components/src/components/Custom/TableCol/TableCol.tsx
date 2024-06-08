import React from 'react';
import './TableCol.css';

interface TableColProps { 
  children?: React.ReactNode;
}

const TableCol: React.FC<TableColProps> = ({children}) => { 
  return ( 
    <td className="tableCol">
      {children}
    </td>
  );
}

export default TableCol;