import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import DatePicker from './DatePicker'; 

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <DatePicker
      selectDate={selectedDate}
      onChange={setSelectedDate}
      placeholder="Select a date"
    />
  );
};

export const PredefinedDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <DatePicker
      selectDate={selectedDate}
      onChange={setSelectedDate}
      placeholder="Pick a date"
    />
  );
};

export const MinMaxDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <DatePicker
      selectDate={selectedDate}
      onChange={setSelectedDate}
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 11, 31)}
      placeholder="Select a date within range"
    />
  );
};