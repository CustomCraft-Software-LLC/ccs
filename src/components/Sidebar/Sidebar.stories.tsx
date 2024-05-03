import React from 'react';
import { action } from '@storybook/addon-actions';
import Sidebar from './Sidebar.tsx'; 
import SidebarItem from '../SidebarItem/SidebarItem.tsx';
import Box from '../Box/Box.tsx';

export default {
  title: 'Components/Sidebar', 
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <div>
      <div>
        <div>
          <Sidebar>
            <SidebarItem to="/">1</SidebarItem>
            <SidebarItem>2</SidebarItem>
            <SidebarItem>3</SidebarItem>
            <SidebarItem>4</SidebarItem>
          </Sidebar>
        </div>
        <div>
          <Box bgColor="#004400">hello</Box>
        </div>
      </div>
    </div>
  );
}