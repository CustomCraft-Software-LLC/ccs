import React from 'react';
import './StatWidget.css';
interface StatWidgetProps {
    isNum: boolean;
    title?: string;
    stat?: number;
}
declare const StatWidget: React.FC<StatWidgetProps>;
export default StatWidget;
