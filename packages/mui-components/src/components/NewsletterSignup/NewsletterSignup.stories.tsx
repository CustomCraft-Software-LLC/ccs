import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NewsletterSignup, { NewsletterSignupProps } from './NewsletterSignup';

// Define the metadata for the story
export default {
  title: 'Components/NewsletterSignup',
  component: NewsletterSignup,
  argTypes: {
    onSubmit: { action: 'submitted' }, // Action to simulate form submission in Storybook
  },
} as Meta;

// Create a template for the story
const Template: StoryFn<NewsletterSignupProps> = (args) => <NewsletterSignup {...args} />;

// Define different variations of the component
export const Default = Template.bind({});
Default.args = {
  onSubmit: (email) => {
    alert(`Subscribed with email: ${email}`);
  },
};