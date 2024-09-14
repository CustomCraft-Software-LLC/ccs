import React from 'react';
export interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}
export interface FeaturesProps {
    features: Feature[];
}
declare const Features: React.FC<FeaturesProps>;
export default Features;
