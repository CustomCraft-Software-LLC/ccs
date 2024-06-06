import React from 'react';
import './StatWidget.css';
import Box from '../Custom/Box/Box.tsx';
import Number from '../Custom/Number/Number.tsx';
import Percentage from '../Percentage/Percentage.tsx';
import Widget from '../Widget/Widget.tsx';

interface StatWidgetProps { 
  isNum: boolean;
  title?: string;
  stat?: number;
}

const StatWidget: React.FC<StatWidgetProps> = ({ isNum, title = '', stat = 0 }) => { 
  return ( 
    <Widget title={title}>
        {isNum ? ( 
          <Number num={stat} />
        ) : ( 
          <Percentage sign='+' percent={stat} /> 
        )}
    </Widget>
  );
}

export default StatWidget;