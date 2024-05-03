import React, { useEffect } from 'react';
import { Meta } from '@storybook/react';
import Widget from './Widget.tsx';
// import { createChart } from '../../utils/chart'; 

export default {
    title: 'Components/Widget', 
    component: Widget,
    parameters: {
        layout: 'centered',
    },
} as Meta;

export const Default = () => {
    /*
    useEffect(() => {
        createChart();
    }, []);
    */

    return (   
        <Widget>
            <canvas id="myChart" width="400" height="400"></canvas>
        </Widget>
    );
}