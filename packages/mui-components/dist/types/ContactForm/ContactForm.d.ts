import React from 'react';
export interface ContactFormProps {
    onSubmit?: (data: {
        name: string;
        email: string;
        message: string;
    }) => void;
    backendUrl: string;
}
declare const ContactForm: React.FC<ContactFormProps>;
export default ContactForm;
