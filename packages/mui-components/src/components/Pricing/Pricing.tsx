import React from 'react';
import { Typography, Box, Button, Paper } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

export interface PricingProps {
  title: string;
  pricing: number;
  to: string;
  buttonText: string;
  onButtonClick?: () => void;
  sx?: SxProps<Theme>;
}

const Pricing: React.FC<PricingProps> = ({
  title,
  pricing,
  to,
  buttonText,
  onButtonClick,
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
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h6">${pricing}</Typography>
      <Button onClick={onButtonClick} href={to}>
        {buttonText}
      </Button>
    </Paper>
  );
};

export default Pricing;