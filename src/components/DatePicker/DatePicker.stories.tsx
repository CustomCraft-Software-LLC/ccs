import React from 'react';
import { Meta } from '@storybook/react';
import DatePicker from './DatePicker.tsx'; 

export default {
  title: 'Components/DatePicker', 
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <DatePicker />
  );
}