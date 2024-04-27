import React from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown from './Dropdown'; 

export default {
  title: 'Components/Dropdown', 
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <Dropdown>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </Dropdown>
  );
}