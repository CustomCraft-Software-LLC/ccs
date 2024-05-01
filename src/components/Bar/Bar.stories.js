import React from 'react';
import { action } from '@storybook/addon-actions';
import Bar from './Bar.jsx';

export default {
    title: 'Components/Bar', 
    component: Bar,
    parameters: {
        layout: 'centered',
    },
};

export const Default = () => {
    return ( 
        <div>
            <h2>Progress Bar</h2>
            <Bar percent={50}/>
        </div>
    );
}