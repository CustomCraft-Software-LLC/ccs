import React from 'react';
import { Meta } from '@storybook/react';
import Sidebar from './Sidebar'; 
import SidebarItem from '../SidebarItem/SidebarItem';

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