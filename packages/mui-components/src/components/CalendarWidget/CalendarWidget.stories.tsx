import React from 'react';
import { Meta,StoryFn } from '@storybook/react';
import CalendarWidget from './CalendarWidget';

export default {
  title: 'Components/CalendarWidget',
  component: CalendarWidget,
  argTypes: {
    onDateClick: { action: 'dateClicked' },
    sx: { control: 'object' },
  },
} as Meta<typeof CalendarWidget>;

const Template:StoryFn<typeof CalendarWidget> = (args) => <CalendarWidget {...args} />;

export const Default = Template.bind({});
Default.args = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};