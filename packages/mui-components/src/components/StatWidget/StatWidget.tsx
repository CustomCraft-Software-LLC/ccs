import React from 'react';
import './StatWidget.css';
import Widget from '../Widget/Widget';
import { Typography } from '@mui/material';

interface StatWidgetProps { 
  isNum: boolean;
  title?: string;
  stat?: number;
}

const StatWidget: React.FC<StatWidgetProps> = ({ isNum, title = '', stat = 0 }) => { 
  return ( 
    <Widget title={title}>
        {isNum ? ( 
          <Typography>{title}</Typography>
        ) : ( 
          <Typography>{title}</Typography>
        )}
    </Widget>
  );
}

export default StatWidget;