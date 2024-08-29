import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

export interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
  backendUrl: string;  // Add backendUrl prop
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, backendUrl }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const formData = { name, email, message };

    try {
      // Send form data to the backend
      const response = await axios.post(backendUrl, formData);

      // Optional: call onSubmit if provided
      if (onSubmit) {
        onSubmit(formData);
      }

      console.log('Form submitted successfully:', response.data);

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Contact Us
      </Typography>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Message"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;