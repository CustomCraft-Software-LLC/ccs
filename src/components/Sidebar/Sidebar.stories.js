import React from 'react';
import { action } from '@storybook/addon-actions';
import { Sidebar } from './Sidebar'; 

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
    </Sidebar>
  );
}