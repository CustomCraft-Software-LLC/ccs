import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NotFound from './NotFound';
import { MemoryRouter } from 'react-router-dom';

// Define the metadata for the story
export default {
  title: 'Pages/NotFound',
  component: NotFound,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

// Create a template for the story
const Template: StoryFn = (args) => <NotFound {...args} />;

// Define the default story
export const Default = Template.bind({});
Default.args = {};