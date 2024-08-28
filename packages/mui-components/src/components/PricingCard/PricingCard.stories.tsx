import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PricingCard, { PricingCardProps } from './PricingCard';
import InfoIcon from '@mui/icons-material/Info'; // Example icon from MUI icons

export default {
  title: 'Components/PricingCard',
  component: PricingCard,
  argTypes: {
    title: { control: 'text' },
    price: { control: 'text' },
    features: { control: 'object' }, // Updated from 'array' to 'object'
    onSubscribe: { action: 'subscribed' }, // Action handler to log button clicks in Storybook
    buttonLabel: { control: 'text' },
    icon: { control: false }, // Disable control for icon; manage it directly in stories
  },
} as Meta<PricingCardProps>;

const Template: StoryFn<PricingCardProps> = (args) => <PricingCard {...args} />;

export const BasicPlan = Template.bind({});
BasicPlan.args = {
  title: 'Basic Plan',
  price: '9.99',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  buttonLabel: 'Subscribe Now',
};

export const ProPlan = Template.bind({});
ProPlan.args = {
  title: 'Pro Plan',
  price: '19.99',
  features: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
  buttonLabel: 'Get Started',
  icon: InfoIcon, // Example of using an icon
};

export const EnterprisePlan = Template.bind({});
EnterprisePlan.args = {
  title: 'Enterprise Plan',
  price: '49.99',
  features: ['Premium Feature 1', 'Premium Feature 2', 'Premium Feature 3', 'Premium Feature 4'],
  buttonLabel: 'Contact Us',
};