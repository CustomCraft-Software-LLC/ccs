import React from 'react';
import { action } from '@storybook/addon-actions';
import Number from './Number'; 

export default {
  title: 'Components/Number', 
  component: Number,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <Number number="20"/>
  );
}
