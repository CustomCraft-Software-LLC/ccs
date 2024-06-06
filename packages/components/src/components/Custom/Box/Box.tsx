import * as React from 'react';
import './Box.css';

interface BoxProps { 
  bgColor?: string, 
  bRad?: string, 
  color?: string, 
  padding?: string, 
  children?: React.ReactNode, 
  className?: string;
}

const Box: React.FC<BoxProps> = ({ bgColor = 'rgb(255,255,255,1.0)', bRad = '5px', color = 'rgb(0,0,0,1.0)', padding = '0', children, className = '' }) => {
  const style: React.CSSProperties = {
    backgroundColor: bgColor,
    borderRadius: bRad,
    color: color,
    padding: padding
  }

  return (
    <div 
      className={`box ${className}`}
      style={style}
    >
        { children }
    </div>
  );
};

export default Box;