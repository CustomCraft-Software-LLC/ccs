import React from 'react';
export interface HeroSectionProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    ctaText?: string;
    ctaLink?: string;
    overlayColor?: string;
    textColor?: string;
}
declare const HeroSection: React.FC<HeroSectionProps>;
export default HeroSection;
