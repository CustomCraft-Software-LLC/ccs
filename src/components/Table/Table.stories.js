import React from 'react';
import Table from './Table.jsx';

export default {
  title: 'Components/Table', 
  component: Table,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <Table></Table>
  );
}