import * as React from 'react';
import './Widget.css';
interface WidgetProps {
    title: string;
    children?: React.ReactNode;
}
declare const Widget: React.FC<WidgetProps>;
export default Widget;
