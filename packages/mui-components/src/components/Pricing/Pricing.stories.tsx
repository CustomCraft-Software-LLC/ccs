import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Pricing, { PricingProps } from './Pricing';
import { Typography } from '@mui/material';

export default {
  title: 'Components/Pricing',
  component: Pricing,
  argTypes: {
    title: { control: 'text' },
    pricing: { control: 'number' },
    to: { control: 'text' },
    buttonText: { control: 'text' },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<PricingProps> = (args) => <Pricing {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Basic Plan',
  pricing: 29.99,
  to: '/',
  buttonText: 'Subscribe',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: 'Pro Plan',
  pricing: 59.99,
  to: '/subscribe',
  buttonText: 'Join Now',
  children: <Typography variant="body2">This plan includes unlimited access to all features.</Typography>,
};

export const Enterprise = Template.bind({});
Enterprise.args = {
  title: 'Enterprise Plan',
  pricing: 199.99,
  to: '/enterprise',
  buttonText: 'Contact Us',
  children: (
    <>
      <Typography variant="body2">Ideal for large businesses.</Typography>
      <Typography variant="body2">Custom solutions and dedicated support.</Typography>
    </>
  ),
};