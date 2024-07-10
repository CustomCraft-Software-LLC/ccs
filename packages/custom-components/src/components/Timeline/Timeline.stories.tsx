import React from 'react';
import { Meta } from '@storybook/react';
import Timeline from './Timeline.tsx';

export default {
  title: 'Components/Timeline', 
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
    const events = [
        { date: '2024-01-01', description: "New Year's Day" },
        { date: '2024-02-14', description: "Valentine's Day" },
        { date: '2024-03-17', description: "St. Patrick's Day" },
        { date: '2024-04-01', description: "April Fool's Day" },
        { date: '2024-07-04', description: 'Independence Day' },
        { date: '2024-10-31', description: 'Halloween' },
        { date: '2024-12-25', description: 'Christmas Day' }
    ];

    return (   
        <div>
            <h1>Vertical Event Timeline</h1>
            <Timeline events={events} orientation="vertical" />
            
            <h1>Horizontal Event Timeline</h1>
            <Timeline events={events} orientation="horizontal" />
        </div>
    );
}