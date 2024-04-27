import React from 'react';
import { action } from '@storybook/addon-actions';
import Box from './Box'; 

export default {
  title: 'Components/Box', 
  component: Box,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <Box bgColor="#000000" bRad="20px">
      <p>This is some content inside the Box component.</p>
    </Box>
  );
}