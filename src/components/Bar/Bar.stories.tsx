import * as React from 'react';
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
    return ( 
        <div>
            <h2>Progress Bar</h2>
            <Bar percent={50}/>
        </div>
    );
}