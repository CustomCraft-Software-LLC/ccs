import React from 'react';
import { Box, Typography, Grid, Paper, SxProps, Theme } from '@mui/material';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode; // Allows any JSX element
  extraContent?: React.ReactNode;
}

export interface ServicesSectionProps {
  services: Service[];
  sectionTitle?: string;
  containerSx?: SxProps<Theme>;
  gridItemSx?: SxProps<Theme>;
  paperSx?: SxProps<Theme>;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  sectionTitle = 'Our Services',
  containerSx,
  gridItemSx,
  paperSx,
}) => {
  return (
    <Box sx={{ py: 4, ...containerSx }}>
      {sectionTitle && (
        <Typography variant="h4" align="center" gutterBottom>
          {sectionTitle}
        </Typography>
      )}
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={gridItemSx}>
            <Paper sx={{ p: 3, textAlign: 'center', ...paperSx }}>
              <Box sx={{ fontSize: 40, mb: 2, display: 'flex', justifyContent: 'center' }}>
                {service.icon}
              </Box>
              <Typography variant="h6" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2">
                {service.description}
              </Typography>
              {service.extraContent && <Box mt={2}>{service.extraContent}</Box>}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;