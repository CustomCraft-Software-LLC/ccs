import React, { useEffect } from 'react';
import { Meta } from '@storybook/react';
import Widget from './Widget';
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
        <Widget title="height">
        </Widget>
    );
}