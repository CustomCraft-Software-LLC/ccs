import React from 'react';
import { action } from '@storybook/addon-actions';
import Profile from './Profile'; 

export default {
  title: 'Components/Profile', 
  component: Profile,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <Profile name="clamba" img="https://picsum.photos/200/300" />
  );
}