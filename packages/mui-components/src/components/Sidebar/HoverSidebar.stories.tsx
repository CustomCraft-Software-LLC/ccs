import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HoverSidebar from './HoverSidebar';

// Define the metadata for the story
export default {
  title: 'Components/HoverSidebar',
  component: HoverSidebar,
  argTypes: {
    width: { control: { type: 'number' } }, // Control type for width as number
    hoverWidth: { control: { type: 'number' } }, // Control type for hoverWidth as number
    items: { control: { type: 'object' } }, // Control type for array as object
  },
} as Meta;

// Create a template for the component
const Template: StoryFn<any> = (args) => <HoverSidebar {...args} />;

// Default Sidebar
export const DefaultSidebar = Template.bind({});
DefaultSidebar.args = {
  width: 240,
  hoverWidth: 20,
  items: ['Home', 'Profile', 'Settings'],
};

// Wider Sidebar
export const WideSidebar = Template.bind({});
WideSidebar.args = {
  width: 300,
  hoverWidth: 30,
  items: ['Dashboard', 'Reports', 'Analytics', 'Users', 'Settings'],
};

// Minimal Hover Area Sidebar
export const SmallHoverAreaSidebar = Template.bind({});
SmallHoverAreaSidebar.args = {
  width: 240,
  hoverWidth: 10,
  items: ['Dashboard', 'Reports', 'Analytics', 'Users', 'Settings'],
};