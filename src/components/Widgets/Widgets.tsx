import * as React from 'react';
import './Widgets.css';

interface WidgetsProps { 
  children?: React.ReactNode;
}


const Widgets: React.FC<WidgetsProps> = ({children}) => {
  return (
    <div className="widgets">
        {children}
    </div>
  );
};

export default Widgets;