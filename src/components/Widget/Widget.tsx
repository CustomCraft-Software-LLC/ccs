import * as React from 'react';
import Box  from '../Box/Box.tsx';
import './Widget.css';

interface WidgetProps { 
  title: string;
  children?: React.ReactNode;
}


const Widget: React.FC<WidgetProps> = ({ title = 'title' , children }) => {
  return (
    <Box bRad="40px">
      <div className="widget">
        <h3>{title}</h3>
      </div>
      {children}
    </Box>
  );
};

export default Widget;