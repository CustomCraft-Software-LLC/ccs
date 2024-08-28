import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Features, { FeaturesProps } from './Features';
import { CheckCircle, Star, Info } from '@mui/icons-material';
import { Box } from '@mui/material';

export default {
  title: 'Components/Features',
  component: Features,
  argTypes: {
    features: {
      control: 'object', // Allows editing the features object in Storybook's controls panel
    },
  },
} as Meta;

const Template: StoryFn<FeaturesProps> = (args) => <Features {...args} />;

export const Default = Template.bind({});
Default.args = {
  features: [
    {
      icon: <CheckCircle color="success" />,
      title: 'Feature One',
      description: 'This is a description of feature one. It explains why this feature is beneficial.',
    },
    {
      icon: <Star color="primary" />,
      title: 'Feature Two',
      description: 'This is a description of feature two. It highlights the advantages and unique aspects.',
    },
    {
      icon: <Info color="action" />,
      title: 'Feature Three',
      description: 'This is a description of feature three. It provides details on its usefulness and application.',
    },
  ],
};