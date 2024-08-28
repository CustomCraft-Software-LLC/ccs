import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  onButtonClick: () => void;
}

export interface PricingTableProps {
  plans: PricingPlan[];
}

const PricingTable: React.FC<PricingTableProps> = ({ plans }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Container>
        <Grid container spacing={4}>
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ padding: 3, textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  {plan.price}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {plan.features.join(', ')}
                </Typography>
                <Button variant="contained" color="primary" onClick={plan.onButtonClick}>
                  {plan.buttonText}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingTable;