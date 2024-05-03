import * as React from 'react';
import './Sidebar.css';

interface SidebarProps { 
  shadowColor?: string;
  bgColor?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ shadowColor = 'rgba(0,0,0,0.1)', bgColor = 'rgba(255,255,255,1.0)', children }) => {
  const style: React.CSSProperties = {
    backgroundColor: bgColor,
    boxShadow: `0 4px 8px ${shadowColor}`
  }

  return (
    <div className="sidebar" style={style}>
        <ul>
            {children}
        </ul>
    </div>
  );
};

export default Sidebar;