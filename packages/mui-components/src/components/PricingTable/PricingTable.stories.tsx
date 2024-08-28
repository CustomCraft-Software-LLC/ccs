import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PricingTable, { PricingTableProps } from './PricingTable';

// Define the metadata for the story
export default {
  title: 'Components/PricingTable',
  component: PricingTable,
} as Meta;

// Create a template for the story
const Template: StoryFn<PricingTableProps> = (args) => <PricingTable {...args} />;

// Define a default story with sample data
export const Default = Template.bind({});
Default.args = {
  plans: [
    {
      title: 'Basic Plan',
      price: '$19.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      buttonText: 'Select Plan',
      onButtonClick: () => alert('Basic Plan Selected'),
    },
    {
      title: 'Pro Plan',
      price: '$39.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      buttonText: 'Select Plan',
      onButtonClick: () => alert('Pro Plan Selected'),
    },
    {
      title: 'Enterprise Plan',
      price: '$79.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
      buttonText: 'Select Plan',
      onButtonClick: () => alert('Enterprise Plan Selected'),
    },
  ],
};