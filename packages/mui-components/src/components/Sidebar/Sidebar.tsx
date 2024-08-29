import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, SxProps, Theme } from '@mui/material';
import { Link } from 'react-router-dom';

interface SidebarItem {
  text: string;
  icon?: React.ReactNode;
  path?: string;
}

export interface SidebarProps {
  title?: string;
  items: SidebarItem[];
  onItemClick?: (path: string) => void; // Ensuring `path` is required
  sx?: SxProps<Theme>;
}

const Sidebar: React.FC<SidebarProps> = ({
  title,
  items,
  onItemClick,
  sx,
}) => {
  return (
    <Box
      sx={{
        width: 250,
        bgcolor: 'background.paper',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
    >
      {title && (
        <Typography
          variant="h6"
          sx={{
            p: 2,
            textAlign: 'center',
            fontWeight: 'bold',
            bgcolor: 'primary.main', // Added background color for better visibility
            color: 'white', // Ensuring the title text stands out
          }}
        >
          {title}
        </Typography>
      )}
      <Divider />
      <List>
        {items.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              if (item.path) {
                onItemClick?.(item.path); // Using optional chaining
              }
            }}
            component={item.path ? Link : 'div'}
            to={item.path || '/'} // Default to '/' if no path provided
            aria-label={item.text} // Improved accessibility
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;