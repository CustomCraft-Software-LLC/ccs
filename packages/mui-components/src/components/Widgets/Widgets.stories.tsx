import React, { useEffect } from 'react';
import { Meta } from '@storybook/react';
import Widgets from './Widgets';
import Widget from '../Widget/Widget';

export default {
    title: 'Components/Widgets', 
    component: Widgets,
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
        <Widgets>
            <Widget title="1"></Widget>
            <Widget title="2"></Widget>
            <Widget title="3"></Widget>
            <Widget title="4"></Widget>
            <Widget title="1"></Widget>
            <Widget title="2"></Widget>
            <Widget title="3"></Widget>
            <Widget title="4"></Widget>
        </Widgets>
    );
}