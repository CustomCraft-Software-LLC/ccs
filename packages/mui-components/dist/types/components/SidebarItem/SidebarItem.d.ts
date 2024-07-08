import * as React from 'react';
import './SidebarItem.css';
interface SidebarItemProps {
    bgColor?: string;
    to?: string;
    name?: string;
    avatar?: string;
}
declare const SidebarItem: React.FC<SidebarItemProps>;
export default SidebarItem;
