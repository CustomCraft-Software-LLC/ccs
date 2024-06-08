import React from 'react';
import { Meta } from '@storybook/react';
import Pricing from './Pricing.tsx'; 

export default {
  title: 'Components/Pricing', 
  component: Pricing,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <Pricing title="website" pricing="80" to="/" buttonText="contact">
    </Pricing>
  );
}