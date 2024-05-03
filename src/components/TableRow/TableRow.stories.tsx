import React from 'react';
import TableRow from './TableRow.tsx';

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