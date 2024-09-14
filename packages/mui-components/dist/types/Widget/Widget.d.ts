import React from 'react';
import { SxProps, Theme } from '@mui/system';
export interface WidgetProps {
    title: string;
    children?: React.ReactNode;
    sx?: SxProps<Theme>;
    titleSx?: SxProps<Theme>;
    titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
declare const Widget: React.FC<WidgetProps>;
export default Widget;
