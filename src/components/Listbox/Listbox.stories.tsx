import React from 'react';
import { Meta } from '@storybook/react';
import Listbox from './Listbox.tsx'; 

export default {
  title: 'Components/Listbox', 
  component: Listbox,
  parameters: {
    layout: 'centered',
  },
} as Meta;

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