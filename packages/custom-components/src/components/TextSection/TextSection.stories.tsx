import React from 'react';
import { Meta } from '@storybook/react';
import TextSection from './TextSection.tsx'; 

export default {
  title: 'Components/TextSection', 
  component: TextSection,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <TextSection>
        his is a custom-styled section using the TextSection component. You can combine multiple components to achieve the desired layout and typography.
    </TextSection>
  );
};