import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TableHead.css';

interface TableHeadProps { 
  cols: Array<T>;
  bgColor?: string;
  color?: string;
}

const TableHead: React.FC<TableHeadProps> = ({ cols, bgColor, color }) => { 
  const [head, setHead] = useState(cols);

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
  }, []);

  return ( 
    <tr>
      {head}
    </tr>
  );
}

TableHead.propTypes = {
  cols: PropTypes.object,
  bgColor: PropTypes.string,
  color: PropTypes.string,
}

TableHead.defaultProps = {
  cols: [],
  bgColor: 'rgb(0,0,0,0.8)',
  color: 'rgb(255,255,255,0.4)',
};

export default TableHead;