import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DatePicker from './DatePicker'; // Adjust the path if needed
import { DatePickerProps } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
} as Meta;

// Template using StoryFn
const Template: StoryFn<DatePickerProps> = (args) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(args.selectDate || null);

  return (
    <DatePicker
      {...args}
      selectDate={selectedDate}
      onChange={setSelectedDate}
    />
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Select a date',
};

// Story with a predefined date
export const PredefinedDate = Template.bind({});
PredefinedDate.args = {
  selectDate: new Date(),
  placeholder: 'Pick a date',
};

// Story with min and max date restrictions
export const MinMaxDate = Template.bind({});
MinMaxDate.args = {
  minDate: new Date(2020, 0, 1), // January 1, 2020
  maxDate: new Date(2025, 11, 31), // December 31, 2025
  placeholder: 'Select a date within range',
};