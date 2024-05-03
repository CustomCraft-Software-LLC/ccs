import React, { useState, useEffect } from 'react';
import './TableHead.css';

interface TableHeadProps { 
  cols: Array<string>;
  bgColor?: string;
  color?: string;
}

const TableHead: React.FC<TableHeadProps> = ({ cols, bgColor = 'rgba(0,0,0,0.8)', color = 'rgba(255,255,255,0.4)' }) => { 
  const [head, setHead] = useState<JSX.Element[]>([]);

  const style: React.CSSProperties = { 
    backgroundColor: bgColor,
    color: color,
    border: '2px solid rgb(0,0,0,0.5)',
  }

  useEffect(() => { 
    const tableHead: JSX.Element[] = [];
    for (let i = 0; i < cols.length; i++) {
      tableHead.push(
        <th className="tableHead" style={style}>
          {cols[i]}
        </th>
      );
    }
    setHead(tableHead);
  }, [cols, style]);

  return ( 
    <tr>
      {head}
    </tr>
  );
}

export default TableHead;