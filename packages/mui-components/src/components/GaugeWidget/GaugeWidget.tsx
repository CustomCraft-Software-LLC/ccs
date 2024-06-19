import React from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts';

import theme from '../styles/theme.js';

import BaseWidget from './BaseWidget.jsx';

const style = { 
    [`& .${gaugeClasses.valueText}`]: {
        fontSize: 40,
    },
    [`& .${gaugeClasses.valueArc}`]: {
        fill: `${theme.palette.info.main}`,
    },
}

const GaugeWidget = () => { 
    return ( 
        <BaseWidget>
            <Typography variant="h5">Chart</Typography>
            <Gauge 
                width={100}
                height={100}
                value={80}
                startAngle={-120}
                endAngle={120}
                sx = {style}
            />
        </BaseWidget>
    );
}

export default GaugeWidget;