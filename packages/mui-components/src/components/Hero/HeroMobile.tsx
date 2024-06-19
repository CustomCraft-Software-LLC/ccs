import React from "react";
import { Grid, Box } from '@mui/material';

import { createHeroBlockMobile } from "../utils/hero.js";

const HeroMobile = ({ heading, subheading, image, alt }) => { 
    return ( 
        <Grid container>
            <Grid item md={6} xs={12} sx={{mt: 5}}>
                {createHeroBlockMobile(heading, subheading)}
            </Grid>
            <Grid item md={6} xs={12}>
                <Box component="img"
                    src={image}
                    alt={alt}
                    sx={{
                        mt: 5,
                        height: '100%',
                        width: '100%',
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default HeroMobile;