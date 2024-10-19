import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InlineCode from './InlineCode';

const meta: Meta = {
  title: 'Components/InlineCode',
  component: InlineCode,
};

export default meta;

const Template: StoryFn<{ children: React.ReactNode }> = (args) => <InlineCode {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'const x = 42;',
};