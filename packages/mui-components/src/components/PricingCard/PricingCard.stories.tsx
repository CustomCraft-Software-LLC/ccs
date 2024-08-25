import React from 'react';
import { Meta, Story } from '@storybook/react';
import PricingCard, { PricingCardProps } from './PricingCard'; // Adjust path as needed
import { Info as InfoIcon } from '@mui/icons-material';

// Default export with metadata
const meta: Meta<typeof PricingCard> = {
  title: 'Components/PricingCard',
  component: PricingCard,
  argTypes: {
    onSubscribe: { action: 'subscribed' }, // Action for handling button click
    icon: { control: 'none' } // Controls to disable icon selection in the Storybook UI
  },
};

export default meta;

// Template for creating stories
const Template: Story<PricingCardProps> = (args) => <PricingCard {...args} />;

// Basic card story
export const Basic = Template.bind({});
Basic.args = {
  title: 'Basic Plan',
  price: '29',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
};

// Card with icon story
export const WithIcon = Template.bind({});
WithIcon.args = {
  title: 'Pro Plan',
  price: '59',
  features: ['Feature A', 'Feature B', 'Feature C'],
  icon: InfoIcon,
};

// Card with custom button label story
export const CustomButtonLabel = Template.bind({});
CustomButtonLabel.args = {
  title: 'Enterprise Plan',
  price: '99',
  features: ['Feature X', 'Feature Y', 'Feature Z'],
  buttonLabel: 'Get Started',
};