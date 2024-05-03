import React from 'react';
import './StatWidget.css';
import Box from '../Box/Box.tsx';
import Number from '../Number/Number.tsx';
import Percentage from '../Percentage/Percentage.tsx';

interface StatWidgetProps { 
  isNum: boolean;
  title?: string;
  stat?: number;
}

const StatWidget: React.FC<StatWidgetProps> = ({ isNum, title = '', stat = 0 }) => { 
  return ( 
    <Box padding="0px">
      <div>
          <div>
            <h3>{title}</h3>
          </div>
          <div>
            {isNum ? ( 
              <Number num={stat} />
            ) : ( 
              <Percentage sign='+' percent={stat} /> 
            )}
          </div>
      </div>
    </Box>
  );
}

export default StatWidget;