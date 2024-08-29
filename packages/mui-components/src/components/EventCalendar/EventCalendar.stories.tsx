import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import EventCalendar, { EventCalendarProps } from './EventCalendar';
import { Box } from '@mui/material';

export default {
  title: 'Components/EventCalendar',
  component: EventCalendar,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Upcoming Events',
    },
    events: {
      control: 'object',
      defaultValue: [
        { date: '2024-09-01', title: 'Event One', description: 'Description for event one.' },
        { date: '2024-09-15', title: 'Event Two', description: 'Description for event two.' },
        { date: '2024-10-01', title: 'Event Three', description: 'Description for event three.' },
      ],
    },
    sx: {
      control: 'object',
      defaultValue: {},
    },
  },
} as Meta;

const Template: StoryFn<EventCalendarProps> = (args) => (
  <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
    <EventCalendar {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  events: [
    { date: '2024-09-01', title: 'Event One', description: 'Description for event one.' },
    { date: '2024-09-15', title: 'Event Two', description: 'Description for event two.' },
    { date: '2024-10-01', title: 'Event Three', description: 'Description for event three.' },
  ],
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My Custom Event Calendar',
  events: [
    { date: '2024-09-01', title: 'Event One', description: 'Description for event one.' },
    { date: '2024-09-15', title: 'Event Two', description: 'Description for event two.' },
    { date: '2024-10-01', title: 'Event Three', description: 'Description for event three.' },
  ],
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: 'Stylized Events',
  events: [
    { date: '2024-09-01', title: 'Event One', description: 'Description for event one.' },
    { date: '2024-09-15', title: 'Event Two', description: 'Description for event two.' },
    { date: '2024-10-01', title: 'Event Three', description: 'Description for event three.' },
  ],
  sx: {
    bgcolor: 'primary.light',
    border: '1px solid',
    borderColor: 'primary.main',
    borderRadius: 2,
    boxShadow: 3,
    p: 3,
  },
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  title: 'No Upcoming Events',
  events: [],
};