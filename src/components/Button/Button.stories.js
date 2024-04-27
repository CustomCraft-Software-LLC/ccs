import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';


export default {
  title: 'Components/Button', 
  component: Button, 
};

export const Default = () => { 
  return ( 
    <Button label="Click me" />
  );
}