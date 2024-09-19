import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Box } from '@mui/material';

const HoverSidebar = ({ width = 240, hoverWidth = 20, items = [] }) => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Invisible box to detect hover near the left side */}
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          width: `${hoverWidth}px`, // Dynamic width for hover detection area
          zIndex: 1201,
          '&:hover': {
            cursor: 'pointer',
          }
        }}
        onMouseEnter={handleMouseEnter}
      />

      {/* Drawer Component for Sidebar */}
      <Drawer
        anchor="left"
        open={open}
        variant="persistent" // Sidebar stays open until the user leaves
        onMouseLeave={handleMouseLeave} // Closes when mouse leaves the drawer
        PaperProps={{
          sx: {
            width: `${width}px`, // Dynamic sidebar width
          },
        }}
      >
        <List>
          {items.map((item, index) => (
            <ListItem button key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default HoverSidebar;