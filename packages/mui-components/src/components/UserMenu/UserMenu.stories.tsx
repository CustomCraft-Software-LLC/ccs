import React from 'react';
import { Meta } from '@storybook/react';
import UserMenu from './UserMenu'; 

export default {
  title: 'Components/UserMenu', 
  component: UserMenu,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <UserMenu userPages={['Home', 'Services']}/>
  );
}