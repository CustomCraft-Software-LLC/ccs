import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StatWidget, { StatWidgetProps } from './StatWidget'; // Adjust the path as needed
import { Typography } from '@mui/material';

export default {
  title: 'Components/StatWidget',
  component: StatWidget,
  argTypes: {
    isNum: {
      control: 'boolean',
      defaultValue: true,
    },
    title: {
      control: 'text',
      defaultValue: 'Statistics',
    },
    stat: {
      control: 'number',
      defaultValue: 0,
    },
    titleSx: {
      control: 'object',
      defaultValue: {},
    },
    statSx: {
      control: 'object',
      defaultValue: {},
    },
  },
} as Meta;

const Template: StoryFn<StatWidgetProps> = (args) => <StatWidget {...args} />;

export const DefaultNumericStat = Template.bind({});
DefaultNumericStat.args = {
  isNum: true,
  title: 'Total Sales',
  stat: 123456,
};

export const DefaultTextStat = Template.bind({});
DefaultTextStat.args = {
  isNum: false,
  title: 'Status',
  stat: 'Active',
};

export const CustomStyledNumeric = Template.bind({});
CustomStyledNumeric.args = {
  isNum: true,
  title: 'Revenue',
  stat: 987654,
  titleSx: { color: 'primary.main', fontSize: '1.5rem' },
  statSx: { color: 'success.main', fontWeight: 'bold' },
};

export const CustomStyledText = Template.bind({});
CustomStyledText.args = {
  isNum: false,
  title: 'Project Phase',
  stat: 'Completed',
  titleSx: { color: 'secondary.dark', fontSize: '1.25rem' },
  statSx: { color: 'text.secondary', fontStyle: 'italic' },
};

export const EmptyStat = Template.bind({});
EmptyStat.args = {
  isNum: true,
  title: 'Empty Stats',
  stat: 0,
  titleSx: { color: 'warning.main' },
  statSx: { color: 'warning.dark' },
};