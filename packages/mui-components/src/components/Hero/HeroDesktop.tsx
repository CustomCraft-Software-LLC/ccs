import React from "react";
import { Grid, Box } from '@mui/material';

import { createHeroBlockDesktop } from "../utils/hero.js";

import Animation from "../Animation/Animation.tsx";

interface Hero

const HeroDesktop = ({ heading, subheading, image, alt }) => { 
    return ( 
        <Grid container>
            <Grid item md={6} xs={12} sx={{mt: 15}}>
                <Animation name='bounceIn'>
                    {createHeroBlockDesktop(heading, subheading)}
                </Animation>
            </Grid>
            <Grid item md={6} xs={12}>
                <Box component="img"
                    src={image}
                    alt={alt}
                    height='100%'
                    width='100%'
                    sx={{
                        height: '100%',
                        width: '100%',
                        scale: '0.6'
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default HeroDesktop;