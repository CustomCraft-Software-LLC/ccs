import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ContactForm, { ContactFormProps } from './ContactForm';

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
  argTypes: {
    backendUrl: {
      control: 'text',
      defaultValue: 'http://localhost:5000/api/contact',
    },
    onSubmit: { action: 'submitted' },
  },
} as Meta;

const Template: StoryFn<ContactFormProps> = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  backendUrl: 'http://localhost:5000/api/contact',
};

export const CustomBackendUrl = Template.bind({});
CustomBackendUrl.args = {
  backendUrl: 'http://example.com/api/contact',
};

export const WithFormSubmission = Template.bind({});
WithFormSubmission.args = {
  backendUrl: 'http://localhost:5000/api/contact',
  onSubmit: (data) => {
    alert(`Form submitted with data:\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`);
  },
};