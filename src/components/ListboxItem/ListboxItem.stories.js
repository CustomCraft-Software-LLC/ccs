import React from 'react';
import { action } from '@storybook/addon-actions';
import ListboxItem from './ListboxItem'; 
import Listbox from '../Listbox/Listbox';

export default {
  title: 'Components/ListboxItem', 
  component: ListboxItem,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <Listbox>
        <ListboxItem value="1" label="1"></ListboxItem>
        <ListboxItem value="2" label="2"></ListboxItem>
        <ListboxItem value="3" label="3"></ListboxItem>
        <ListboxItem value="4" label="4"></ListboxItem>
    </Listbox>
  );
}