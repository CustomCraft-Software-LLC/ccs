import React from 'react';
import { action } from '@storybook/addon-actions';
import Sidebar from './Sidebar'; 
import SidebarItem from '../SidebarItem/SidebarItem';

export default {
  title: 'Components/Sidebar', 
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <Sidebar>
      <SidebarItem>1</SidebarItem>
      <SidebarItem>2</SidebarItem>
      <SidebarItem>3</SidebarItem>
      <SidebarItem>4</SidebarItem>
    </Sidebar>
  );
}