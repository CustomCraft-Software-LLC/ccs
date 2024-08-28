import React from 'react';
import { Typography, Box, Divider, Button, Paper } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

export interface PricingProps {
  title: string;
  children?: React.ReactNode;
  pricing: number;
  to: string;
  buttonText: string;
  onButtonClick?: () => void;
  titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  pricingVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  sx?: SxProps<Theme>;
}

const Pricing: React.FC<PricingProps> = ({
  title = 'Title',
  pricing = 0,
  to = '/',
  buttonText = 'Submit',
  onButtonClick,
  titleVariant = 'h4',
  pricingVariant = 'h6',
  children,
  sx,
}) => {
  const defaultStyle: SxProps<Theme> = {
    width: 200,
    height: 200,
    padding: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...sx, // Merge custom styles with the default styles
  };

  return (
    <Paper sx={defaultStyle}>
      <Typography variant={titleVariant}>{title}</Typography>
      <Typography variant={pricingVariant}>${pricing}</Typography>
      {children}
      <Button onClick={onButtonClick} href={to}>{buttonText}</Button>
    </Paper>
  );
};

export default Pricing;