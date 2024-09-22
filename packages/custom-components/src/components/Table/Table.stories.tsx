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

// Sample data for the table
const sampleHeaders = ['Name', 'Age', 'Occupation'];
const sampleData = [
  ['Alice', 28, 'Engineer'],
  ['Bob', 34, 'Designer'],
  ['Charlie', 23, 'Developer'],
];

export const Default = () => {
  return (   
    <Table 
      headers={sampleHeaders} 
      data={sampleData} 
    />
  );
};