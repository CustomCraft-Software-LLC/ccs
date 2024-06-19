import React from 'react';
import { Meta } from '@storybook/react';
import UserMenu from './UserMenu.tsx'; 

export default {
  title: 'Components/UserMenu', 
  component: UserMenu,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <UserMenu />
  );
}