import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0'
import Bar from './Bar.jsx';

export default {
    title: 'Components/Bar', 
    component: Bar,
    parameters: {
        layout: 'centered',
    },
} as Meta;

export const Default = () => {
    return ( 
        <div>
            <h2>Progress Bar</h2>
            <Bar percent={50}/>
        </div>
    );
}