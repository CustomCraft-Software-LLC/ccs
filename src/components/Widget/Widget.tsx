import * as React from 'react';
import Box  from '../Box/Box.tsx';
import './Widget.css';

interface WidgetProps { 
  title: string;
  children?: React.ReactNode;
}


const Widget: React.FC<WidgetProps> = ({ title = 'title' , children }) => {
  return (
    <div>
      <Box>
        <div>
          <div>
            <h3>{title}</h3>
          </div>
        </div>
        <div>
          <div>
            {children}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Widget;