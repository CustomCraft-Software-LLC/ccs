import React from 'react';
import { Meta } from '@storybook/react';
import TableCol from './TableCol.tsx';

export default {
  title: 'Components/TableCol', 
  component: TableCol,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <TableCol></TableCol>
  );
}