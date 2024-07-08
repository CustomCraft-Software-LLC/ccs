import React from 'react';
import './Widget.css';
import { Typography, Box } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface WidgetProps { 
  title: string;
  children?: React.ReactNode;
}

const style: SxProps<Theme> = { 
  p: 10,
  width: 'calc(50% - 20px)',
  minWidth: '200px',
  minHeight: '200px',
  gridColumn: 'span 1/span 2',
  gridRow: 'auto/span 1',
}


const Widget: React.FC<WidgetProps> = ({ title = 'title' , children }) => {
  return (
    <Box sx={style}>
      <Typography variant='h3'>{title}</Typography>
      {children}
    </Box>
  );
};

export default Widget;