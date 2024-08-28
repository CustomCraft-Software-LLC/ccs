import React, { useState } from 'react';
import { TextField, Button, Box, Typography, SxProps, Theme } from '@mui/material';

export interface NewsletterSignupProps {
  onSubmit: (email: string) => void;
  buttonText?: string;
  label?: string;
  placeholder?: string;
  validateEmail?: (email: string) => string | null; // Custom validation function
  loading?: boolean;
  successMessage?: string;
  errorMessage?: string;
  boxSx?: SxProps<Theme>;
  textFieldSx?: SxProps<Theme>;
  buttonSx?: SxProps<Theme>;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  onSubmit,
  buttonText = 'Subscribe',
  label = 'Email',
  placeholder = 'Enter your email',
  validateEmail,
  loading = false,
  successMessage = 'Thank you for subscribing!',
  errorMessage = 'Please enter a valid email address.',
  boxSx,
  textFieldSx,
  buttonSx,
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const validationError = validateEmail ? validateEmail(email) : null;
    if (validationError) {
      setError(validationError);
      return;
    }

    if (email.trim() === '') {
      setError(errorMessage);
      return;
    }

    onSubmit(email);
    setEmail('');
    setSuccess(true);
  };

  return (
    <Box
      component="form"
      sx={{ maxWidth: 400, mx: 'auto', textAlign: 'center', p: 2, ...boxSx }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h6" gutterBottom>
        Subscribe to Our Newsletter
      </Typography>
      {success && <Typography color="success.main">{successMessage}</Typography>}
      <TextField
        label={label}
        placeholder={placeholder}
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!error}
        helperText={error}
        required
        sx={textFieldSx}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
        sx={{ mt: 2, ...buttonSx }}
      >
        {loading ? 'Submitting...' : buttonText}
      </Button>
    </Box>
  );
};

export default NewsletterSignup;