import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ padding: 3, textAlign: 'center' }}>
              <Box sx={{ fontSize: 40 }}>{feature.icon}</Box>
              <Typography variant="h6" gutterBottom>{feature.title}</Typography>
              <Typography variant="body1">{feature.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;