import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import PricingCard, { PricingCardProps } from './PricingCard';
import { Box } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';

export default {
  title: 'Components/PricingCard',
  component: PricingCard,
  argTypes: {
    onSubscribe: { action: 'subscribed' },
    buttonLabel: { control: 'text' },
    priceInterval: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<PricingCardProps> = (args) => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <PricingCard {...args} />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {
  title: 'Basic Plan',
  price: '29',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: 'Pro Plan',
  price: '99',
  features: ['Pro Feature 1', 'Pro Feature 2', 'Pro Feature 3'],
  icon: StarIcon,
};

export const CustomButtonLabel = Template.bind({});
CustomButtonLabel.args = {
  title: 'Enterprise Plan',
  price: '199',
  features: ['Enterprise Feature 1', 'Enterprise Feature 2', 'Enterprise Feature 3'],
  buttonLabel: 'Get Started',
};

export const CustomPriceInterval = Template.bind({});
CustomPriceInterval.args = {
  title: 'Annual Plan',
  price: '299',
  features: ['Annual Feature 1', 'Annual Feature 2', 'Annual Feature 3'],
  priceInterval: 'year',
};