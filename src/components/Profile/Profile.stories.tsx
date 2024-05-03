import React from 'react';
import { Meta } from '@storybook/react';
import Profile from './Profile.tsx'; 

export default {
  title: 'Components/Profile', 
  component: Profile,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <Profile name="clamba" img="https://picsum.photos/200/300" />
  );
}