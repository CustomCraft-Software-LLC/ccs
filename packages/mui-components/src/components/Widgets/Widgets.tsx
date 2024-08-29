import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';

// Props for the Widgets component
export interface WidgetsProps { 
  children?: React.ReactNode;
}

// Styles for the Widgets component
const style: SxProps<Theme> = { 
  display: 'grid',
  gridTemplateRows: 'repeat(auto-fill, minmax(200px, 1fr))',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '20px',
  width: '100%',  // Ensures full width of the container
  padding: '10px', // Optional padding for some spacing around the grid
  boxSizing: 'border-box', // Ensures padding is included in width calculation
};

const Widgets: React.FC<WidgetsProps> = ({ children }) => {
  return (
    <Box sx={style}>
        {children}
    </Box>
  );
};

export default Widgets;