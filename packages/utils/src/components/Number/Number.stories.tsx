import React from 'react';
import { action } from '@storybook/addon-actions';
import Number from './Number.tsx'; 

export default {
  title: 'Components/Number', 
  component: Number,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <Number num={20} />
  );
}
