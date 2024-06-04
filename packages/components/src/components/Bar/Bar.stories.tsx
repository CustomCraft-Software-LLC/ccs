import React, { useState, useEffect } from 'react';
import { Meta } from '@storybook/react';
import Bar from './Bar.tsx';

export default {
    title: 'Components/Bar', 
    component: Bar,
    parameters: {
        layout: 'centered',
    },
} as Meta;

export const Default = () => {
    const [percent, setPercent] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPercent((1 + percent) % 100);
        }, 100);

        return () => clearTimeout(timer);
    }, [percent]);
    

    return ( 
        <div>
            <h2>Progress Bar</h2>
            <Bar percent={percent}/>
        </div>
    );
}