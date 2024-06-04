import React, { useState } from 'react';
import './Sidebar.css';
import { Drawer, List } from '@mui/material';

interface SidebarProps { 
  shadowColor?: string;
  bgColor?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ shadowColor = 'rgba(0,0,0,0.1)', bgColor = 'rgba(255,255,255,1.0)', children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const style: React.CSSProperties = {
    backgroundColor: bgColor,
    boxShadow: `0 4px 8px ${shadowColor}`,
  }

  return (
    <Drawer
      open={true}
      variant='permanent'
      anchor="left"
      sx={style}
    >
      <List>
        {children}
      </List>
    </Drawer>
  );
};

export default Sidebar;