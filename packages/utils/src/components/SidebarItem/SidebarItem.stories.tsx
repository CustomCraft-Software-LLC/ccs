import React from 'react';
import { Meta } from '@storybook/react';
import SidebarItem from './SidebarItem.tsx'; 

export default {
  title: 'Components/SidebarItem', 
  component: SidebarItem,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <SidebarItem>
      link
    </SidebarItem>
  );
}