import * as React from 'react';
import Box  from '../Box/Box.tsx';
import './Widget.css';

interface WidgetProps { 
  title: string;
  children?: React.ReactNode;
}


const Widget: React.FC<WidgetProps> = ({ title = 'title' , children }) => {
  return (
    <Box>
      <div>
        <h3>{title}</h3>
      </div>
      {children}
    </Box>
  );
};

export default Widget;