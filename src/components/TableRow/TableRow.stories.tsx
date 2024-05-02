import React from 'react';
import TableRow from './TableRow.jsx';

export default {
  title: 'Components/TableRow', 
  component: TableRow,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <TableRow></TableRow>
  );
}