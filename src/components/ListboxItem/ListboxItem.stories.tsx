import React from 'react';
import { Meta } from '@storybook/react';
import ListboxItem from './ListboxItem.tsx'; 
import Listbox from '../Listbox/Listbox.tsx';

export default {
  title: 'Components/ListboxItem', 
  component: ListboxItem,
  parameters: {
    layout: 'centered',
  },
} as Meta;

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