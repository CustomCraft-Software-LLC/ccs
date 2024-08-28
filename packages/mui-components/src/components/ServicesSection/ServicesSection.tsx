import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface Service {
  title: string;
  description: string;
  icon: SvgIconComponent;
}

export interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <service.icon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2">
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;