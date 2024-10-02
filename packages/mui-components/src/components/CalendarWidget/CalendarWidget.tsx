import React, { useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

// Utility function to generate days in a month
const generateCalendarDays = (year: number, month: number) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();
  const days = Array.from({ length: startDay }, () => '');
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i.toString());
  }
  return days;
};

export interface CalendarWidgetProps {
  year: number;
  month: number;
  onDateClick?: (date: number) => void;
  sx?: SxProps<Theme>;
}

const CalendarWidget: React.FC<CalendarWidgetProps> = ({
  year,
  month,
  onDateClick,
  sx,
}) => {
  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(year);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const days = generateCalendarDays(currentYear, currentMonth);

  return (
    <Box
      sx={{
        p: 2,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
        ...sx,
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
      </Typography>
      <Grid container spacing={1} sx={{ mb: 1 }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <Grid item xs={1} key={day}>
            <Typography variant="body2" align="center" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
              {day}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1}>
        {days.map((day, index) => (
          <Grid item xs={1} key={index}>
            <Button
              variant="outlined"
              sx={{
                width: '100%',
                height: '100%',
                p: 1,
                borderRadius: '4px',
                bgcolor: day ? 'transparent' : 'transparent',
                color: day ? 'text.primary' : 'transparent',
                '&:hover': {
                  bgcolor: day ? 'primary.main' : 'transparent',
                  color: day ? 'background.paper' : 'transparent',
                },
              }}
              onClick={() => day && onDateClick && onDateClick(Number(day))}
              disabled={!day}
            >
              {day}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={handlePrevMonth} variant="outlined">Prev</Button>
        <Button onClick={handleNextMonth} variant="outlined">Next</Button>
      </Box>
    </Box>
  );
};

export default CalendarWidget;