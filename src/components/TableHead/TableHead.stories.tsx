import React from 'react';
import TableHead from './TableHead.tsx';

export default {
  title: 'Components/TableHead', 
  component: TableHead,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <TableHead cols={["1", "2", "3", "4"]}></TableHead>
  );
}