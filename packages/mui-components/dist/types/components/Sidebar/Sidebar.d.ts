import React from 'react';
import './Sidebar.css';
interface SidebarProps {
    shadowColor?: string;
    bgColor?: string;
    children?: React.ReactNode;
}
declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
