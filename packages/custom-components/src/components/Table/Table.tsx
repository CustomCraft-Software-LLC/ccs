import React from 'react';
import './Table.css';

interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => (
  <table className="table">
    {children}
  </table>
);

export default Table;