import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';
export interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
    onSubscribe?: () => void;
    buttonLabel?: string;
    icon?: SvgIconComponent;
    priceInterval?: string;
}
declare const PricingCard: React.FC<PricingCardProps>;
export default PricingCard;
