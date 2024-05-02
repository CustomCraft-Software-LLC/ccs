import React from 'react';
import TableHead from './TableHead.jsx';

export default {
  title: 'Components/TableHead', 
  component: TableHead,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <TableHead></TableHead>
  );
}