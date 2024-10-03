import React from 'react';
export interface FAQ {
    question: string;
    answer: string;
}
export interface FAQSectionProps {
    faqs: FAQ[];
    summarySx?: object;
    detailsSx?: object;
    gap?: number;
}
declare const FAQSection: React.FC<FAQSectionProps>;
export default FAQSection;
