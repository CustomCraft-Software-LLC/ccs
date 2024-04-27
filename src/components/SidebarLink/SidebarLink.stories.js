import React from 'react';
import { action } from '@storybook/addon-actions';
import SidebarLink from './SidebarLink'; 

export default {
  title: 'Components/SidebarLink', 
  component: SidebarLink,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <SidebarLink>
    </SidebarLink>
  );
}