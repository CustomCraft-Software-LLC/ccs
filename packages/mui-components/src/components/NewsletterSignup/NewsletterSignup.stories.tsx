import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NewsletterSignup, { NewsletterSignupProps } from './NewsletterSignup';

export default {
  title: 'Components/NewsletterSignup',
  component: NewsletterSignup,
  argTypes: {
    onSubmit: { action: 'submitted' },  // Mock the onSubmit action
    buttonText: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    loading: { control: 'boolean' },
    successMessage: { control: 'text' },
    errorMessage: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<NewsletterSignupProps> = (args) => <NewsletterSignup {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Subscribe',
  label: 'Email',
  placeholder: 'Enter your email',
  successMessage: 'Thank you for subscribing!',
  errorMessage: 'Please enter a valid email address.',
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  loading: true,
  buttonText: 'Submitting...',
};

export const WithCustomValidation = Template.bind({});
WithCustomValidation.args = {
  ...Default.args,
  validateEmail: (email) => {
    if (!email.includes('@')) {
      return 'Invalid email format';
    }
    return null;
  },
  errorMessage: 'Please provide a correct email format',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  boxSx: { backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' },
  textFieldSx: { backgroundColor: '#fff' },
  buttonSx: { backgroundColor: '#007bff', color: '#fff' },
};