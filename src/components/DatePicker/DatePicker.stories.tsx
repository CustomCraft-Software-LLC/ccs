import React from 'react';
import { action } from '@storybook/addon-actions';
import DatePicker from './DatePicker.tsx'; 

export default {
  title: 'Components/DatePicker', 
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <DatePicker min="2024-04-20" max="2024-04-27" />
  );
}