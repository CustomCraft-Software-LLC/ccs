import React, { useState } from 'react';
import './Sidebar.css';

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
    display: isOpen ? 'none' : 'flex',
  }

  const toggleButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    left: '10px',
  };

  return (
    <div>
      <button onClick={toggleSidebar} style={toggleButtonStyle}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <div className="sidebar" style={style}>
          <ul>
              {children}
          </ul>
      </div>
    </div>
  );
};

export default Sidebar;