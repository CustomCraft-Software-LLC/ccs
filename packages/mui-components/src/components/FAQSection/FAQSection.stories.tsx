import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FAQSection, { FAQSectionProps } from './FAQSection';
import { Box } from '@mui/material';

export default {
  title: 'Components/FAQSection',
  component: FAQSection,
  argTypes: {
    faqs: {
      control: 'object',
      defaultValue: [
        { question: 'What is your return policy?', answer: 'You can return any item within 30 days.' },
        { question: 'Do you offer international shipping?', answer: 'Yes, we ship worldwide.' },
        { question: 'How can I contact customer support?', answer: 'You can contact us via email or phone.' },
      ],
    },
    summarySx: {
      control: 'object',
      defaultValue: {},
    },
    detailsSx: {
      control: 'object',
      defaultValue: {},
    },
    gap: {
      control: 'number',
      defaultValue: 2, // Default gap size
    },
  },
} as Meta;

const Template: StoryFn<FAQSectionProps> = (args) => (
  <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
    <FAQSection {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  faqs: [
    { question: 'What is your return policy?', answer: 'You can return any item within 30 days.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship worldwide.' },
    { question: 'How can I contact customer support?', answer: 'You can contact us via email or phone.' },
  ],
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  faqs: [
    { question: 'What is your return policy?', answer: 'You can return any item within 30 days.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship worldwide.' },
    { question: 'How can I contact customer support?', answer: 'You can contact us via email or phone.' },
  ],
  summarySx: { bgcolor: 'secondary.main', color: 'white' },
  detailsSx: { bgcolor: 'background.paper' },
};

export const CustomGap = Template.bind({});
CustomGap.args = {
  faqs: [
    { question: 'What is your return policy?', answer: 'You can return any item within 30 days.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship worldwide.' },
    { question: 'How can I contact customer support?', answer: 'You can contact us via email or phone.' },
  ],
  gap: 4, // Custom gap size
};