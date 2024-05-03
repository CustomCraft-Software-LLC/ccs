import * as React from 'react';
import './SidebarItem.css';
import PropTypes from 'prop-types';

interface SidebarItemProps { 
  bgColor?: string;
  to?: string;
  children?: React.ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ bgColor = 'rgba(255,255,255,1.0)', to = '/', children, ...props }) => {
  const style: React.CSSProperties = {
    backgroundColor: bgColor,
  }

  return (
    <li>
      <a 
        href={to}
        className="sidebarItem"
        style={style}
        {...props}
      >
        {children}
      </a>
    </li>
  );
};

export default SidebarItem;