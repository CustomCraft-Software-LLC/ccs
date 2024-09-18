import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  SxProps,
  Theme,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface SidebarItem {
  text: string;
  icon?: React.ReactNode;
  path?: string;
}

export interface SidebarProps {
  title?: string;
  items: SidebarItem[];
  onItemClick?: (path: string) => void;
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
        ...sx, // Custom styles passed via props
      }}
    >
      {/* Render Sidebar title, if provided */}
      {title && (
        <Typography
          variant="h6"
          sx={{
            p: 2,
            textAlign: 'center',
            fontWeight: 'bold',
            bgcolor: 'primary.main',
            color: 'white',
          }}
        >
          {title}
        </Typography>
      )}

      <Divider />

      {/* Sidebar Menu Items */}
      <List>
        {items.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => item.path && onItemClick?.(item.path)} // Handling clicks
            component={item.path ? Link : 'div'} // Make item a link if `path` is provided
            to={item.path || '/'} // Fallback to `/` if no path is specified
            sx={{
              '&:hover': {
                bgcolor: 'primary.light',
                color: 'white',
              },
            }}
          >
            {item.icon && (
              <ListItemIcon sx={{ color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
            )}
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;