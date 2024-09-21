import Search from '../Search/Search.tsx';
import { Meta } from '@storybook/react';
import React from 'react';
import Table from './Table.tsx';

export default {
  title: 'Components/Table', 
  component: Table,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  

  return (   
    <Table />
  );
}