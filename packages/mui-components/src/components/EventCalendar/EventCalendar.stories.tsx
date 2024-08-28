import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import EventCalendar, { EventCalendarProps } from './EventCalendar';
import { Box } from '@mui/material';

export default {
  title: 'Components/EventCalendar',
  component: EventCalendar,
  argTypes: {
    events: {
      control: 'object', // Allows editing the events object in Storybook's controls panel
    },
  },
} as Meta;

const Template: StoryFn<EventCalendarProps> = (args) => (
  <Box sx={{ maxWidth: 600, mx: 'auto' }}>
    <EventCalendar {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  events: [
    {
      date: 'August 30, 2024',
      title: 'React Conference',
      description: 'Join us for a day of talks and workshops about React.',
    },
    {
      date: 'September 15, 2024',
      title: 'Design Sprint Workshop',
      description: 'Participate in an intensive design sprint to solve a real-world problem.',
    },
    {
      date: 'October 10, 2024',
      title: 'Tech Meet-up',
      description: 'Networking event for tech enthusiasts to discuss the latest trends and technologies.',
    },
  ],
};