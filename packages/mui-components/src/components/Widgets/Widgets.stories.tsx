// src/stories/Widgets.stories.tsx

import React from 'react';
import Widgets from './Widgets'; // Adjust the import path as needed
import { Paper, Typography } from '@mui/material';

// Default export for Storybook
export default {
  title: 'Components/Widgets',
  component: Widgets,
  parameters: {
    layout: 'centered', // Centers the component in the Storybook canvas
  },
};

// Template for the Widgets component
const Template = (args: any) => (
  <Widgets {...args}>
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography>Widget 1</Typography>
    </Paper>
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography>Widget 2</Typography>
    </Paper>
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography>Widget 3</Typography>
    </Paper>
  </Widgets>
);

// Default story
export const Default = Template.bind({});
Default.args = {
  // Add default args if needed
};

// Customizable story
export const CustomGap = Template.bind({});
CustomGap.args = {
  sx: {
    gap: '30px', // Customize the gap between widgets
  },
};

// Another variant story with different padding
export const CustomPadding = Template.bind({});
CustomPadding.args = {
  sx: {
    padding: '20px', // Customize the padding of the container
  },
};