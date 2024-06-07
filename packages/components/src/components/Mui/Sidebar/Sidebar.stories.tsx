import React from 'react';
import { Meta } from '@storybook/react';
import Sidebar from './Sidebar.tsx'; 
import SidebarItem from '../SidebarItem/SidebarItem.tsx';
import Box from '../../Custom/Box/Box.tsx';

export default {
  title: 'Components/Sidebar', 
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <Sidebar>
      <SidebarItem to="/" />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
    </Sidebar>
  );
}