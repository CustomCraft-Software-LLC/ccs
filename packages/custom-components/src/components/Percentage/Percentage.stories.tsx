import React from 'react';
import { Meta } from '@storybook/react';
import Percentage from './Percentage.tsx';

export default {
  title: 'Components/Percentage', 
  component: Percentage,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <Percentage sign='+' percent={30.2}/>
  );
}
