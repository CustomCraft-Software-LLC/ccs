import React from 'react';
import { SxProps, Theme } from '@mui/material';
export interface Event {
    date: string;
    title: string;
    description: string;
}
export interface EventCalendarProps {
    events: Event[];
    title?: string;
    sx?: SxProps<Theme>;
}
declare const EventCalendar: React.FC<EventCalendarProps>;
export default EventCalendar;
