import React from "react";
import { Grid, Box } from '@mui/material';

import { createHeroBlockDesktop } from "../../utils/hero";

interface HeroDesktopProps { 
    heading: string[];
    subheading: string;
    image: string;
    alt?: string;
}

const HeroDesktop: React.FC<HeroDesktopProps> = ({ heading, subheading, image, alt="image" }) => { 
    return ( 
        <Grid container>
            <Grid item md={6} xs={12} sx={{mt: 15}}>
                {createHeroBlockDesktop(heading, subheading)}
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