import React from 'react';
import { Typography, Box, Divider, Button, Paper } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { Link } from 'react-router-dom';

interface PricingProps { 
  title: string;
  children?: React.ReactNode;
  pricing: string;
  to: string;
  buttonText: string;
}

const style : SxProps<Theme> = { 
  width: 200,
  height: 200,

}

const Pricing: React.FC<PricingProps> = ({title = 'title', pricing = 0, to="/", buttonText="Submit", children}) => {
  return (
    <Paper sx={style}>
        <Typography variant='h1'>{title}</Typography>
        <Typography variant='h3'>$ {pricing}</Typography>
        {children}
        <Button component={Link} to={to}>{buttonText}</Button>
    </Paper>
  );
};

export default Pricing;