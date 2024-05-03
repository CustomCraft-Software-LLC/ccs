import React from 'react';
import { action } from '@storybook/addon-actions';
import SidebarItem from './SidebarItem.tsx'; 

export default {
  title: 'Components/SidebarItem', 
  component: SidebarItem,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <SidebarItem>
      link
    </SidebarItem>
  );
}