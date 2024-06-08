import * as React from 'react';
import './Number.css';
import { Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface NumberProps { 
  num: number;
  color?: string;
}

const Number: React.FC<NumberProps> = ({ num, color = '#bd5519' }) => {
  const style: SxProps<Theme> = { 
    color: color,
  }

  return (
    <Typography variant='h5' sx={style}>{num}</Typography>
  );
};

export default Number;
