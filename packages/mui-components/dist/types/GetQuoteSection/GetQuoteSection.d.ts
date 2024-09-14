import React from 'react';
interface GetQuoteSectionProps {
    title?: string;
    description?: string;
    buttonText?: string;
    onSubmit?: (formData: {
        name: string;
        email: string;
        message: string;
    }) => void;
}
declare const GetQuoteSection: React.FC<GetQuoteSectionProps>;
export default GetQuoteSection;
