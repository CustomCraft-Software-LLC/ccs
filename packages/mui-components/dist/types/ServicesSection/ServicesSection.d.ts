import React from 'react';
import { SxProps, Theme } from '@mui/material';
interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
    extraContent?: React.ReactNode;
}
export interface ServicesSectionProps {
    services: Service[];
    sectionTitle?: string;
    containerSx?: SxProps<Theme>;
    gridItemSx?: SxProps<Theme>;
    paperSx?: SxProps<Theme>;
}
declare const ServicesSection: React.FC<ServicesSectionProps>;
export default ServicesSection;
