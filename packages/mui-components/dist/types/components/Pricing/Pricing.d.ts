import React from 'react';
interface PricingProps {
    title: string;
    children?: React.ReactNode;
    pricing: number;
    to: string;
    buttonText: string;
}
declare const Pricing: React.FC<PricingProps>;
export default Pricing;
