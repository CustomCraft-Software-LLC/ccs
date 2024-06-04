import React from 'react';
import { Meta } from '@storybook/react';
import Search from './Search.tsx'; 

export default {
  title: 'Components/Search', 
  component: Search,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <Search/>
  );
}