import React from 'react';
import { Typography, Box } from '@mui/material';
import Widget from '../Widget/Widget'; // Adjust path as needed

export interface StatWidgetProps {
  isNum: boolean;
  title?: string;
  stat?: number;
  titleSx?: React.CSSProperties; // Custom styles for title
  statSx?: React.CSSProperties;  // Custom styles for stat
}

const StatWidget: React.FC<StatWidgetProps> = ({ isNum, title = '', stat = 0, titleSx, statSx }) => {
  return (
    <Widget title={title}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ mb: 1, ...titleSx }}>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ ...statSx }}>
          {isNum ? stat.toLocaleString() : stat}
        </Typography>
      </Box>
    </Widget>
  );
};

export default StatWidget;