import React from 'react';
import { action } from '@storybook/addon-actions';
import Listbox from './Listbox'; 

export default {
  title: 'Components/Listbox', 
  component: Listbox,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <Listbox>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </Listbox>
  );
}