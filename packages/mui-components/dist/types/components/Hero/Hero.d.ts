import React from 'react';
interface HeroProps {
    heading: string;
    subheading: string;
    image: string;
    alt?: string;
}
declare const HeroSection: React.FC<HeroProps>;
export default HeroSection;
