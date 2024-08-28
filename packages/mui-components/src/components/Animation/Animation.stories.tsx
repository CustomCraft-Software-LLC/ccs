import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Animation, { AnimationProps } from './Animation';
import { Typography, Box } from '@mui/material';

export default {
  title: 'Components/Animation',
  component: Animation,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: [
          'bounce',
          'rotateAroundY',
          'rotateAroundX',
          'bounceIn',
          'bounceOut',
          'blur',
          'brightness',
          // Add any other animation names here
        ],
      },
      defaultValue: 'bounce',
    },
    duration: {
      control: 'text',
      defaultValue: '2s',
    },
    iteration: {
      control: 'text',
      defaultValue: 'infinite',
    },
    delay: {
      control: 'text',
      defaultValue: '0s',
    },
    children: {
      control: 'text',
      defaultValue: 'Animated Text',
    },
  },
} as Meta;

const Template: StoryFn<AnimationProps> = (args) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Animation {...args}>
      <Typography variant="h4">{args.children}</Typography>
    </Animation>
  </Box>
);

export const Bounce = Template.bind({});
Bounce.args = {
  name: 'bounce',
  duration: '2s',
  iteration: 'infinite',
};

export const RotateAroundY = Template.bind({});
RotateAroundY.args = {
  name: 'rotateAroundY',
  duration: '2s',
  iteration: 'infinite',
};

export const RotateAroundX = Template.bind({});
RotateAroundX.args = {
  name: 'rotateAroundX',
  duration: '2s',
  iteration: 'infinite',
};

export const BounceIn = Template.bind({});
BounceIn.args = {
  name: 'bounceIn',
  duration: '2s',
  iteration: 'infinite',
};

export const Blur = Template.bind({});
Blur.args = {
  name: 'blur',
  duration: '2s',
  iteration: 'infinite',
};

export const Brightness = Template.bind({});
Brightness.args = {
  name: 'brightness',
  duration: '2s',
  iteration: 'infinite',
};

export const CustomAnimation = Template.bind({});
CustomAnimation.args = {
  name: 'rotateAroundY',
  duration: '3s',
  iteration: '3',
  delay: '1s',
  children: 'Custom Animation Example',
};