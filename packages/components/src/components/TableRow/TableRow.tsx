import React from 'react';
import './TableRow.css';

interface TableRowProps { 
  children?: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({children}) => { 
  const style: React.CSSProperties = { 

  }

  return ( 
    <tr className="tableRow" style={style}>
      {children}
    </tr>
  );
}

export default TableRow;