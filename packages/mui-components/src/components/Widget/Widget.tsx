import React from 'react';
import { Box, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

export interface WidgetProps {
  title: string;
  children?: React.ReactNode;
  sx?: SxProps<Theme>; // Custom styles for the container
  titleSx?: SxProps<Theme>; // Custom styles for the title
  titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // Variant for title
}

const Widget: React.FC<WidgetProps> = ({
  title,
  children,
  sx,
  titleSx,
  titleVariant = 'h4', // Default to 'h4'
}) => {
  return (
    <Box
      sx={{
        p: 2, // Default padding
        width: 'calc(50% - 20px)',
        minWidth: '200px',
        minHeight: '200px',
        gridColumn: 'span 1/span 2',
        gridRow: 'auto/span 1',
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
        ...sx, // Apply custom styles
      }}
    >
      <Typography
        variant={titleVariant}
        sx={{
          mb: 2, // Margin bottom
          fontWeight: 'bold',
          ...titleSx, // Apply custom styles for title
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default Widget;