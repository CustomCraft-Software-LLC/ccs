import React from 'react';
import { SxProps, Theme } from '@mui/system';
interface CalendarWidgetProps {
    year: number;
    month: number;
    onDateClick?: (date: number) => void;
    sx?: SxProps<Theme>;
}
declare const CalendarWidget: React.FC<CalendarWidgetProps>;
export default CalendarWidget;
