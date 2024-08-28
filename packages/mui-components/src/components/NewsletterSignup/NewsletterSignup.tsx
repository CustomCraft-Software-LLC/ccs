import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

export interface NewsletterSignupProps {
  onSubmit: (email: string) => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    onSubmit(email);
    setEmail('');
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', textAlign: 'center', p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Subscribe to Our Newsletter
      </Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Subscribe
      </Button>
    </Box>
  );
};

export default NewsletterSignup;