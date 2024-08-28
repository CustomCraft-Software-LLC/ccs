import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  overlayColor?: string;
  textColor?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  textColor = '#fff',
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        color: textColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: overlayColor,
        }}
      />
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h5" component="p" gutterBottom>
            {subtitle}
          </Typography>
        )}
        {ctaText && ctaLink && (
          <Button
            variant="contained"
            color="primary"
            href={ctaLink}
            sx={{
              mt: 4,
              px: 5,
              py: 1.5,
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            {ctaText}
          </Button>
        )}
      </Container>
    </Box>
  );
};

export default HeroSection;