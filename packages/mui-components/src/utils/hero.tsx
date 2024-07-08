import React from "react";
import { Typography, useTheme } from "@mui/material";

export const createHeroBlockDesktop = (heading: string[], subheading: string) => { 
    const wordList = Array.isArray(heading) ? heading : [];
    const theme = useTheme();

    return ( 
        <React.Fragment>
            {wordList.map((word, i) => (
                <Typography 
                    variant="h1"
                    key={i} 
                    sx={{ 
                        display: 'block', 
                        textAlign: 'center',
                        background: `linear-gradient(0deg, ${theme.palette.primary.main}, rgba(255, 255, 255, 0.5))`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {word}
                </Typography>
            ))}
            {typeof subheading === 'string' && (
                <Typography 
                    variant='body1' 
                    sx={{ mt: 3, textAlign: 'center' }}
                >
                    {subheading}
                </Typography>
            )}
        </React.Fragment>
    );
}

export const createHeroBlockMobile = (heading: string[], subheading: string) => { 
    const wordList = Array.isArray(heading) ? heading : [];

    return ( 
        <React.Fragment>
            {wordList.map((word, i) => (
                <Typography 
                    variant="h1"
                    key={i} 
                    sx={{ display: 'block', textAlign: 'center' }}
                >
                    {word}
                </Typography>
            ))}
            {typeof subheading === 'string' && (
                <Typography 
                    variant='body1' 
                    sx={{ mt: 3, textAlign: 'center' }}
                >
                    {subheading}
                </Typography>
            )}
        </React.Fragment>
    );
}