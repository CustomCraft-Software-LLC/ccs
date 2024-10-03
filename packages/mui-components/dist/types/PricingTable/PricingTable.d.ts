import React from 'react';
export interface PricingPlan {
    title: string;
    price: string;
    features: string[];
    buttonText: string;
    onButtonClick: () => void;
}
export interface PricingTableProps {
    plans: PricingPlan[];
}
declare const PricingTable: React.FC<PricingTableProps>;
export default PricingTable;
