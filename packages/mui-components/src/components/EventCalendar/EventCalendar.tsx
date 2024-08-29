import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider, SxProps, Theme } from '@mui/material';

export interface Event {
  date: string; // ISO 8601 date format
  title: string;
  description: string;
}

export interface EventCalendarProps {
  events: Event[];
  title?: string;
  sx?: SxProps<Theme>;
}

// Utility function to format date manually
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options); // Example format: August 28, 2024
};

const EventCalendar: React.FC<EventCalendarProps> = ({ events, title = 'Upcoming Events', sx }) => {
  // Sort events by date, with the most recent first
  const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Box sx={{ py: 4, ...sx }}>
      <Typography variant="h4" align="center" gutterBottom>
        {title}
      </Typography>
      <List>
        {sortedEvents.map((event, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={event.title}
                secondary={
                  <>
                    <Typography variant="body2" color="textSecondary">
                      {formatDate(event.date)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {event.description}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            {index < sortedEvents.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default EventCalendar;