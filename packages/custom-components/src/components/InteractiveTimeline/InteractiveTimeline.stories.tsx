import React from 'react';
import { Meta } from '@storybook/react';
import InteractiveTimeline from './InteractiveTimeline.tsx';

export default {
  title: 'Components/InteractiveTimeline', 
  component: InteractiveTimeline,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  const events = [
    { date: '2021', description: 'Event 1', content: 'Event 1 Details' },
    { date: '2022', description: 'Event 2', content: 'Event 2 Details' },
    { date: '2023', description: 'Event 3', content: 'Event 3 Details' }
];

    return (   
        <div>
            <h1>Vertical Event InteractiveTimeline</h1>
            <InteractiveTimeline events={events} orientation="vertical" />
            
            <h1>Horizontal Event InteractiveTimeline</h1>
            <InteractiveTimeline events={events} orientation="horizontal" />
        </div>
    );
}