import React from 'react';

import { Card, CardContent, Typography, useTheme } from '@mui/material';
// import { Gauge, gaugeClasses } from '@mui/x-charts';

import Widget from '../Widget/Widget';

const GaugeWidget = () => {
    const theme = useTheme();
    
    /*
    const style: React.CSSProperties = { 
        [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
            fill: `${theme.palette.info.main}`,
        },
    }
    */

    /*
    return ( 
        <Widget>
            <Typography variant="h5">Chart</Typography>
            <Gauge 
                width={100}
                height={100}
                value={80}
                startAngle={-120}
                endAngle={120}
                sx = {style}
            />
        </Widget>
    );
    */
}

export default GaugeWidget;