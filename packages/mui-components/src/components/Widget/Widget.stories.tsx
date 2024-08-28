import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Widget, { WidgetProps } from './Widget'; // Adjust the import path as needed
import { Button, Typography } from '@mui/material';

export default {
  title: 'Components/Widget',
  component: Widget,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Default Widget Title',
    },
    sx: {
      control: 'object',
      defaultValue: {},
    },
    titleSx: {
      control: 'object',
      defaultValue: {},
    },
    titleVariant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
      defaultValue: 'h4',
    },
    children: {
      control: 'text',
      defaultValue: 'This is the widget content.',
    },
  },
} as Meta;

const Template: StoryFn<WidgetProps> = (args) => <Widget {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Widget',
};

export const WithButton = Template.bind({});
WithButton.args = {
  title: 'Widget with Button',
  children: <Button variant="contained">Click Me</Button>,
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  title: 'Custom Styled Widget',
  sx: {
    bgcolor: 'primary.main',
    color: 'white',
    p: 4,
    border: '1px solid',
    borderColor: 'primary.dark',
  },
  titleSx: {
    fontSize: '2rem',
    color: 'secondary.light',
  },
  children: <Typography>This widget has custom styles.</Typography>,
};

export const WithDifferentTitleVariant = Template.bind({});
WithDifferentTitleVariant.args = {
  title: 'Widget with Different Title Variant',
  titleVariant: 'h2',
  children: <Typography>Content with h2 title variant.</Typography>,
};

export const ComplexContent = Template.bind({});
ComplexContent.args = {
  title: 'Complex Widget Content',
  children: (
    <>
      <Typography variant="h6">User Stats</Typography>
      <Typography variant="body1">Total Users: 5000</Typography>
      <Button variant="outlined" sx={{ mt: 2 }}>View Details</Button>
    </>
  ),
};