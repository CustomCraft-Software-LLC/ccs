import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Widget from './Widget';
import { Box, Typography } from '@mui/material';

// Meta configuration for Storybook
export default {
  title: 'Components/Widget',
  component: Widget,
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    sx: { control: 'object' },
    titleSx: { control: 'object' },
    titleVariant: { control: 'radio', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
  },
} as Meta<typeof Widget>;

// Template for creating stories
const Template: StoryFn<typeof Widget> = (args) => <Widget {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  title: 'Default Widget',
  children: <Typography>Content goes here</Typography>,
};

// Custom Styles story
export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: 'Custom Styled Widget',
  titleSx: { color: 'teal' },
  sx: { bgcolor: '#e0f7fa' },
  children: <Typography>This widget has custom styles.</Typography>,
};

// Large Content story
export const LargeContent = Template.bind({});
LargeContent.args = {
  title: 'Large Content Widget',
  sx: { minHeight: '300px', bgcolor: '#fff3e0' },
  children: (
    <Box>
      <Typography paragraph>
        This widget contains a large amount of content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet lectus ut nulla scelerisque, at hendrerit nulla congue. Vivamus ac lacus nec lorem commodo interdum.
      </Typography>
      <Typography paragraph>
        Additional content can go here. Ut lobortis sapien vel mauris fermentum, id pellentesque lorem consectetur.
      </Typography>
    </Box>
  ),
};

// Example with titleVariant
export const TitleVariant = Template.bind({});
TitleVariant.args = {
  title: 'Widget with Title Variant',
  titleVariant: 'h2',
  children: <Typography>Styled with a different title variant.</Typography>,
};