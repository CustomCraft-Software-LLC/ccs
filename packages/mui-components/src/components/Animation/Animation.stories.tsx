import React, { useState, useEffect } from 'react';
import { Meta } from '@storybook/react';
import Animation from './Animation';

export default {
    title: 'Components/Animation', 
    component: Animation,
    parameters: {
        layout: 'centered',
    },
} as Meta;

export const Default = () => {
    return ( 
        <Animation name="bounceIn">
            <h1>Hello</h1>
        </Animation>
    );
}