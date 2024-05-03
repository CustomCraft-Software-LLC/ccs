import * as React from 'react';
import './Bar.css';

interface BarProps { 
    bgColor?: string;
    animation?: string;
    percent?: number;
    sColor?: string;
    scaleX?: number;
}

const Bar: React.FC<BarProps> = ({ bgColor = 'rgb(0,0,0,0.8)', animation = '', percent = 0, sColor = 'rgb(70,242,194,0.7)', scaleX = 1.0 }) => {
    const bg_style: React.CSSProperties = {
        backgroundColor: bgColor,
        opacity: 1.0,
        transform: `scaleX(${scaleX})`,
    }

    const progress_style: React.CSSProperties = {
        backgroundColor: sColor,
        width: '50%',
        opacity: 1.0,
    }

    return (
        <div className="bar" style={bg_style}>
            <div className="progress" style={progress_style}></div>
        </div>
    );
};

export default Bar;