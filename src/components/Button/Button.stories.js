import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';


export default {
  title: 'Components/Button', 
  component: Button,
  parameters: {
    layout: 'centered',
  }, 
};

export const Default = () => { 
  return ( 
    <Button label="Click me" />
  );
}