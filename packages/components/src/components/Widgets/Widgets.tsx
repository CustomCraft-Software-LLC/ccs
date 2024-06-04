import * as React from 'react';
import './Widgets.css';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface WidgetsProps { 
  children?: React.ReactNode;
}

const style : SxProps<Theme> = { 
  display: 'grid',
  gridTemplateRows: 'repeat(auto-fit, minmax(200, 1fr))',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200, 1fr))',
  gap: '20px',
}

const Widgets: React.FC<WidgetsProps> = ({children}) => {
  return (
    <Box sx={style}>
        {children}
    </Box>
  );
};

export default Widgets;