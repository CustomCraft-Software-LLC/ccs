import React from 'react';
import { Typography, Box } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface PricingProps { 
  title: string;
  children?: React.ReactNode;
  pricing: string;
}

const style : SxProps<Theme> = { 
  width: 200,
  height: 200,

}

const Pricing: React.FC<PricingProps> = ({title = 'title', pricing = 0, children}) => {
  return (
    <Box sx={style}>
        <Typography variant='h2'>{title}</Typography>
        <Typography variant='h3'>{pricing}</Typography>
        {children}
    </Box>
  );
};

export default Pricing;