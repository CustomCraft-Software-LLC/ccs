import React from 'react';
import { action } from '@storybook/addon-actions';
import Search from './Search.jsx'; 

export default {
  title: 'Components/Search', 
  component: Search,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <Search/>
  );
}