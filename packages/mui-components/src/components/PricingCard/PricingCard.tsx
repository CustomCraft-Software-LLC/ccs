import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, CardHeader, IconButton, SxProps, Theme } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

// Define the props for the PricingCard component
export interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  onSubscribe?: () => void;
  buttonLabel?: string;
  icon?: SvgIconComponent;
  priceInterval?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  onSubscribe,
  buttonLabel = 'Subscribe',
  icon: Icon,
  priceInterval = 'month',
}) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        title={title}
        subheader={`$${price} / ${priceInterval}`}
        action={Icon && (
          <IconButton aria-label="info">
            <Icon />
          </IconButton>
        )}
        sx={{ textAlign: 'center', backgroundColor: '#f5f5f5' }}
      />
      <CardContent>
        <Typography variant="body2" component="ul" sx={{ paddingLeft: 2 }}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', marginTop: 'auto' }}>
        <Button variant="contained" color="primary" onClick={onSubscribe}>
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PricingCard;