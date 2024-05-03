import React from 'react';
import { Meta } from '@storybook/react';
import Box from './Box.tsx'; 

export default {
  title: 'Components/Box', 
  component: Box,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <Box bgColor="rgb(133,70,242,1.0)" bRad="20px">
        
    </Box>
  );
}