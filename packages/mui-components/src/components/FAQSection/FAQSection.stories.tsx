import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FAQSection, { FAQSectionProps } from './FAQSection';

export default {
  title: 'Components/FAQSection',
  component: FAQSection,
  argTypes: {
    faqs: {
      control: 'object', // Allows editing the FAQs object in Storybook's controls panel
    },
  },
} as Meta;

const Template: StoryFn<FAQSectionProps> = (args) => <FAQSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  faqs: [
    {
      question: 'What is your return policy?',
      answer: 'You can return any item within 30 days for a full refund.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide. Please check our shipping policy for details.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order has been shipped, you will receive a tracking number via email.',
    },
  ],
};