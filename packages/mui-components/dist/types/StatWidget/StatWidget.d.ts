import React from 'react';
export interface StatWidgetProps {
    isNum: boolean;
    title?: string;
    stat?: number;
    titleSx?: React.CSSProperties;
    statSx?: React.CSSProperties;
}
declare const StatWidget: React.FC<StatWidgetProps>;
export default StatWidget;
