import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import EventCalendar, { EventCalendarProps } from './EventCalendar';
import { Box } from '@mui/material';

export default {
  title: 'Components/EventCalendar',
  component: EventCalendar,
  argTypes: {
    events: {
      control: 'object',
      defaultValue: [
        { date: '2024-08-28', title: 'Event One', description: 'Description of event one.' },
        { date: '2024-09-15', title: 'Event Two', description: 'Description of event two.' },
        { date: '2024-07-10', title: 'Event Three', description: 'Description of event three.' },
      ],
    },
    title: {
      control: 'text',
      defaultValue: 'Upcoming Events',
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
    { date: '2024-08-28', title: 'Event One', description: 'Description of event one.' },
    { date: '2024-09-15', title: 'Event Two', description: 'Description of event two.' },
    { date: '2024-07-10', title: 'Event Three', description: 'Description of event three.' },
  ],
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My Custom Events',
  events: [
    { date: '2024-08-28', title: 'Event One', description: 'Description of event one.' },
    { date: '2024-09-15', title: 'Event Two', description: 'Description of event two.' },
    { date: '2024-07-10', title: 'Event Three', description: 'Description of event three.' },
  ],
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  sx: {
    bgcolor: 'background.paper',
    p: 3,
    borderRadius: 1,
  },
  events: [
    { date: '2024-08-28', title: 'Event One', description: 'Description of event one.' },
    { date: '2024-09-15', title: 'Event Two', description: 'Description of event two.' },
    { date: '2024-07-10', title: 'Event Three', description: 'Description of event three.' },
  ],
};