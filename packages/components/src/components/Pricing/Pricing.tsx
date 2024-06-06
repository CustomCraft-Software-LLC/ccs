import React from 'react';
import { Typography, Box, Divider, Button } from '@mui/material';
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
    <Box sx={style}>
        <Divider />
        <Typography variant='h2'>{title}</Typography>
        <Typography variant='h3'>{pricing}</Typography>
          {children}
        <Divider />
        <Button component={Link} to={to}>{buttonText}</Button>
    </Box>
  );
};

export default Pricing;