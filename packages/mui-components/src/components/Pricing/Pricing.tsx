import React from 'react';
import { Typography, Box, Divider, Button, Paper } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface PricingProps { 
  title: string;
  children?: React.ReactNode;
  pricing: number;
  to: string;
  buttonText: string;
}

const style : SxProps<Theme> = { 
  width: 200,
  height: 200,
  padding: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const Pricing: React.FC<PricingProps> = ({title = 'title', pricing = 0, to="/", buttonText="Submit", children}) => {
  return (
    <Paper sx={style}>
        <Typography variant='h1'>{title}</Typography>
        <Typography variant='h3'>$ {pricing}</Typography>
        {children}
        <Button>{buttonText}</Button>
    </Paper>
  );
};

export default Pricing;