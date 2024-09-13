import React from 'react';
import { Meta } from '@storybook/react';
import Button from './Button.tsx';


export default {
  title: 'Components/Button', 
  component: Button,
  parameters: {
    layout: 'centered',
  }, 
} as Meta;

export const Default = () => { 
  return ( 
    <Button label="Click me" />
  );
}
