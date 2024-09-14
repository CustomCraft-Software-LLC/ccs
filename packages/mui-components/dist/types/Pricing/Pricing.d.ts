import React from 'react';
import { SxProps, Theme } from '@mui/system';
export interface PricingProps {
    title: string;
    pricing: number;
    to: string;
    buttonText: string;
    onButtonClick?: () => void;
    sx?: SxProps<Theme>;
}
declare const Pricing: React.FC<PricingProps>;
export default Pricing;
