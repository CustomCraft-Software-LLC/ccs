import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

export interface Event {
  date: string;
  title: string;
  description: string;
}

export interface EventCalendarProps {
  events: Event[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Upcoming Events
      </Typography>
      <List>
        {events.map((event, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={event.title}
                secondary={
                  <>
                    <Typography variant="body2" color="textSecondary">
                      {event.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {event.description}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            {index < events.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default EventCalendar;