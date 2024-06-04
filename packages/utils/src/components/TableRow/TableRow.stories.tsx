import React from 'react';
import { Meta } from '@storybook/react';
import TableRow from './TableRow.tsx';

export default {
  title: 'Components/TableRow', 
  component: TableRow,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <TableRow></TableRow>
  );
}