import React, { useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import Widget from './Widget.tsx';
// import { createChart } from '../../utils/chart'; 

export default {
    title: 'Components/Widget', 
    component: Widget,
    parameters: {
        layout: 'centered',
    },
};

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