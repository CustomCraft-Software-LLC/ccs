import React from 'react';
import { SxProps, Theme } from '@mui/material';
export interface NewsletterSignupProps {
    onSubmit: (email: string) => void;
    buttonText?: string;
    label?: string;
    placeholder?: string;
    validateEmail?: (email: string) => string | null;
    loading?: boolean;
    successMessage?: string;
    errorMessage?: string;
    boxSx?: SxProps<Theme>;
    textFieldSx?: SxProps<Theme>;
    buttonSx?: SxProps<Theme>;
}
declare const NewsletterSignup: React.FC<NewsletterSignupProps>;
export default NewsletterSignup;
