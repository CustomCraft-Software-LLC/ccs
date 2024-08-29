import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Sidebar, { SidebarProps } from './Sidebar';
import { Home, Info, ContactMail } from '@mui/icons-material';
import { Box } from '@mui/material';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Sidebar Title',
    },
    items: {
      control: 'object',
      defaultValue: [
        { text: 'Home', icon: <Home />, path: '/' },
        { text: 'About', icon: <Info />, path: '/about' },
        { text: 'Contact', icon: <ContactMail />, path: '/contact' },
      ],
    },
    onItemClick: {
      action: 'clicked',
    },
    sx: {
      control: 'object',
      defaultValue: {},
    },
  },
} as Meta;

const Template: StoryFn<SidebarProps> = (args) => (
  <Box sx={{ display: 'flex', height: '100vh' }}>
    <Sidebar {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'About', icon: <Info />, path: '/about' },
    { text: 'Contact', icon: <ContactMail />, path: '/contact' },
  ],
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My Custom Sidebar',
  items: [
    { text: 'Dashboard', icon: <Home />, path: '/dashboard' },
    { text: 'Reports', icon: <Info />, path: '/reports' },
    { text: 'Settings', icon: <ContactMail />, path: '/settings' },
  ],
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  sx: {
    bgcolor: 'primary.main',
    color: 'white',
  },
  items: [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'About', icon: <Info />, path: '/about' },
    { text: 'Contact', icon: <ContactMail />, path: '/contact' },
  ],
};

export const WithAdditionalItems = Template.bind({});
WithAdditionalItems.args = {
  items: [
    { text: 'Dashboard', icon: <Home />, path: '/dashboard' },
    { text: 'Reports', icon: <Info />, path: '/reports' },
    { text: 'Settings', icon: <ContactMail />, path: '/settings' },
    { text: 'Help', icon: <ContactMail />, path: '/help' },
  ],
};