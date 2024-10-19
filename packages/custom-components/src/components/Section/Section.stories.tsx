import React from 'react';
import { Meta } from '@storybook/react';
import Section from './Section.tsx'; 

export default {
  title: 'Components/Section', 
  component: Section,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <Section title="hello">
        <p>Hi</p>
    </Section>
  );
};