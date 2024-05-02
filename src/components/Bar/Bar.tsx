import * as React from 'react';
import './Bar.css';

interface BarProps { 
    bgColor: string;
    animation: string;
    percent: string;
    sColor: string;
}

const Bar: React.FC<BarProps> = ({ bgColor, animation, percent, sColor }) => {
    const bg_style: React.CSSProperties = {
        backgroundColor: bgColor,
        opacity: 1.0,
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