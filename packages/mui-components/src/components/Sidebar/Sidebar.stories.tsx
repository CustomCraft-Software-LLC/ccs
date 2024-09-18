import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Sidebar, { SidebarProps } from './Sidebar'; // Assuming you have a Sidebar component

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta;

const Template: StoryFn<SidebarProps> = (args) => <Sidebar {...args} />;

export const DefaultSidebar = Template.bind({});
DefaultSidebar.args = {
  title: 'Main Menu',
  items: [
    { text: 'Home', path: '/home' },
    { text: 'Settings', path: '/settings' },
    { text: 'Profile', path: '/profile' },
  ],
};

// Using StoryFn to add dynamic behavior (active state tracking)
export const SidebarWithActiveItem: StoryFn<SidebarProps> = (args) => {
  const [activeItem, setActiveItem] = useState('/home');

  return (
    <Sidebar
      {...args}
      items={args.items.map((item) => ({
        ...item,
        isActive: item.path === activeItem,
        onClick: () => setActiveItem(item.path),
      }))}
    />
  );
};

SidebarWithActiveItem.args = {
  title: 'Main Menu',
  items: [
    { text: 'Home', path: '/home' },
    { text: 'Settings', path: '/settings' },
    { text: 'Profile', path: '/profile' },
  ],
};