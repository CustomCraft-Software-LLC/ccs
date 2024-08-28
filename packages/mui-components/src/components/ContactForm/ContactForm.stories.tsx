import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ContactForm, { ContactFormProps } from './ContactForm';

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
  argTypes: {
    onSubmit: { action: 'submitted' }, // Mock function to track calls in Storybook
  },
} as Meta;

const Template: StoryFn<ContactFormProps> = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (data) => {
    console.log('Form submitted with data:', data);
  },
};