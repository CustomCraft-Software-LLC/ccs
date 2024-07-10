import React from 'react';
import { Meta } from '@storybook/react';
import FileUpload from './FileUpload.tsx'; 

export default {
  title: 'Components/FileUpload', 
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <FileUpload />
  );
}