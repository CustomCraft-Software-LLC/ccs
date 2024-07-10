import React, { useState, useEffect } from 'react';
import { Meta } from '@storybook/react';
import CountdownTimer from './CountdownTimer';

export default {
    title: 'Components/CountdownTimer', 
    component: CountdownTimer,
    parameters: {
        layout: 'centered',
    },
} as Meta;

export const Default = () => {
    return ( 
        <CountdownTimer targetDate="2024-12-31T23:59:59" />
    );
}