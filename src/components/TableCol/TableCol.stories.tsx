import React from 'react';
import TableCol from './TableCol.jsx';

export default {
  title: 'Components/TableCol', 
  component: TableCol,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <TableCol></TableCol>
  );
}