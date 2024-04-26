import React from 'react';
import { action } from '@storybook/addon-actions';
import Box from './Box'; 

export default {
  title: 'Components/Box', 
  component: Box,
};

export const Default = () => {
  return (   
    <Box>
      <p>This is some content inside the Box component.</p>
    </Box>
  );
}