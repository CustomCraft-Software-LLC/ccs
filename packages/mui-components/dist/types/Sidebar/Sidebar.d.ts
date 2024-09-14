import React from 'react';
import { SxProps, Theme } from '@mui/material';
interface SidebarItem {
    text: string;
    icon?: React.ReactNode;
    path?: string;
}
export interface SidebarProps {
    title?: string;
    items: SidebarItem[];
    onItemClick?: (path: string) => void;
    sx?: SxProps<Theme>;
}
declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
