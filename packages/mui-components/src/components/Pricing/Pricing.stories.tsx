import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Pricing, { PricingProps } from './Pricing';

export default {
  title: 'Components/Pricing',
  component: Pricing,
  argTypes: {
    title: { control: 'text' },
    pricing: { control: 'number' },
    to: { control: 'text' },
    buttonText: { control: 'text' },
    onButtonClick: { action: 'clicked' },
    sx: { control: 'object' },
  },
} as Meta;

const Template: StoryFn<PricingProps> = (args) => <Pricing {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Standard Plan',
  pricing: 99,
  to: '/subscribe',
  buttonText: 'Subscribe Now',
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: 'Premium Plan',
  pricing: 199,
  to: '/subscribe',
  buttonText: 'Get Started',
  sx: {
    backgroundColor: 'primary.main',
    color: 'white',
    width: 250,
    height: 250,
  },
};